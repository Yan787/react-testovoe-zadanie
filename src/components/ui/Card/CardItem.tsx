import { FC } from "react";
import { ICard } from "./interfaceCard";

import styles from "./Card.module.scss";

const CardItem: FC<{ item: ICard }> = ({ item: { photo, name, nursery } }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={photo} alt="photo" />
      <div className={styles.label}>
        <div className={styles.name}>{name}</div>
        <div className={styles.nursery}>{nursery}</div>
      </div>
    </div>
  );
};

export default CardItem;
