import { RcLayoutConfig, RcLayoutNavCategory, RcLayoutNavCategoryId, RcLayoutNavItem } from './main-layout-config.model';
import * as i0 from "@angular/core";
export declare class RcLayoutFacade {
    private breakpointObserver;
    isHandset$: import("rxjs").Observable<boolean>;
    private collapsedSubject;
    collapsed$: import("rxjs").Observable<boolean>;
    private navItemsSubject;
    private categoriesSubject;
    private navItems$;
    categories$: import("rxjs").Observable<RcLayoutNavCategory[]>;
    private activeCategorySubject;
    activeCategory$: import("rxjs").Observable<string>;
    visibleNavItems$: import("rxjs").Observable<RcLayoutNavItem[]>;
    /** Called by the shell once it has the config */
    initConfig(config: RcLayoutConfig): void;
    toggleSidebar(): void;
    setNavItems(items: RcLayoutNavItem[]): void;
    setActiveCategory(id: RcLayoutNavCategoryId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcLayoutFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RcLayoutFacade>;
}
