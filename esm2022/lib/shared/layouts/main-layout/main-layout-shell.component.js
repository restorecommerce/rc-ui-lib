import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { VCLButtonModule, VCLDrawerModule, VCLFormControlGroupModule, VCLIcogramModule, VCLIconModule, VCLInputModule, VCLNavigationModule, } from '@vcl/ng-vcl';
import { RC_TRANSLATE } from '../../../i18n/i18n.tokens';
import { RcBannerComponent, RcBreadcrumbComponent } from '../../patterns';
import { RcHeaderToolbarComponent, } from '../header-toolbar';
import { RcLayoutFacade } from './main-layout.facade';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@vcl/ng-vcl";
const _c0 = [[["", "layoutHeader", ""]], "*"];
const _c1 = ["[layoutHeader]", "*"];
const _c2 = () => [];
const _c3 = () => ["selected"];
const _c4 = () => ["Home"];
function RcLayoutShellComponent_For_14_For_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 16);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const navItem_r4 = i0.ɵɵreference(1);
    i0.ɵɵproperty("icon", navItem_r4.opened ? "vcl:chevron-down" : "vcl:chevron-right");
} }
function RcLayoutShellComponent_For_14_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 16);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("icon", item_r2.icon);
} }
function RcLayoutShellComponent_For_14_For_4_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 15);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_14_For_4_Conditional_8_For_2_Template_vcl_navigation_item_click_0_listener($event) { const child_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); ctx_r2.navigate(child_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(1, "vcl-navigation-label")(2, "vcl-icogram");
    i0.ɵɵelement(3, "vcl-icon", 16);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("routerLink", child_r6.route)("routerLinkActive", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("icon", child_r6.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, ctx_r2.label$(child_r6.label)), " ");
} }
function RcLayoutShellComponent_For_14_For_4_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-navigation");
    i0.ɵɵrepeaterCreate(1, RcLayoutShellComponent_For_14_For_4_Conditional_8_For_2_Template, 6, 7, "vcl-navigation-item", 14, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r2.children);
} }
function RcLayoutShellComponent_For_14_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-navigation-item", 15, 0);
    i0.ɵɵlistener("click", function RcLayoutShellComponent_For_14_For_4_Template_vcl_navigation_item_click_0_listener($event) { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); !(item_r2.children == null ? null : item_r2.children.length) && ctx_r2.navigate(item_r2); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "vcl-navigation-label")(3, "vcl-icogram");
    i0.ɵɵconditionalCreate(4, RcLayoutShellComponent_For_14_For_4_Conditional_4_Template, 1, 1, "vcl-icon", 16);
    i0.ɵɵconditionalCreate(5, RcLayoutShellComponent_For_14_For_4_Conditional_5_Template, 1, 1, "vcl-icon", 16);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, RcLayoutShellComponent_For_14_For_4_Conditional_8_Template, 3, 0, "vcl-navigation");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", (item_r2.children == null ? null : item_r2.children.length) ? null : item_r2.route)("routerLinkActive", (item_r2.children == null ? null : item_r2.children.length) ? i0.ɵɵpureFunction0(8, _c2) : i0.ɵɵpureFunction0(9, _c3));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((item_r2.children == null ? null : item_r2.children.length) ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(item_r2.children == null ? null : item_r2.children.length) ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 6, ctx_r2.label$(item_r2.label)), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((item_r2.children == null ? null : item_r2.children.length) ? 8 : -1);
} }
function RcLayoutShellComponent_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-navigation-heading", 13);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, RcLayoutShellComponent_For_14_For_4_Template, 9, 10, "vcl-navigation-item", 14, i0.ɵɵrepeaterTrackByIndex);
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.label$(category_r7.label || "category.label")), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.facade.getItemsByCategory(category_r7.id));
} }
function RcLayoutShellComponent_Conditional_17_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" \u00A9 ", ctx_r2.footerConfig.year, " ");
} }
function RcLayoutShellComponent_Conditional_17_Conditional_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("href", ctx_r2.footerConfig.companyUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.footerConfig.companyName, " ");
} }
function RcLayoutShellComponent_Conditional_17_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.footerConfig.companyName, " ");
} }
function RcLayoutShellComponent_Conditional_17_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, RcLayoutShellComponent_Conditional_17_Conditional_2_Conditional_0_Template, 2, 2, "a", 17)(1, RcLayoutShellComponent_Conditional_17_Conditional_2_Conditional_1_Template, 1, 1);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r2.footerConfig.companyUrl ? 0 : 1);
} }
function RcLayoutShellComponent_Conditional_17_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" . ", i0.ɵɵpipeBind1(1, 1, ctx_r2.label$(ctx_r2.footerConfig.text)), " ");
} }
function RcLayoutShellComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵconditionalCreate(1, RcLayoutShellComponent_Conditional_17_Conditional_1_Template, 1, 1);
    i0.ɵɵconditionalCreate(2, RcLayoutShellComponent_Conditional_17_Conditional_2_Template, 2, 1);
    i0.ɵɵconditionalCreate(3, RcLayoutShellComponent_Conditional_17_Conditional_3_Template, 2, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.footerConfig.showYear ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.footerConfig.companyName ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.footerConfig.text ? 3 : -1);
} }
function RcLayoutShellComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵlistener("click", function RcLayoutShellComponent_Conditional_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleSidebar()); });
    i0.ɵɵelement(2, "vcl-icon", 7);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", i0.ɵɵpipeBind1(1, 4, ctx_r2.label$((ctx_r2.config.uiText == null ? null : ctx_r2.config.uiText.showSidebar) ?? "Show sidebar")));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r2.iconClass);
    i0.ɵɵproperty("icon", i0.ɵɵpipeBind1(3, 6, ctx_r2.icon$) || "");
} }
function RcLayoutShellComponent_ProjectionFallback_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "rc-breadcrumb", 18)(1, "div", 19);
    i0.ɵɵelementStart(2, "rc-header-toolbar", 20);
    i0.ɵɵlistener("organizationSelected", function RcLayoutShellComponent_ProjectionFallback_21_Template_rc_header_toolbar_organizationSelected_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSelectOrganization($event)); })("accountAction", function RcLayoutShellComponent_ProjectionFallback_21_Template_rc_header_toolbar_accountAction_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onAccountItemSelected($event)); })("searchChange", function RcLayoutShellComponent_ProjectionFallback_21_Template_rc_header_toolbar_searchChange_2_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onSearchChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("rootLabel", "Home")("rootUrl", "/")("breadcrumbsToExclude", i0.ɵɵpureFunction0(6, _c4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("organizations", ctx_r2.organizations)("user", ctx_r2.user)("selectedOrganizationId", ctx_r2.selectedOrganizationId);
} }
export class RcLayoutShellComponent {
    router = inject(Router);
    facade = inject(RcLayoutFacade);
    config = inject(RC_LAYOUT_CONFIG, { optional: false });
    t = inject(RC_TRANSLATE, { optional: false });
    user = null;
    organizations = [];
    selectedOrganizationId = null;
    showProfile = true;
    showPreferences = true;
    showSignOut = true;
    organizationSelected = new EventEmitter();
    accountAction = new EventEmitter();
    searchChange = new EventEmitter();
    defaultOpenIcon = 'mdi mdi-page-layout-sidebar-left';
    defaultCloseIcon = 'mdi mdi-page-layout-sidebar-right';
    constructor() {
        this.facade.initConfig(this.config);
    }
    isHandset$ = this.facade.isHandset$;
    collapsed$ = this.facade.collapsed$;
    categories$ = this.facade.categories$;
    icon$ = this.collapsed$.pipe(map((collapsed) => collapsed
        ? (this.config.sidebarToggle?.closeIcon ?? this.defaultCloseIcon)
        : (this.config.sidebarToggle?.openIcon ?? this.defaultOpenIcon)));
    iconClass = this.config.sidebarToggle?.iconClass ?? 'scale155p';
    defaultFooterConfig = {
        enabled: true,
        text: 'All rights reserved.',
        companyName: '',
        companyUrl: '',
        showYear: true,
        year: new Date().getFullYear(),
    };
    footerConfig = {
        ...this.defaultFooterConfig,
        ...this.config.footer,
    };
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
    static ɵfac = function RcLayoutShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcLayoutShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcLayoutShellComponent, selectors: [["rc-layout-shell"]], inputs: { user: "user", organizations: "organizations", selectedOrganizationId: "selectedOrganizationId", showProfile: "showProfile", showPreferences: "showPreferences", showSignOut: "showSignOut" }, outputs: { organizationSelected: "organizationSelected", accountAction: "accountAction", searchChange: "searchChange" }, ngContentSelectors: _c1, decls: 25, vars: 27, consts: [["navItem", "vclNavigationItem"], [1, "layout-shell-container", 3, "backdropClick"], [3, "mode", "opened"], [1, "h-100p", "layout-shell-navigation"], [1, "row", "justify-content-between", "py-1", "px-2"], [3, "brandName", "logoUrl", "logoWidth"], ["vcl-button", "", "square", "", 1, "transparent", 3, "click", "title"], [3, "icon"], [1, "py-1", "px-2", "rs-navigation-item-bottom-container"], [1, "vcl-text-muted", "vcl-text-xs", "mt-2"], [1, "row", "align-items-center", "px-2"], ["vcl-button", "", "square", "", 1, "transparent", 3, "title"], [1, "flex", "px-2", "rs-main"], [1, "scale115p"], ["queryParamsHandling", "preserve", 3, "routerLink", "routerLinkActive"], ["queryParamsHandling", "preserve", 3, "click", "routerLink", "routerLinkActive"], ["vclPrepend", "", 3, "icon"], ["target", "_blank", "rel", "noopener noreferrer", 1, "vcl-link", 3, "href"], [3, "rootLabel", "rootUrl", "breadcrumbsToExclude"], [1, "flex"], [3, "organizationSelected", "accountAction", "searchChange", "organizations", "user", "selectedOrganizationId"]], template: function RcLayoutShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
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
            i0.ɵɵpipe(12, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(13, RcLayoutShellComponent_For_14_Template, 5, 3, null, null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵpipe(15, "async");
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵconditionalCreate(17, RcLayoutShellComponent_Conditional_17_Template, 4, 3, "div", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "header", 10);
            i0.ɵɵconditionalCreate(19, RcLayoutShellComponent_Conditional_19_Template, 4, 8, "button", 11);
            i0.ɵɵpipe(20, "async");
            i0.ɵɵprojection(21, 0, null, RcLayoutShellComponent_ProjectionFallback_21_Template, 3, 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "main", 12);
            i0.ɵɵprojection(24, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("mode", i0.ɵɵpipeBind1(2, 11, ctx.isHandset$) ? "over" : "side")("opened", i0.ɵɵpipeBind1(3, 13, ctx.collapsed$) === false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("brandName", ctx.config.appName)("logoUrl", ctx.config.logoUrl)("logoWidth", ctx.config.logoWidth ?? 100);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", i0.ɵɵpipeBind1(8, 15, ctx.collapsed$) ? i0.ɵɵpipeBind1(9, 17, ctx.label$((ctx.config.uiText == null ? null : ctx.config.uiText.showSidebar) || "Show sidebar")) : i0.ɵɵpipeBind1(10, 19, ctx.label$((ctx.config.uiText == null ? null : ctx.config.uiText.hideSidebar) || "Hide sidebar")));
            i0.ɵɵadvance(4);
            i0.ɵɵclassMap(ctx.iconClass);
            i0.ɵɵproperty("icon", i0.ɵɵpipeBind1(12, 21, ctx.icon$) || "");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpipeBind1(15, 23, ctx.categories$));
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.footerConfig.enabled ? 17 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(i0.ɵɵpipeBind1(20, 25, ctx.collapsed$) ? 19 : -1);
        } }, dependencies: [RouterModule, i1.RouterLink, i1.RouterLinkActive, VCLDrawerModule, i2.VCLDrawerComponent, i2.VCLDrawerContainerComponent, VCLNavigationModule, i2.VCLNavigationComponent, i2.VCLNavigationItemComponent, i2.VCLNavigationLabelComponent, i2.VCLNavigationHeadingComponent, VCLIcogramModule, i2.VCLIcogramComponent, i2.VCLIconComponent, VCLIconModule,
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
                    VCLIconModule,
                    VCLInputModule,
                    VCLButtonModule,
                    RcBreadcrumbComponent,
                    RcBannerComponent,
                    VCLFormControlGroupModule,
                    CommonModule,
                    RcHeaderToolbarComponent,
                ], template: "<vcl-drawer-container\n  (backdropClick)=\"toggleSidebar()\"\n  class=\"layout-shell-container\"\n>\n  <vcl-drawer\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(collapsed$ | async) === false\"\n  >\n    <vcl-navigation class=\"h-100p layout-shell-navigation\">\n      <div class=\"row justify-content-between py-1 px-2\">\n        <rc-brand\n          [brandName]=\"config.appName\"\n          [logoUrl]=\"config.logoUrl\"\n          [logoWidth]=\"config.logoWidth ?? 100\"\n        />\n        <button\n          vcl-button\n          square\n          class=\"transparent\"\n          [title]=\"\n            (collapsed$ | async)\n              ? (label$(config.uiText?.showSidebar || 'Show sidebar') | async)\n              : (label$(config.uiText?.hideSidebar || 'Hide sidebar') | async)\n          \"\n          (click)=\"toggleSidebar()\"\n        >\n          <vcl-icon\n            [class]=\"iconClass\"\n            [icon]=\"(icon$ | async) || ''\"\n          />\n        </button>\n      </div>\n\n      @for (category of categories$ | async; track $index) {\n        <vcl-navigation-heading class=\"scale115p\">\n          {{ label$(category.label || 'category.label') | async }}\n        </vcl-navigation-heading>\n\n        @for (item of facade.getItemsByCategory(category.id); track $index) {\n          <vcl-navigation-item\n            #navItem=\"vclNavigationItem\"\n            [routerLink]=\"item.children?.length ? null : item.route\"\n            [routerLinkActive]=\"item.children?.length ? [] : ['selected']\"\n            queryParamsHandling=\"preserve\"\n            (click)=\"\n              !item.children?.length && navigate(item); $event.stopPropagation()\n            \"\n          >\n            <vcl-navigation-label>\n              <vcl-icogram>\n                @if (item.children?.length) {\n                  <vcl-icon\n                    vclPrepend\n                    [icon]=\"\n                      navItem.opened ? 'vcl:chevron-down' : 'vcl:chevron-right'\n                    \"\n                  ></vcl-icon>\n                }\n                @if (!item.children?.length) {\n                  <vcl-icon\n                    vclPrepend\n                    [icon]=\"item.icon\"\n                  ></vcl-icon>\n                }\n\n                {{ label$(item.label) | async }}\n              </vcl-icogram>\n            </vcl-navigation-label>\n\n            @if (item.children?.length) {\n              <vcl-navigation>\n                @for (child of item.children; track $index) {\n                  <vcl-navigation-item\n                    [routerLink]=\"child.route\"\n                    [routerLinkActive]=\"['selected']\"\n                    queryParamsHandling=\"preserve\"\n                    (click)=\"navigate(child); $event.stopPropagation()\"\n                  >\n                    <vcl-navigation-label>\n                      <vcl-icogram>\n                        <vcl-icon\n                          vclPrepend\n                          [icon]=\"child.icon\"\n                        ></vcl-icon>\n                        {{ label$(child.label) | async }}\n                      </vcl-icogram>\n                    </vcl-navigation-label>\n                  </vcl-navigation-item>\n                }\n              </vcl-navigation>\n            }\n          </vcl-navigation-item>\n        }\n      }\n\n      <div class=\"py-1 px-2 rs-navigation-item-bottom-container\">\n        @if (footerConfig.enabled) {\n          <div class=\"vcl-text-muted vcl-text-xs mt-2\">\n            @if (footerConfig.showYear) {\n              \u00A9 {{ footerConfig.year }}\n            }\n            @if (footerConfig.companyName) {\n              @if (footerConfig.companyUrl) {\n                <a\n                  [href]=\"footerConfig.companyUrl\"\n                  target=\"_blank\"\n                  rel=\"noopener noreferrer\"\n                  class=\"vcl-link\"\n                >\n                  {{ footerConfig.companyName }}\n                </a>\n              } @else {\n                {{ footerConfig.companyName }}\n              }\n            }\n            @if (footerConfig.text) {\n              .\n              {{ label$(footerConfig.text) | async }}\n            }\n          </div>\n        }\n      </div>\n    </vcl-navigation>\n  </vcl-drawer>\n\n  <header class=\"row align-items-center px-2\">\n    @if (collapsed$ | async) {\n      <button\n        vcl-button\n        square\n        class=\"transparent\"\n        [title]=\"label$(config.uiText?.showSidebar ?? 'Show sidebar') | async\"\n        (click)=\"toggleSidebar()\"\n      >\n        <vcl-icon\n          [class]=\"iconClass\"\n          [icon]=\"(icon$ | async) || ''\"\n        />\n      </button>\n    }\n\n    <ng-content select=\"[layoutHeader]\">\n      <rc-breadcrumb\n        [rootLabel]=\"'Home'\"\n        [rootUrl]=\"'/'\"\n        [breadcrumbsToExclude]=\"['Home']\"\n      />\n\n      <div class=\"flex\"></div>\n\n      <rc-header-toolbar\n        [organizations]=\"organizations\"\n        [user]=\"user\"\n        [selectedOrganizationId]=\"selectedOrganizationId\"\n        (organizationSelected)=\"onSelectOrganization($event)\"\n        (accountAction)=\"onAccountItemSelected($event)\"\n        (searchChange)=\"onSearchChange($event)\"\n      />\n    </ng-content>\n  </header>\n\n  <main class=\"flex px-2 rs-main\">\n    <ng-content />\n  </main>\n</vcl-drawer-container>\n", styles: [":host{display:block;height:100vh;overflow:hidden}.layout-shell-container{display:flex;flex-direction:column;height:100%}.layout-shell-container>header{flex:0 0 auto;z-index:1;box-sizing:border-box}.layout-shell-container>main.rs-main{flex:1 1 auto;min-height:0}.rs-navigation-item-bottom-container{position:absolute;bottom:.5em}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcLayoutShellComponent, { className: "RcLayoutShellComponent", filePath: "lib/shared/layouts/main-layout/main-layout-shell.component.ts", lineNumber: 60 }); })();
//# sourceMappingURL=main-layout-shell.component.js.map