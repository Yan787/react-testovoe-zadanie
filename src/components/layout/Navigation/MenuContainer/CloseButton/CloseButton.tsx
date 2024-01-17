import { FC } from "react";
import { ILastMenu } from "../menuInterface";
import cn from "classnames";

import styles from "../MenuContainer.module.scss";

interface ICloseButton {
  item: ILastMenu;
  isOpened: boolean;
  changeState: () => void;
}

const CloseButton: FC<ICloseButton> = ({
  item: { title, icon },
  isOpened,
  changeState,
}) => {
  return (
    <div
      onClick={changeState}
      className={cn(styles.menu, {
        [styles.active]: isOpened,
      })}
    >
      <img src={icon} alt={title} />
      {isOpened && <span className={styles.title}>{title}</span>}
    </div>
  );
};

export default CloseButton;
