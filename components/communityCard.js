import React from "react";
import styles from "../styles/communityCard.module.css"



/** joinedClassName explanation: The background image is determined by the classname we pass in. The classnames are conjoined 
 * with the CSS for the card container as a component.
 */

const QuestCard = ({ cardName, logoImage, description, buttonText}) => {


  return (
    <div className={cardName}>
        <img src={logoImage} className={styles.logoImage} />
        <p>{description}</p>
        <button>{buttonText}</button>
    </div>
  );
};

export default QuestCard;