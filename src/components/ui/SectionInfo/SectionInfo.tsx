import { FC, ReactNode, useState } from "react";
import { ArrowDown } from "../../../assets/images";
import cn from "classnames";

import styles from "./SectionInfo.module.scss";

interface ISectionInfo {
  children: ReactNode;
  title: string;
}

const SectionInfo: FC<ISectionInfo> = ({ children, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.selectContainer}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>

        <div onClick={() => setIsOpened(!isOpened)} className={styles.action}>
          <div className={styles.button}>Развернуть</div>
          <div
            className={cn(styles.arrowDown, {
              [styles.activeArrowDown]: isOpened,
            })}
          >
            <ArrowDown />
          </div>
        </div>
      </div>

      <div
        className={cn({
          [styles.activeChildren]: isOpened,
        })}
      >
        {isOpened && children}
      </div>
    </div>
  );
};

export default SectionInfo;
