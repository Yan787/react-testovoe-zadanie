export interface IMenu {
    title: string
    icon: string
    link: string
}

export interface ILastMenu extends Omit<IMenu, 'link'> {}