import { FC, useState } from "react";
import { ArrowCircleDown } from "../../../assets/images";
import styles from "./Dropdown.module.scss";
import { IDropDown } from "./interfaceDropDown";

interface IDropdown {
  title?: string;
  currentValue: string;
  data: IDropDown[];
  changeValue: (item: string) => void;
}

const Dropdown: FC<IDropdown> = ({
  title,
  currentValue,
  data,
  changeValue,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className={styles.title}>{title}</div>

      <div className={styles.container}>
        <span className={styles.text}>{currentValue}</span>
        <div onClick={() => setIsOpened(!isOpened)}>
          <ArrowCircleDown />
        </div>
      </div>

      {isOpened && (
        <div className={styles.dropDown}>
          {data.slice(0, 4).map((item) => (
            <div
              onClick={() => {
                setIsOpened(false);
                changeValue(item.item);
              }}
              key={item.id}
              className={styles.item}
            >
              {item.item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
