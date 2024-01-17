import { FC } from "react";
import cn from "classnames";

import { ICategoryList } from "../../../utils/@globalTypes";
import { CategoryNames } from "./CategoryData";

import styles from "./Category.module.scss";

interface ICategoryItem {
  item: ICategoryList;
  activeTab: CategoryNames;
}

const CategoryItem: FC<ICategoryItem> = ({
  item: { title, key, link },
  activeTab,
}) => {
  return (
    <div className={cn(styles.item, { [styles.active]: activeTab === key })}>
      {title}
    </div>
  );
};

export default CategoryItem;
