import { FC } from "react";
import CardItem from "./CardItem";
import { ICard } from "./interfaceCard";

import styles from "./Card.module.scss";

const Card: FC<{ items: ICard[] }> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Card;
