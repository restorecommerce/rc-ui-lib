import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class RcCenteredPageComponent {
    static ɵfac = function RcCenteredPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcCenteredPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcCenteredPageComponent, selectors: [["rc-centered-page"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "rs-centered-page", "row", "justify-center", "align-items-center", "p-5", "w-100p"], [1, "rs-centered-page__content", "w-100p"]], template: function RcCenteredPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵdomElementEnd()();
        } }, dependencies: [CommonModule], styles: ["[_nghost-%COMP%]{display:block;width:100%;min-height:100vh}.rs-centered-page[_ngcontent-%COMP%]{min-height:100vh}.rs-centered-page__content[_ngcontent-%COMP%]{max-width:480px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcCenteredPageComponent, [{
        type: Component,
        args: [{ selector: 'rc-centered-page', standalone: true, imports: [CommonModule], template: `
    <div
      class="rs-centered-page row justify-center align-items-center p-5 w-100p"
    >
      <div class="rs-centered-page__content w-100p">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: [":host{display:block;width:100%;min-height:100vh}.rs-centered-page{min-height:100vh}.rs-centered-page__content{max-width:480px}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcCenteredPageComponent, { className: "RcCenteredPageComponent", filePath: "lib/shared/layouts/centered-layout.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=centered-layout.component.js.map