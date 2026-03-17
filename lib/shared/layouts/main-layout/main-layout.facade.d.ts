import { RcLayoutConfig, RcLayoutNavCategory, RcLayoutNavItem } from './main-layout-config.model';
import * as i0 from "@angular/core";
export declare class RcLayoutFacade {
    private breakpointObserver;
    isHandset$: import("rxjs").Observable<boolean>;
    private collapsedSubject;
    collapsed$: import("rxjs").Observable<boolean>;
    private navItemsSubject;
    private categoriesSubject;
    categories$: import("rxjs").Observable<RcLayoutNavCategory[]>;
    /** Called by the shell once it has the config */
    initConfig(config: RcLayoutConfig): void;
    getItemsByCategory(categoryId: string): RcLayoutNavItem[];
    toggleSidebar(): void;
    setNavItems(items: RcLayoutNavItem[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcLayoutFacade, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RcLayoutFacade>;
}
