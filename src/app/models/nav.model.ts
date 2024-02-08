export interface NavItem {

    title: string;
    link: string | null;
    isDropdown: boolean;
    dropdownOpen: boolean | null;
    subItems: NavSubItem[] | null;
}

export interface NavSubItem {
    title: string;
    link: string | string[];
}