import { useState } from "react";
import { LogoClose, LogoOpen } from "../../../assets/images";
import MenuContainer from "./MenuContainer/MenuContainer";
import cn from "classnames";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const changeState = () => {
    return setIsOpened(!isOpened);
  };

  return (
    <div className={cn(styles.wrapper, { [styles.active]: isOpened })}>
      <div onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <LogoOpen /> : <LogoClose />}
      </div>
      <MenuContainer isOpened={isOpened} changeState={changeState} />
    </div>
  );
};

export default Navigation;
