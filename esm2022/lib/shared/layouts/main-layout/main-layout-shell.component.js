import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, } from '@angular/router';
import { filter } from 'rxjs';
import { VCLButtonModule, VCLDrawerModule, VCLFormControlGroupModule, VCLIcogramModule, VCLIconModule, VCLInputModule, VCLNavigationModule, } from '@vcl/ng-vcl';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
import { RcBannerComponent, RcBreadcrumbComponent, RcCategorySelectComponent, } from '../../patterns';
import { RcHeaderToolbarComponent } from '../header-toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@vcl/ng-vcl";
const _c0 = ["*"];
const _c1 = () => ["Home"];
const _c2 = () => [];
const _c3 = () => ["selected"];
function RcLayoutShellComponent_Conditional_10_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "rc-category-select", 17);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵlistener("valueChange", function RcLayoutShellComponent_Conditional_10_Conditional_0_Template_rc_category_select_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectCategory($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("categories", i0.ɵɵpipeBind1(2, 2, ctx_r1.categories$) || i0.ɵɵpureFunction0(6, _c2))("value", i0.ɵɵpipeBind1(3, 4, ctx_r1.activeCategory$));
} }
function RcLayoutShellComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, RcLayoutShellComponent_Conditional_10_Conditional_0_Template, 4, 7, "div", 16);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = i0.ɵɵpipeBind1(1, 1, ctx_r1.categories$)) ? 0 : -1, tmp_1_0);
} }
function RcLayoutShellComponent_For_13_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const navItem_r5 = i0.ɵɵreference(1);
    i0.ɵɵproperty("icon", navItem_r5.opened ? "vcl:chevron-down" : "vcl:chevron-right");
} }
function RcLayoutShellComponent_For_13_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 19);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("icon", item_r4.icon);
} }
function RcLayoutShellComponent_For_13_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 18);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_13_Conditional_7_For_2_Template_vcl_navigation_item_click_0_listener($event) { const child_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.navigate(child_r7); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "vcl-navigation-label")(2, "vcl-icogram");
    i0.ɵɵelement(3, "vcl-icon", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", child_r7.route)("routerLinkActive", i0.ɵɵpureFunction0(4, _c3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", child_r7.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", child_r7.label, " ");
} }
function RcLayoutShellComponent_For_13_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-navigation");
    i0.ɵɵrepeaterCreate(1, RcLayoutShellComponent_For_13_Conditional_7_For_2_Template, 5, 5, "vcl-navigation-item", 8, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r4.children);
} }
function RcLayoutShellComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 18, 0);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_13_Template_vcl_navigation_item_click_0_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); !(item_r4.children == null ? null : item_r4.children.length) && ctx_r1.navigate(item_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "vcl-navigation-label")(3, "vcl-icogram");
    i0.ɵɵconditionalCreate(4, RcLayoutShellComponent_For_13_Conditional_4_Template, 1, 1, "vcl-icon", 19);
    i0.ɵɵconditionalCreate(5, RcLayoutShellComponent_For_13_Conditional_5_Template, 1, 1, "vcl-icon", 19);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, RcLayoutShellComponent_For_13_Conditional_7_Template, 3, 0, "vcl-navigation");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", (item_r4.children == null ? null : item_r4.children.length) ? null : item_r4.route)("routerLinkActive", (item_r4.children == null ? null : item_r4.children.length) ? i0.ɵɵpureFunction0(6, _c2) : i0.ɵɵpureFunction0(7, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((item_r4.children == null ? null : item_r4.children.length) ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(item_r4.children == null ? null : item_r4.children.length) ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r4.label, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional((item_r4.children == null ? null : item_r4.children.length) ? 7 : -1);
} }
function RcLayoutShellComponent_Conditional_16_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "rc-category-select", 17);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵpipe(2, "async");
    i0.ɵɵlistener("valueChange", function RcLayoutShellComponent_Conditional_16_Conditional_0_Template_rc_category_select_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onSelectCategory($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("categories", i0.ɵɵpipeBind1(1, 2, ctx_r1.categories$) || i0.ɵɵpureFunction0(6, _c2))("value", i0.ɵɵpipeBind1(2, 4, ctx_r1.activeCategory$));
} }
function RcLayoutShellComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, RcLayoutShellComponent_Conditional_16_Conditional_0_Template, 3, 7, "rc-category-select", 20);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional((tmp_1_0 = i0.ɵɵpipeBind1(1, 1, ctx_r1.categories$)) ? 0 : -1, tmp_1_0);
} }
function RcLayoutShellComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSidebar()); });
    i0.ɵɵelement(1, "vcl-icon", 7);
    i0.ɵɵelementEnd();
} }
export class RcLayoutShellComponent {
    router = inject(Router);
    route = inject(ActivatedRoute);
    facade = inject(RcLayoutFacade);
    config = inject(RC_LAYOUT_CONFIG, { optional: false });
    destroyRef = inject(DestroyRef);
    constructor() {
        this.facade.initConfig(this.config);
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            // TODO Will revisit this later
            // this.syncCategoryWithUrl(e.urlAfterRedirects);
        });
    }
    isHandset$ = this.facade.isHandset$;
    collapsed$ = this.facade.collapsed$;
    categories$ = this.facade.categories$;
    activeCategory$ = this.facade.activeCategory$;
    visibleNavItems$ = this.facade.visibleNavItems$;
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcLayoutShellComponent, selectors: [["rc-layout-shell"]], ngContentSelectors: _c0, decls: 32, vars: 26, consts: [["navItem", "vclNavigationItem"], [1, "layout-shell-container", 3, "backdropClick"], [3, "mode", "opened"], [1, "h-100p", "layout-shell-navigation"], [1, "row", "justify-content-between", "py-1", "px-2"], [3, "brandName", "logoUrl"], ["vcl-button", "", "square", "", 1, "transparent", 3, "click", "title"], ["icon", "mdi mdi-page-layout-sidebar-left", 1, "scale155p"], [3, "routerLink", "routerLinkActive"], [1, "py-1", "px-2", "rs-navigation-item-bottom-container"], ["href", "#"], [1, "row", "align-items-center", "px-2"], ["vcl-button", "", "square", "", "title", "Show sidebar", 1, "transparent"], [3, "rootLabel", "rootUrl", "breadcrumbsToExclude"], [1, "flex"], [1, "flex", "px-2", "rs-main"], [1, "my-2", "px-2"], [3, "valueChange", "categories", "value"], [3, "click", "routerLink", "routerLinkActive"], ["vclPrepend", "", 3, "icon"], [3, "categories", "value"], ["vcl-button", "", "square", "", "title", "Show sidebar", 1, "transparent", 3, "click"]], template: function RcLayoutShellComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("click", function RcLayoutShellComponent_Template_button_click_7_listener() { return ctx.toggleSidebar(); });
            i0.ɵɵelement(9, "vcl-icon", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, RcLayoutShellComponent_Conditional_10_Template, 2, 3);
            i0.ɵɵpipe(11, "async");
            i0.ɵɵrepeaterCreate(12, RcLayoutShellComponent_For_13_Template, 8, 8, "vcl-navigation-item", 8, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵpipe(14, "async");
            i0.ɵɵelementStart(15, "div", 9);
            i0.ɵɵconditionalCreate(16, RcLayoutShellComponent_Conditional_16_Template, 2, 3);
            i0.ɵɵpipe(17, "async");
            i0.ɵɵelementStart(18, "vcl-navigation-item")(19, "vcl-navigation-label");
            i0.ɵɵtext(20, " \u00A92025 ");
            i0.ɵɵelementStart(21, "a", 10);
            i0.ɵɵtext(22, "Restorecommerce");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, " . All rights reserved. ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(24, "header", 11);
            i0.ɵɵconditionalCreate(25, RcLayoutShellComponent_Conditional_25_Template, 2, 0, "button", 12);
            i0.ɵɵpipe(26, "async");
            i0.ɵɵelement(27, "rc-breadcrumb", 13)(28, "div", 14)(29, "rc-header-toolbar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "main", 15);
            i0.ɵɵprojection(31);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("mode", i0.ɵɵpipeBind1(2, 11, ctx.isHandset$) ? "over" : "side")("opened", i0.ɵɵpipeBind1(3, 13, ctx.collapsed$) === false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("brandName", ctx.config.appName)("logoUrl", ctx.config.logoUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(8, 15, ctx.collapsed$) ? "Hide sidebar" : "Show sidebar");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(11, 17, ctx.isHandset$) ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpipeBind1(14, 19, ctx.facade.visibleNavItems$));
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(17, 21, ctx.isHandset$) === false ? 16 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(26, 23, ctx.collapsed$) ? 25 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rootLabel", "Home")("rootUrl", "/")("breadcrumbsToExclude", i0.ɵɵpureFunction0(25, _c1));
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
                ], template: "<vcl-drawer-container\n  (backdropClick)=\"toggleSidebar()\"\n  class=\"layout-shell-container\"\n>\n  <vcl-drawer\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(collapsed$ | async) === false\"\n  >\n    <vcl-navigation class=\"h-100p layout-shell-navigation\">\n      <div class=\"row justify-content-between py-1 px-2\">\n        <rc-brand\n          [brandName]=\"config.appName\"\n          [logoUrl]=\"config.logoUrl\"\n        />\n        <button\n          vcl-button\n          square\n          class=\"transparent\"\n          [title]=\"(collapsed$ | async) ? 'Hide sidebar' : 'Show sidebar'\"\n          (click)=\"toggleSidebar()\"\n        >\n          <vcl-icon\n            class=\"scale155p\"\n            icon=\"mdi mdi-page-layout-sidebar-left\"\n          />\n        </button>\n      </div>\n\n      @if (isHandset$ | async) { @if (categories$ | async; as categories) {\n      <div class=\"my-2 px-2\">\n        <rc-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n      </div>\n      } } @for (item of (facade.visibleNavItems$ | async); track $index) {\n      <vcl-navigation-item\n        #navItem=\"vclNavigationItem\"\n        [routerLink]=\"item.children?.length ? null : item.route\"\n        [routerLinkActive]=\"item.children?.length ? [] : ['selected']\"\n        (click)=\"\n          !item.children?.length && navigate(item); $event.stopPropagation()\n        \"\n      >\n        <vcl-navigation-label>\n          <vcl-icogram>\n            @if (item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"navItem.opened ? 'vcl:chevron-down' : 'vcl:chevron-right'\"\n            ></vcl-icon>\n            } @if (!item.children?.length) {\n            <vcl-icon\n              vclPrepend\n              [icon]=\"item.icon\"\n            ></vcl-icon>\n            }\n\n            {{ item.label }}\n          </vcl-icogram>\n        </vcl-navigation-label>\n\n        @if (item.children?.length) {\n        <vcl-navigation>\n          @for (child of item.children; track $index) {\n          <vcl-navigation-item\n            [routerLink]=\"child.route\"\n            [routerLinkActive]=\"['selected']\"\n            (click)=\"navigate(child); $event.stopPropagation()\"\n          >\n            <vcl-navigation-label>\n              <vcl-icogram>\n                <vcl-icon\n                  vclPrepend\n                  [icon]=\"child.icon\"\n                ></vcl-icon>\n                {{ child.label }}\n              </vcl-icogram>\n            </vcl-navigation-label>\n          </vcl-navigation-item>\n          }\n        </vcl-navigation>\n        }\n      </vcl-navigation-item>\n      }\n\n      <div class=\"py-1 px-2 rs-navigation-item-bottom-container\">\n        @if ((isHandset$ | async) === false) { @if (categories$ | async; as\n        categories) {\n        <rc-category-select\n          [categories]=\"(categories$ | async) || []\"\n          [value]=\"activeCategory$ | async\"\n          (valueChange)=\"onSelectCategory($event)\"\n        />\n        } }\n\n        <vcl-navigation-item>\n          <vcl-navigation-label>\n            \u00A92025\n            <a href=\"#\">Restorecommerce</a>\n            . All rights reserved.\n          </vcl-navigation-label>\n        </vcl-navigation-item>\n      </div>\n    </vcl-navigation>\n  </vcl-drawer>\n\n  <header class=\"row align-items-center px-2\">\n    @if (collapsed$ | async) {\n    <button\n      vcl-button\n      square\n      class=\"transparent\"\n      title=\"Show sidebar\"\n      (click)=\"toggleSidebar()\"\n    >\n      <vcl-icon\n        class=\"scale155p\"\n        icon=\"mdi mdi-page-layout-sidebar-left\"\n      />\n    </button>\n    }\n\n    <rc-breadcrumb\n      [rootLabel]=\"'Home'\"\n      [rootUrl]=\"'/'\"\n      [breadcrumbsToExclude]=\"['Home']\"\n    />\n\n    <div class=\"flex\"></div>\n\n    <rc-header-toolbar />\n  </header>\n\n  <main class=\"flex px-2 rs-main\">\n    <ng-content />\n  </main>\n</vcl-drawer-container>\n", styles: [":host{display:block;height:100vh;overflow:hidden}.layout-shell-container{display:flex;flex-direction:column;height:100%}.layout-shell-container>header{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container>main.rs-main{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container{position:absolute;bottom:.5em}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcLayoutShellComponent, { className: "RcLayoutShellComponent", filePath: "lib/shared/layouts/main-layout/main-layout-shell.component.ts", lineNumber: 62 }); })();
//# sourceMappingURL=main-layout-shell.component.js.map