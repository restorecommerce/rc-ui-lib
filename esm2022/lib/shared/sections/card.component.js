import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VCLPanelModule } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
import * as i1 from "@vcl/ng-vcl";
const _c0 = ["*", [["", "rsCardHeaderActions", ""]], [["", "rsCardHeader", ""]], [["", "rsCardFooter", ""]]];
const _c1 = ["*", "[rsCardHeaderActions]", "[rsCardHeader]", "[rsCardFooter]"];
function RcCardComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "vcl-icon", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r0.icon);
} }
function RcCardComponent_Conditional_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.subtitle, " ");
} }
function RcCardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-panel-header")(1, "div", 2)(2, "div", 3);
    i0.ɵɵconditionalCreate(3, RcCardComponent_Conditional_1_Conditional_3_Template, 1, 1, "vcl-icon", 4);
    i0.ɵɵelementStart(4, "div", 5)(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, RcCardComponent_Conditional_1_Conditional_7_Template, 2, 1, "div");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵprojection(9, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵprojection(10, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.icon ? 3 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.subtitle ? 7 : -1);
} }
function RcCardComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-panel-footer")(1, "div", 7);
    i0.ɵɵprojection(2, 3);
    i0.ɵɵelementEnd()();
} }
export class RcCardComponent {
    title = '';
    subtitle;
    icon;
    variant;
    forceFooter = false;
    get showFooter() {
        return this.forceFooter || true;
    }
    get hasHeaderContent() {
        return !!this.title;
    }
    static ɵfac = function RcCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcCardComponent, selectors: [["rc-card"]], inputs: { title: "title", subtitle: "subtitle", icon: "icon", variant: "variant", forceFooter: "forceFooter" }, ngContentSelectors: _c1, decls: 5, vars: 3, consts: [[1, "rs-card", 3, "ngClass"], [1, "rs-card__content"], [1, "row", "align-items-center", "justify-content-between"], [1, "row", "align-items-center", "gap-1"], [1, "mr-1", 3, "icon"], [1, "column"], [1, "row"], [1, "row", "align-items-center", "py-1"]], template: function RcCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "vcl-panel", 0);
            i0.ɵɵconditionalCreate(1, RcCardComponent_Conditional_1_Template, 11, 3, "vcl-panel-header");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, RcCardComponent_Conditional_4_Template, 3, 0, "vcl-panel-footer");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.variant);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.title || ctx.hasHeaderContent ? 1 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.showFooter ? 4 : -1);
        } }, dependencies: [VCLPanelModule, i1.VCLIconComponent, i1.VCLPanelComponent, i1.VCLPanelFooterDirective, i1.VCLPanelHeaderDirective, NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcCardComponent, [{
        type: Component,
        args: [{
                selector: 'rc-card',
                standalone: true,
                imports: [VCLPanelModule, NgClass],
                template: `
    <vcl-panel
      class="rs-card"
      [ngClass]="variant"
    >
      @if (title || hasHeaderContent) {
      <vcl-panel-header>
        <div class="row align-items-center justify-content-between">
          <div class="row align-items-center gap-1">
            @if (icon) {
            <vcl-icon
              [icon]="icon"
              class="mr-1"
            ></vcl-icon>
            }

            <div class="column">
              <div>{{ title }}</div>
              @if (subtitle) {
              <div>
                {{ subtitle }}
              </div>
              }
            </div>
          </div>

          <div class="row">
            <ng-content select="[rsCardHeaderActions]"></ng-content>
          </div>
        </div>

        <ng-content select="[rsCardHeader]"></ng-content>
      </vcl-panel-header>
      }

      <div class="rs-card__content">
        <ng-content></ng-content>
      </div>

      @if(showFooter) {
      <vcl-panel-footer>
        <div class="row align-items-center py-1">
          <ng-content select="[rsCardFooter]"></ng-content>
        </div>
      </vcl-panel-footer>
      }
    </vcl-panel>
  `,
            }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], icon: [{
            type: Input
        }], variant: [{
            type: Input
        }], forceFooter: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcCardComponent, { className: "RcCardComponent", filePath: "lib/shared/sections/card.component.ts", lineNumber: 59 }); })();
//# sourceMappingURL=card.component.js.map