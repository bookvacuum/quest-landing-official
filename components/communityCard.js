import React from "react";
import Image from "next/image";
import styles from "../styles/communityCard.module.css"



/** joinedClassName explanation: The background image is determined by the classname we pass in. The classnames are conjoined 
 * with the CSS for the card container as a component.
 */

const QuestCard = ({ cardName, logoImage, description}) => {


  return (
    <div className={styles.card}>
        <img src={logoImage} className={styles.image} width={200} height={200}/>
        <h2>{cardName}</h2>
        <p>{description}</p>
    </div>
  );
};

export default QuestCard;