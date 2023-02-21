export default function About() {
  return (
    <div>
      {/* <form
        id="form-container"
        action="/api/send-to-google-sheets"
        method="post"
      >
        <input
          type="email"
          id="enter-email-input"
          name="email"
          placeholder="Email address:"
        />
        <button id="waitlist-button" type="submit">
          Join Waitlist
        </button>
      </form> */}

      <form
        id="form-container"
        action="/api/send-to-google-sheets"
        method="post"
      >
        <input
          type="email"
          id="enter-email-input"
          name="email"
          placeholder="Email address:"
        />
        <button id="waitlist-button" type="submit">
          Join Waitlist
        </button>
      </form>
      <p>whatever</p>
    </div>
  );
}
