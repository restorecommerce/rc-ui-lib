import { Component } from '@angular/core';
import { RcCenteredPageComponent, RcCardComponent, RcCopyrightComponent, } from '../../shared';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class RsAuthLayoutComponent {
    static ɵfac = function RsAuthLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RsAuthLayoutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RsAuthLayoutComponent, selectors: [["rc-auth-layout"]], ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "col"], [1, "mb-5"]], template: function RsAuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "rc-centered-page")(1, "div", 0)(2, "rc-card", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "rc-copyright");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RcCenteredPageComponent, RcCardComponent, RcCopyrightComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RsAuthLayoutComponent, [{
        type: Component,
        args: [{
                template: `
    <rc-centered-page>
      <div class="col">
        <rc-card class="mb-5">
          <ng-content></ng-content>
        </rc-card>

        <rc-copyright />
      </div>
    </rc-centered-page>
  `,
                selector: 'rc-auth-layout',
                imports: [RcCenteredPageComponent, RcCardComponent, RcCopyrightComponent],
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RsAuthLayoutComponent, { className: "RsAuthLayoutComponent", filePath: "lib/auth/layouts/auth-layout.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=auth-layout.component.js.map