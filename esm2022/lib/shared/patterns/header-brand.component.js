import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
function RcBannerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 0);
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.logoLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("alt", ctx_r0.brandName)("src", ctx_r0.logoUrl, i0.ɵɵsanitizeUrl);
} }
function RcBannerComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.brandName, " ");
} }
export class RcBannerComponent {
    _hostClasses = true;
    brandName;
    showName = false;
    logoUrl;
    logoLink;
    static ɵfac = function RcBannerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcBannerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcBannerComponent, selectors: [["rc-brand"]], hostVars: 4, hostBindings: function RcBannerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("row", ctx._hostClasses)("center", ctx._hostClasses);
        } }, inputs: { brandName: "brandName", showName: "showName", logoUrl: "logoUrl", logoLink: "logoLink" }, decls: 2, vars: 2, consts: [[3, "routerLink"], [1, "app-name", "hide-to-sm"], ["role", "presentation", "width", "100", 1, "responsive-image", "logo", 3, "alt", "src"]], template: function RcBannerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, RcBannerComponent_Conditional_0_Template, 2, 3, "a", 0);
            i0.ɵɵconditionalCreate(1, RcBannerComponent_Conditional_1_Template, 2, 1, "span", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.logoUrl ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showName ? 1 : -1);
        } }, dependencies: [RouterModule, i1.RouterLink], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcBannerComponent, [{
        type: Component,
        args: [{
                selector: 'rc-brand',
                template: `
    @if (logoUrl) {
    <a [routerLink]="logoLink">
      <img
        [alt]="brandName"
        [src]="logoUrl"
        class="responsive-image logo"
        role="presentation"
        width="100"
      />
    </a>
    } @if (showName) {
    <span class="app-name hide-to-sm">
      {{ brandName }}
    </span>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [RouterModule],
            }]
    }], null, { _hostClasses: [{
            type: HostBinding,
            args: ['class.row']
        }, {
            type: HostBinding,
            args: ['class.center']
        }], brandName: [{
            type: Input
        }], showName: [{
            type: Input
        }], logoUrl: [{
            type: Input
        }], logoLink: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcBannerComponent, { className: "RcBannerComponent", filePath: "lib/shared/patterns/header-brand.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=header-brand.component.js.map