import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/"];
export class RcCopyrightComponent {
    year = new Date().getFullYear();
    company = 'RestoreCommerce';
    text = 'All rights reserved.';
    static ɵfac = function RcCopyrightComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcCopyrightComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcCopyrightComponent, selectors: [["rc-copyright"]], inputs: { year: "year", company: "company", text: "text" }, decls: 5, vars: 5, consts: [[1, "align-centered", "mt-5", "rs-copyright"], [3, "routerLink"]], template: function RcCopyrightComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementStart(2, "a", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" \u00A9 ", ctx.year, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c0));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.company);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" . ", ctx.text, " ");
        } }, dependencies: [RouterModule, i1.RouterLink], styles: [".rs-copyright[_ngcontent-%COMP%]{font-size:.8rem;opacity:.75}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcCopyrightComponent, [{
        type: Component,
        args: [{ selector: 'rc-copyright', standalone: true, imports: [RouterModule], template: `
    <div class="align-centered mt-5 rs-copyright">
      &copy; {{ year }} <a [routerLink]="['/']">{{ company }}</a> . {{ text }}
    </div>
  `, styles: [".rs-copyright{font-size:.8rem;opacity:.75}\n"] }]
    }], null, { year: [{
            type: Input
        }], company: [{
            type: Input
        }], text: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcCopyrightComponent, { className: "RcCopyrightComponent", filePath: "lib/shared/patterns/copyright.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=copyright.component.js.map