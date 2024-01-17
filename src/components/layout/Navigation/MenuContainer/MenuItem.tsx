import { FC } from "react";
import { IMenu } from "./menuInterface";
import cn from "classnames";

import styles from "./MenuContainer.module.scss";

interface IMenuItem {
  item: IMenu;
  isOpened: boolean;
}

const MenuItem: FC<IMenuItem> = ({ item: { title, icon, link }, isOpened }) => {
  return (
    <div className={cn(styles.menu, { [styles.active]: isOpened })}>
      <img src={icon} alt={title} />
      {isOpened && <span className={styles.title}>{title}</span>}
    </div>
  );
};

export default MenuItem;
