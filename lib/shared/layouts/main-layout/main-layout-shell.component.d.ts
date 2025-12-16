import { RcLayoutNavCategoryId, RcLayoutNavItem } from './main-layout-config.model';
import { RcLayoutFacade } from './main-layout.facade';
import * as i0 from "@angular/core";
export declare class RcLayoutShellComponent {
    private router;
    private route;
    facade: RcLayoutFacade;
    readonly config: import("@console/rc-ui").RcLayoutConfig;
    private readonly destroyRef;
    constructor();
    isHandset$: import("rxjs").Observable<boolean>;
    collapsed$: import("rxjs").Observable<boolean>;
    categories$: import("rxjs").Observable<import("@console/rc-ui").RcLayoutNavCategory[]>;
    activeCategory$: import("rxjs").Observable<string>;
    visibleNavItems$: import("rxjs").Observable<RcLayoutNavItem[]>;
    navigate(item: RcLayoutNavItem): void;
    onToggleSidebar(isHandset: boolean | null): void;
    toggleSidebar(): void;
    onSelectCategory(id: RcLayoutNavCategoryId): void;
    private getFirstNavItemForCategory;
    private flattenNavItems;
    private syncCategoryWithUrl;
    private routeMatchesUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcLayoutShellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcLayoutShellComponent, "rc-layout-shell", never, {}, {}, never, ["*"], true, never>;
}
