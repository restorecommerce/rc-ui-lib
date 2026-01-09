export type RcLayoutCategoryRoute = string;
export type RcLayoutNavCategoryId = 'home' | 'management' | string;
export type RcTranslatable = string | {
    key: string;
    params?: Record<string, unknown>;
    fallback?: string;
};
export interface RcLayoutNavCategory {
    id: RcLayoutNavCategoryId;
    label: RcTranslatable;
    defaultRoute?: RcLayoutCategoryRoute;
}
export interface RcLayoutNavItem {
    id: string;
    label: RcTranslatable;
    icon?: string;
    route?: string;
    externalUrl?: string;
    children?: RcLayoutNavItem[];
    isHidden?: boolean;
    requiredPermission?: string;
    categoryId?: RcLayoutNavCategoryId;
}
export interface ShellFooterConfig {
    enabled?: boolean;
    text?: string;
    companyName?: string;
    companyUrl?: string;
    showYear?: boolean;
    year?: number;
}
export interface RcLayoutConfig {
    appName: string;
    logoUrl?: string;
    logoWidth?: number;
    navItems: RcLayoutNavItem[];
    basePath?: string;
    categories?: RcLayoutNavCategory[];
    sidebarToggle?: {
        openIcon?: string;
        closeIcon?: string;
        iconClass?: string;
    };
    uiText?: {
        showSidebar?: RcTranslatable;
        hideSidebar?: RcTranslatable;
        selectCategory?: RcTranslatable;
        selectOrganization?: RcTranslatable;
    };
    accountMenu?: {
        profile?: RcTranslatable;
        preferences?: RcTranslatable;
        signOut?: RcTranslatable;
    };
    footer?: ShellFooterConfig;
}
