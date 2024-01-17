import { FC } from "react";
import MenuItem from "./MenuItem";
import { firstMenu } from "./menuData";
import CloseButton from "./CloseButton/CloseButton";

import styles from "./MenuContainer.module.scss";

interface IMenuContainer {
  isOpened: boolean;
  changeState: () => void;
}

const MenuContainer: FC<IMenuContainer> = ({ isOpened, changeState }) => {
  return (
    <div className={styles.container}>
      {firstMenu.map((item) => (
        <MenuItem key={item.icon} item={item} isOpened={isOpened} />
      ))}

      <CloseButton
        item={{
          title: "Свернуть",
          icon: isOpened
            ? "/NavigationIcon/more<-.svg"
            : "/NavigationIcon/more->.svg",
        }}
        isOpened={isOpened}
        changeState={changeState}
      />
    </div>
  );
};

export default MenuContainer;
