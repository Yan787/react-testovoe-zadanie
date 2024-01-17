import { useState } from "react";
import { categoryList, CategoryNames } from "./CategoryData";
import CategoryItem from "./CategoryItem";

import styles from "./Category.module.scss";

const Category = () => {
  const [activeTab, setActiveTab] = useState(CategoryNames.Manufacturers);

  const onTabClick = (key: CategoryNames) => () => {
    setActiveTab(key);
  };

  return (
    <div className={styles.wrapper}>
      {categoryList.map((item) => (
        <div key={item.key} onClick={onTabClick(item.key)}>
          <CategoryItem item={item} activeTab={activeTab} />
        </div>
      ))}
    </div>
  );
};

export default Category;
