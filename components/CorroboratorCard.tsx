import React from "react";
import styles from "../styles/CorroboratorCard.module.css"

const CorroboratorCard = ({ style, userIcon, verificationText, timestamp, comment}) => {


  return (
    <div className={style}>
      <div className={styles.flexRow}>
      <img className={styles.userIcon} src={userIcon}  />
        <div className={styles.flexColumn}>
        <p className={styles.textSansMargin}> <img className={styles.verifiedIcon} src="/images/verified_icon.svg"/>{verificationText}</p>
        <p className={styles.textSansMargin}>{timestamp}</p>
        </div>
        </div>
        <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default CorroboratorCard;