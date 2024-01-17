import { useState } from "react";
import { navigationList, TabsNames } from "./NavigationData";
import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.Nursery);

  const onTabClick = (key: TabsNames) => () => {
    setActiveTab(key);
  };

  return (
    <div className={styles.wrapper}>
      {navigationList.map((item) => (
        <div key={item.key} onClick={onTabClick(item.key)}>
          <NavigationItem item={item} activeTab={activeTab} />
        </div>
      ))}
    </div>
  );
};

export default Navigation;
