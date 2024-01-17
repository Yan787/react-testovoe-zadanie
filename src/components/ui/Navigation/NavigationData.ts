import { INavigationList } from "../../../utils/@globalTypes";

 export enum TabsNames {
  Ribbon = 'Лента',
  Pavsgram = 'Павсграм',
  Shop = 'Магазин',
  Nursery = 'Питомник',
  Groups = 'Группы',
  Profile = 'Профиль'
}

export const navigationList: INavigationList[] = [
    {
      title: `Лента`,
      key: TabsNames.Ribbon,
      link: ''
    },
    {
      title: `Павсграм`,
      key: TabsNames.Pavsgram,
      link: ''
    },
    {
      title: `Магазин`,
      key: TabsNames.Shop,
      link: ''
    },
    {
      title: `Питомник`,
      key: TabsNames.Nursery,
      link: ''
    },
    {
      title: `Группы`,
      key: TabsNames.Groups,
      link: ''
    },
    {
      title: `Профиль`,
      key: TabsNames.Profile,
      link: ''
    },
  ];