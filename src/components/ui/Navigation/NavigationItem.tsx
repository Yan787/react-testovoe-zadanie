import { FC } from "react";
import cn from "classnames";
import { TabsNames } from "./NavigationData";

import styles from "./Navigation.module.scss";
import { INavigationList } from "../../../utils/@globalTypes";

interface INavigationItem {
  item: INavigationList;
  activeTab: TabsNames;
}

const NavigationItem: FC<INavigationItem> = ({
  item: { title, key, link },
  activeTab,
}) => {
  return (
    <div className={cn(styles.item, { [styles.active]: activeTab === key })}>
      {title}
    </div>
  );
};

export default NavigationItem;
