import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, inject, Input, Output, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { VCLButtonModule, VCLDrawerModule, VCLFormControlGroupModule, VCLIcogramModule, VCLIconModule, VCLInputModule, VCLNavigationModule, } from '@vcl/ng-vcl';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
import { RcBannerComponent, RcBreadcrumbComponent, RcCategorySelectComponent, } from '../../patterns';
import { RcHeaderToolbarComponent, } from '../header-toolbar';
import { RS_TRANSLATE } from '../../../i18n/i18n.tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@vcl/ng-vcl";
const _c0 = ["*"];
const _c1 = () => ["Home"];
const _c2 = () => [];
const _c3 = () => ["selected"];
function RcLayoutShellComponent_Conditional_12_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "rc-category-select", 18);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵlistener("valueChange", function RcLayoutShellComponent_Conditional_12_Conditional_0_Template_rc_category_select_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectCategory($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("categories", i0.ɵɵpipeBind1(2, 2, ctx_r1.categories$) || i0.ɵɵpureFunction0(6, _c2))("value", i0.ɵɵpipeBind1(3, 4, ctx_r1.activeCategory$));
} }
function RcLayoutShellComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, RcLayoutShellComponent_Conditional_12_Conditional_0_Template, 4, 7, "div", 17);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = i0.ɵɵpipeBind1(1, 1, ctx_r1.categories$)) ? 0 : -1, tmp_1_0);
} }
function RcLayoutShellComponent_For_15_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 20);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const navItem_r5 = i0.ɵɵreference(1);
    i0.ɵɵproperty("icon", navItem_r5.opened ? "vcl:chevron-down" : "vcl:chevron-right");
} }
function RcLayoutShellComponent_For_15_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 20);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("icon", item_r4.icon);
} }
function RcLayoutShellComponent_For_15_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 19);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_15_Conditional_8_For_2_Template_vcl_navigation_item_click_0_listener($event) { const child_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.navigate(child_r7); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "vcl-navigation-label")(2, "vcl-icogram");
    i0.ɵɵelement(3, "vcl-icon", 20);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("routerLink", child_r7.route)("routerLinkActive", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", child_r7.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, ctx_r1.label$(child_r7.label)), " ");
} }
function RcLayoutShellComponent_For_15_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-navigation");
    i0.ɵɵrepeaterCreate(1, RcLayoutShellComponent_For_15_Conditional_8_For_2_Template, 6, 7, "vcl-navigation-item", 8, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r4.children);
} }
function RcLayoutShellComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 19, 0);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_15_Template_vcl_navigation_item_click_0_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); !(item_r4.children == null ? null : item_r4.children.length) && ctx_r1.navigate(item_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "vcl-navigation-label")(3, "vcl-icogram");
    i0.ɵɵconditionalCreate(4, RcLayoutShellComponent_For_15_Conditional_4_Template, 1, 1, "vcl-icon", 20);
    i0.ɵɵconditionalCreate(5, RcLayoutShellComponent_For_15_Conditional_5_Template, 1, 1, "vcl-icon", 20);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, RcLayoutShellComponent_For_15_Conditional_8_Template, 3, 0, "vcl-navigation");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", (item_r4.children == null ? null : item_r4.children.length) ? null : item_r4.route)("routerLinkActive", (item_r4.children == null ? null : item_r4.children.length) ? i0.ɵɵpureFunction0(8, _c2) : i0.ɵɵpureFunction0(9, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((item_r4.children == null ? null : item_r4.children.length) ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(item_r4.children == null ? null : item_r4.children.length) ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 6, ctx_r1.label$(item_r4.label)), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((item_r4.children == null ? null : item_r4.children.length) ? 8 : -1);
} }
function RcLayoutShellComponent_Conditional_18_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "rc-category-select", 18);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵlistener("valueChange", function RcLayoutShellComponent_Conditional_18_Conditional_0_Template_rc_category_select_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectCategory($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("categories", i0.ɵɵpipeBind1(1, 2, ctx_r1.categories$) || i0.ɵɵpureFunction0(6, _c2))("value", i0.ɵɵpipeBind1(2, 4, ctx_r1.activeCategory$));
} }
function RcLayoutShellComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, RcLayoutShellComponent_Conditional_18_Conditional_0_Template, 3, 7, "rc-category-select", 21);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = i0.ɵɵpipeBind1(1, 1, ctx_r1.categories$)) ? 0 : -1, tmp_1_0);
} }
function RcLayoutShellComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵlistener("click", function RcLayoutShellComponent_Conditional_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSidebar()); });
    i0.ɵɵelement(2, "vcl-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 1, ctx_r1.label$((ctx_r1.config.uiText == null ? null : ctx_r1.config.uiText.showSidebar) ?? "Show sidebar")));
} }
export class RcLayoutShellComponent {
    router = inject(Router);
    facade = inject(RcLayoutFacade);
    config = inject(RC_LAYOUT_CONFIG, { optional: false });
    t = inject(RS_TRANSLATE, { optional: false });
    user = {
        id: 'user-1',
        fullName: 'Bello Babakolo',
        email: 'bello.babakolo@example.com',
    };
    organizations = [
        {
            id: 'org-nfuse',
            name: 'n-fuse GmbH',
            description: 'IoT & E-commerce platform',
        },
        {
            id: 'org-fieldmorph',
            name: 'FieldMorph',
            description: 'Field operations & asset tracking',
        },
        {
            id: 'org-bells',
            name: 'Bells Transport',
            description: 'Bus ticketing & logistics',
        },
    ];
    selectedOrganizationId = 'org-nfuse';
    showProfile = true;
    showPreferences = true;
    showSignOut = true;
    organizationSelected = new EventEmitter();
    accountAction = new EventEmitter();
    searchChange = new EventEmitter();
    destroyRef = inject(DestroyRef);
    constructor() {
        this.facade.initConfig(this.config);
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe((e) => {
            this.syncCategoryWithUrl(e.urlAfterRedirects);
        });
    }
    isHandset$ = this.facade.isHandset$;
    collapsed$ = this.facade.collapsed$;
    categories$ = this.facade.categories$;
    activeCategory$ = this.facade.activeCategory$;
    visibleNavItems$ = this.facade.visibleNavItems$;
    label$(v) {
        return this.t(v);
    }
    navigate(item) {
        if (item.externalUrl) {
            window.open(item.externalUrl, '_blank');
            return;
        }
        if (item.route) {
            this.router.navigate([item.route]);
        }
    }
    onToggleSidebar(isHandset) {
        if (isHandset) {
            this.toggleSidebar();
        }
    }
    toggleSidebar() {
        this.facade.toggleSidebar();
    }
    onSelectCategory(id) {
        this.facade.setActiveCategory(id);
        const category = this.config.categories?.find((c) => c.id === id);
        let target = category?.defaultRoute;
        if (!target) {
            const first = this.getFirstNavItemForCategory(id);
            if (first) {
                target = first.route ?? first.children?.[0]?.route;
            }
        }
        if (!target) {
            return;
        }
        if (Array.isArray(target)) {
            this.router.navigate(target);
        }
        else {
            this.router.navigate([target]);
        }
    }
    onSearchChange(term) {
        this.searchChange.emit(term);
    }
    onSelectOrganization(id) {
        this.organizationSelected.emit(id);
    }
    onAccountItemSelected(value) {
        if (value === 'profile' ||
            value === 'preferences' ||
            value === 'sign-out') {
            this.accountAction.emit(value);
        }
    }
    getFirstNavItemForCategory(id) {
        const flat = this.flattenNavItems(this.config.navItems);
        const defaultCategoryId = this.config.categories?.[0]?.id;
        return flat.find((item) => {
            const cid = item.categoryId ?? defaultCategoryId;
            return cid === id && (item.route || item.children?.some((c) => c.route));
        });
    }
    flattenNavItems(items) {
        const out = [];
        for (const item of items) {
            out.push(item);
            if (item.children?.length) {
                out.push(...this.flattenNavItems(item.children));
            }
        }
        return out;
    }
    syncCategoryWithUrl(url) {
        const flat = this.flattenNavItems(this.config.navItems);
        const defaultCategoryId = this.config.categories?.[0]?.id;
        const match = flat.find((item) => this.routeMatchesUrl(item.route, url));
        if (!match) {
            return;
        }
        const categoryId = match.categoryId ?? defaultCategoryId;
        if (!categoryId) {
            return;
        }
        this.facade.setActiveCategory(categoryId);
    }
    routeMatchesUrl(route, url) {
        if (!route)
            return false;
        let path;
        if (Array.isArray(route)) {
            path = this.router.createUrlTree(route).toString();
        }
        else {
            path = this.router.createUrlTree([route]).toString();
        }
        return url === path || url.startsWith(path + '/');
    }
    static ɵfac = function RcLayoutShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcLayoutShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcLayoutShellComponent, selectors: [["rc-layout-shell"]], inputs: { user: "user", organizations: "organizations", selectedOrganizationId: "selectedOrganizationId", showProfile: "showProfile", showPreferences: "showPreferences", showSignOut: "showSignOut" }, outputs: { organizationSelected: "organizationSelected", accountAction: "accountAction", searchChange: "searchChange" }, ngContentSelectors: _c0, decls: 34, vars: 32, consts: [["navItem", "vclNavigationItem"], [1, "layout-shell-container", 3, "backdropClick"], [3, "mode", "opened"], [1, "h-100p", "layout-shell-navigation"], [1, "row", "justify-content-between", "py-1", "px-2"], [3, "brandName", "logoUrl"], ["vcl-button", "", "square", "", 1, "transparent", 3, "click", "title"], ["icon", "mdi mdi-page-layout-sidebar-left", 1, "scale155p"], [3, "routerLink", "routerLinkActive"], [1, "py-1", "px-2", "rs-navigation-item-bottom-container"], ["href", "#"], [1, "row", "align-items-center", "px-2"], ["vcl-button", "", "square", "", 1, "transparent", 3, "title"], [3, "rootLabel", "rootUrl", "breadcrumbsToExclude"], [1, "flex"], [3, "organizationSelected", "accountAction", "searchChange", "organizations", "user"], [1, "flex", "px-2", "rs-main"], [1, "my-2", "px-2"], [3, "valueChange", "categories", "value"], [3, "click", "routerLink", "routerLinkActive"], ["vclPrepend", "", 3, "icon"], [3, "categories", "value"]], template: function RcLayoutShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "vcl-drawer-container", 1);
            i0.ɵɵlistener("backdropClick", function RcLayoutShellComponent_Template_vcl_drawer_container_backdropClick_0_listener() { return ctx.toggleSidebar(); });
            i0.ɵɵelementStart(1, "vcl-drawer", 2);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵpipe(3, "async");
            i0.ɵɵelementStart(4, "vcl-navigation", 3)(5, "div", 4);
            i0.ɵɵelement(6, "rc-brand", 5);
            i0.ɵɵelementStart(7, "button", 6);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵpipe(9, "async");
            i0.ɵɵpipe(10, "async");
            i0.ɵɵlistener("click", function RcLayoutShellComponent_Template_button_click_7_listener() { return ctx.toggleSidebar(); });
            i0.ɵɵelement(11, "vcl-icon", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(12, RcLayoutShellComponent_Conditional_12_Template, 2, 3);
            i0.ɵɵpipe(13, "async");
            i0.ɵɵrepeaterCreate(14, RcLayoutShellComponent_For_15_Template, 9, 10, "vcl-navigation-item", 8, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵpipe(16, "async");
            i0.ɵɵelementStart(17, "div", 9);
            i0.ɵɵconditionalCreate(18, RcLayoutShellComponent_Conditional_18_Template, 2, 3);
            i0.ɵɵpipe(19, "async");
            i0.ɵɵelementStart(20, "vcl-navigation-item")(21, "vcl-navigation-label");
            i0.ɵɵtext(22, " \u00A92025 ");
            i0.ɵɵelementStart(23, "a", 10);
            i0.ɵɵtext(24, "Restorecommerce");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " . All rights reserved. ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(26, "header", 11);
            i0.ɵɵconditionalCreate(27, RcLayoutShellComponent_Conditional_27_Template, 3, 3, "button", 12);
            i0.ɵɵpipe(28, "async");
            i0.ɵɵelement(29, "rc-breadcrumb", 13)(30, "div", 14);
            i0.ɵɵelementStart(31, "rc-header-toolbar", 15);
            i0.ɵɵlistener("organizationSelected", function RcLayoutShellComponent_Template_rc_header_toolbar_organizationSelected_31_listener($event) { return ctx.onSelectOrganization($event); })("accountAction", function RcLayoutShellComponent_Template_rc_header_toolbar_accountAction_31_listener($event) { return ctx.onAccountItemSelected($event); })("searchChange", function RcLayoutShellComponent_Template_rc_header_toolbar_searchChange_31_listener($event) { return ctx.onSearchChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "main", 16);
            i0.ɵɵprojection(33);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("mode", i0.ɵɵpipeBind1(2, 13, ctx.isHandset$) ? "over" : "side")("opened", i0.ɵɵpipeBind1(3, 15, ctx.collapsed$) === false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("brandName", ctx.config.appName)("logoUrl", ctx.config.logoUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(8, 17, ctx.collapsed$) ? i0.ɵɵpipeBind1(9, 19, ctx.label$((ctx.config.uiText == null ? null : ctx.config.uiText.hideSidebar) || "Hide")) : i0.ɵɵpipeBind1(10, 21, ctx.label$((ctx.config.uiText == null ? null : ctx.config.uiText.showSidebar) || "Show")));
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(13, 23, ctx.isHandset$) ? 12 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpipeBind1(16, 25, ctx.facade.visibleNavItems$));
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(19, 27, ctx.isHandset$) === false ? 18 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(28, 29, ctx.collapsed$) ? 27 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rootLabel", "Home")("rootUrl", "/")("breadcrumbsToExclude", i0.ɵɵpureFunction0(31, _c1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("organizations", ctx.organizations)("user", ctx.user);
        } }, dependencies: [RouterModule, i1.RouterLink, i1.RouterLinkActive, VCLDrawerModule, i2.VCLDrawerComponent, i2.VCLDrawerContainerComponent, VCLNavigationModule, i2.VCLNavigationComponent, i2.VCLNavigationItemComponent, i2.VCLNavigationLabelComponent, VCLIcogramModule, i2.VCLIcogramComponent, i2.VCLIconComponent, RcCategorySelectComponent,
            VCLIconModule,
            VCLInputModule,
            VCLButtonModule, i2.VCLButtonComponent, RcBreadcrumbComponent,
            RcBannerComponent,
            VCLFormControlGroupModule,
            CommonModule,
            RcHeaderToolbarComponent,
            AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;height:100vh;overflow:hidden}.layout-shell-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.layout-shell-container[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container[_ngcontent-%COMP%] > main.rs-main[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container[_ngcontent-%COMP%]{position:absolute;bottom:.5em}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcLayoutShellComponent, [{
        type: Component,
        args: [{ selector: 'rc-layout-shell', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    AsyncPipe,
                    RouterModule,
                    VCLDrawerModule,
                    VCLNavigationModule,
                    VCLIcogramModule,
                    RcCategorySelectComponent,
                    VCLIconModule,
                    VCLInputModule,
                    VCLButtonModule,
                    RcBreadcrumbComponent,
                    RcBannerComponent,
                    VCLFormControlGroupModule,
                    CommonModule,
                    RcHeaderToolbarComponent,
                ], template: "<vcl-drawer-container\n  (backdropClick)=\"toggleSidebar()\"\n  class=\"layout-shell-container\"\n>\n  <vcl-drawer\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(collapsed$ | async) === false\"\n  >\n    <vcl-navigation class=\"h-100p layout-shell-navigation\">\n      <div class=\"row justify-content-between py-1 px-2\">\n        <rc-brand\n          [brandName]=\"config.appName\"\n          [logoUrl]=\"config.logoUrl\"\n        />\n        <button\n          vcl-button\n          square\n          class=\"transparent\"\n          [title]=\"\n            (collapsed$ | async)\n              ? (label$(config.uiText?.hideSidebar || 'Hide') | async)\n              : (label$(config.uiText?.showSidebar || 'Show') | async)\n          \"\n          (click)=\"toggleSidebar()\"\n        >\n          <vcl-icon\n            class=\"scale155p\"\n            icon=\"mdi mdi-page-layout-sidebar-left\"\n          />\n        </button>\n      </div>\n\n      @if (isHandset$ | async) { @if (categories$ | async; as categories) {\n      <div class=\"my-2 px-2\">\n        <rc-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n      </div>\n      } } @for (item of (facade.visibleNavItems$ | async); track $index) {\n      <vcl-navigation-item\n        #navItem=\"vclNavigationItem\"\n        [routerLink]=\"item.children?.length ? null : item.route\"\n        [routerLinkActive]=\"item.children?.length ? [] : ['selected']\"\n        (click)=\"\n          !item.children?.length && navigate(item); $event.stopPropagation()\n        \"\n      >\n        <vcl-navigation-label>\n          <vcl-icogram>\n            @if (item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"navItem.opened ? 'vcl:chevron-down' : 'vcl:chevron-right'\"\n            ></vcl-icon>\n            } @if (!item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"item.icon\"\n            ></vcl-icon>\n            }\n\n            {{ label$(item.label) | async }}\n          </vcl-icogram>\n        </vcl-navigation-label>\n\n        @if (item.children?.length) {\n        <vcl-navigation>\n          @for (child of item.children; track $index) {\n          <vcl-navigation-item\n            [routerLink]=\"child.route\"\n            [routerLinkActive]=\"['selected']\"\n            (click)=\"navigate(child); $event.stopPropagation()\"\n          >\n            <vcl-navigation-label>\n              <vcl-icogram>\n                <vcl-icon\n                  vclPrepend\n                  [icon]=\"child.icon\"\n                ></vcl-icon>\n                {{ label$(child.label) | async }}\n              </vcl-icogram>\n            </vcl-navigation-label>\n          </vcl-navigation-item>\n          }\n        </vcl-navigation>\n        }\n      </vcl-navigation-item>\n      }\n\n      <div class=\"py-1 px-2 rs-navigation-item-bottom-container\">\n        @if ((isHandset$ | async) === false) { @if (categories$ | async; as\n        categories) {\n        <rc-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n        } }\n\n        <vcl-navigation-item>\n          <vcl-navigation-label>\n            \u00A92025\n            <a href=\"#\">Restorecommerce</a>\n            . All rights reserved.\n          </vcl-navigation-label>\n        </vcl-navigation-item>\n      </div>\n    </vcl-navigation>\n  </vcl-drawer>\n\n  <header class=\"row align-items-center px-2\">\n    @if (collapsed$ | async) {\n    <button\n      vcl-button\n      square\n      class=\"transparent\"\n      [title]=\"label$(config.uiText?.showSidebar ?? 'Show sidebar') | async\"\n      (click)=\"toggleSidebar()\"\n    >\n      <vcl-icon\n        class=\"scale155p\"\n        icon=\"mdi mdi-page-layout-sidebar-left\"\n      />\n    </button>\n    }\n\n    <rc-breadcrumb\n      [rootLabel]=\"'Home'\"\n      [rootUrl]=\"'/'\"\n      [breadcrumbsToExclude]=\"['Home']\"\n    />\n\n    <div class=\"flex\"></div>\n\n    <rc-header-toolbar\n      [organizations]=\"organizations\"\n      [user]=\"user\"\n      (organizationSelected)=\"onSelectOrganization($event)\"\n      (accountAction)=\"onAccountItemSelected($event)\"\n      (searchChange)=\"onSearchChange($event)\"\n    />\n  </header>\n\n  <main class=\"flex px-2 rs-main\">\n    <ng-content />\n  </main>\n</vcl-drawer-container>\n", styles: [":host{display:block;height:100vh;overflow:hidden}.layout-shell-container{display:flex;flex-direction:column;height:100%}.layout-shell-container>header{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container>main.rs-main{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container{position:absolute;bottom:.5em}\n"] }]
    }], () => [], { user: [{
            type: Input
        }], organizations: [{
            type: Input
        }], selectedOrganizationId: [{
            type: Input
        }], showProfile: [{
            type: Input
        }], showPreferences: [{
            type: Input
        }], showSignOut: [{
            type: Input
        }], organizationSelected: [{
            type: Output
        }], accountAction: [{
            type: Output
        }], searchChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcLayoutShellComponent, { className: "RcLayoutShellComponent", filePath: "lib/shared/layouts/main-layout/main-layout-shell.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=main-layout-shell.component.js.map