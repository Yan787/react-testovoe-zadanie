import { CategoryNames } from "../components/ui/Category/CategoryData"
import { TabsNames } from "../components/ui/Navigation/NavigationData"

export interface INavigationList {
    title: string
    key: TabsNames
    link: string
}

export interface ICategoryList extends Omit<INavigationList, 'key'> {
    key: CategoryNames
}
