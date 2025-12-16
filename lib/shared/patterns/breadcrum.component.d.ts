import { AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export interface IBreadcrumb {
    label: string;
    url: string;
}
export declare class RcBreadcrumbComponent implements AfterViewInit, OnDestroy {
    /**
     * Text for the root crumb (defaults to "Home").
     * You can change this from the host app: <rc-breadcrumb rootLabel="Dashboard" />
     */
    rootLabel: string;
    /**
     * Router URL for the root crumb.
     * Defaults to '/'.
     */
    rootUrl: string;
    /**
     * Whether to display the root crumb at all.
     */
    showRoot: boolean;
    /**
     * Labels to exclude when the last crumb matches them (e.g. a generic "Home" page).
     * You can override from outside instead of relying on ROUTER constants.
     */
    breadcrumbsToExclude: string[];
    /**
     * All generated breadcrumbs.
     */
    breadcrumbs: IBreadcrumb[];
    /**
     * Convenience getter: last breadcrumb label or empty.
     */
    get lastLabel(): string;
    private readonly destroy$;
    private readonly cdr;
    private readonly activatedRoute;
    private readonly router;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updateBreadcrumbs;
    private createBreadcrumbs;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcBreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcBreadcrumbComponent, "rc-breadcrumb", never, { "rootLabel": { "alias": "rootLabel"; "required": false; }; "rootUrl": { "alias": "rootUrl"; "required": false; }; "showRoot": { "alias": "showRoot"; "required": false; }; "breadcrumbsToExclude": { "alias": "breadcrumbsToExclude"; "required": false; }; }, {}, never, never, true, never>;
}
