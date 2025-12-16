import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", "rcResourceSidebar", ""]], [["", "rcResourceContent", ""]]];
const _c1 = ["[rcResourceSidebar]", "[rcResourceContent]"];
export class RcResourcePageLayoutComponent {
    classes = 'row h-100p';
    static ɵfac = function RcResourcePageLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcResourcePageLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcResourcePageLayoutComponent, selectors: [["rc-resource-page-layout"]], hostVars: 2, hostBindings: function RcResourcePageLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.classes);
        } }, ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "flex-4-md", "flex-12"], [1, "flex-8-md", "flex-12", "px-2"]], template: function RcResourcePageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(2, "div", 1);
            i0.ɵɵprojection(3, 1);
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcResourcePageLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'rc-resource-page-layout',
                template: `
    <div class="flex-4-md flex-12">
      <ng-content select="[rcResourceSidebar]"></ng-content>
    </div>
    <div class="flex-8-md flex-12 px-2">
      <ng-content select="[rcResourceContent]"></ng-content>
    </div>
  `,
            }]
    }], null, { classes: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcResourcePageLayoutComponent, { className: "RcResourcePageLayoutComponent", filePath: "lib/shared/layouts/resource-page-layout.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=resource-page-layout.component.js.map