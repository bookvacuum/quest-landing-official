

import type { NextApiRequest, NextApiResponse } from 'next'


/**
 * Updates values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to update.
 * @param {object} valueInputOption Value update options.
 * @param {(string[])[]} _values A 2d array of values to update.
 * @return {obj} spreadsheet information
 */


type Data = {
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {GoogleAuth} = require('google-auth-library');

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client: { credentials: { refresh_token: any; }; }) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user' || process.env.type,
    client_id: key.client_id || process.env.client_id,
    client_secret: key.client_secret || process.env.client_secret,
    refresh_token: client.credentials.refresh_token || process.env.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH || process.env,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}


  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  const service = google.sheets({version: 'v4', auth});
  let values = [
    [
      req.body.email
    ],
  ];
  const resource = {
    values,
  };
  try {
    const result = await service.spreadsheets.values.append({
      spreadsheetId: "1J6ttF7KbPN4CaLrjUSoevv1h-IIFk9QUXD-r4brCeLU",
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      resource,
    });
    console.log('%d cells updated.', result.data.updatedCells);
    return res.redirect(302, "/index.html")
  } catch (err) {
    // TODO (Developer) - Handle exception
    res.status(500)
    res.end()
    throw err;
  }
}


 