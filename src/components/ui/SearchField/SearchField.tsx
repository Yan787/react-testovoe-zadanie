import { type ChangeEvent, FC } from "react";
import { Search } from "../../../assets/images";

import styles from "./SearchField.module.scss";

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder="Что будем искать?"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Search />
    </div>
  );
};

export default SearchField;
