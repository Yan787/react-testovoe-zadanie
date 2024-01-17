import { useState } from "react";
import Card from "../../ui/Card/Card";
import Category from "../../ui/Category/Category";
import Dropdown from "../../ui/Dropdown/Dropdown";
import { IDropDown } from "../../ui/Dropdown/interfaceDropDown";
import Navigation from "../../ui/Navigation/Navigation";
import SearchField from "../../ui/SearchField/SearchField";
import SectionInfo from "../../ui/SectionInfo/SectionInfo";
import { useNursery } from "./useNursery";

const dataСуки = [
  {
    id: 1,
    photo: "/PhotoAnimals/Vega.svg",
    name: "Vega",
    nursery: "Golden Stepway",
  },
  {
    id: 2,
    photo: "/PhotoAnimals/Sega.svg",
    name: "Sega",
    nursery: "Golden Stepway",
  },
  {
    id: 2,
    photo: "/PhotoAnimals/Mega.svg",
    name: "Mega",
    nursery: "Golden Stepway",
  },
];

const dataКобели = [
  {
    id: 1,
    photo: "/PhotoAnimals/Sobaka.svg",
    name: "Sobaka",
    nursery: "Golden Stepway",
  },
  {
    id: 2,
    photo: "/PhotoAnimals/Mark.svg",
    name: "Mark",
    nursery: "Golden Stepway",
  },
  {
    id: 3,
    photo: "/PhotoAnimals/Samuel.svg",
    name: "Samuel",
    nursery: "Golden Stepway",
  },
  {
    id: 4,
    photo: "/PhotoAnimals/Dipper.svg",
    name: "Dipper",
    nursery: "Golden Stepway",
  },
  {
    id: 5,
    photo: "/PhotoAnimals/Vasgen.svg",
    name: "Vasgen",
    nursery: "Golden Stepway",
  },
];

const dropdownData: IDropDown[] = [
  { item: "Golden Stepway", id: 1 },
  { item: "Rabbit Shop", id: 2 },
];

const Nursery = () => {
  const { searchTerm, handleSearch, changeCurrencyValue, currentNursery } =
    useNursery();

  return (
    <div>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      <Navigation />

      <Dropdown
        title="Питомник"
        currentValue={currentNursery}
        data={dropdownData}
        changeValue={changeCurrencyValue}
      />

      <Category />

      <SectionInfo title="Суки">
        <Card items={dataСуки} />
      </SectionInfo>

      <SectionInfo title="Кобели">
        <Card items={dataКобели} />
      </SectionInfo>
    </div>
  );
};

export default Nursery;
