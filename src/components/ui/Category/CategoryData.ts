import { ICategoryList } from "../../../utils/@globalTypes";

 export enum CategoryNames {
    Manufacturers = 'Производители',
    Litters = 'Пометы',
    Exhibitions = 'Выставки',
    Graduates = 'Выпускники',
}

export const categoryList: ICategoryList[] = [
    {
      title: `Производители`,
      key: CategoryNames.Manufacturers,
      link: ''
    },
    {
      title: `Пометы`,
      key: CategoryNames.Litters,
      link: ''
    },
    {
      title: `Выставки`,
      key: CategoryNames.Exhibitions,
      link: ''
    },
    {
      title: `Выпускники`,
      key: CategoryNames.Graduates,
      link: ''
    }
  ];