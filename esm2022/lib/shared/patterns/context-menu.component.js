import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VCLSelectListComponent, VCLSelectListItemComponent, } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
function RcContextMenuComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", it_r1.value)("disabled", it_r1.disabled || false);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", it_r1.label, " ");
} }
export class RcContextMenuComponent {
    items = [];
    /** Emitted when a value is chosen */
    // eslint-disable-next-line @angular-eslint/no-output-native
    select = new EventEmitter();
    /** Handle pick + close */
    onPick(value) {
        this.select.emit(value);
    }
    static ɵfac = function RcContextMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcContextMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcContextMenuComponent, selectors: [["rc-context-menu"]], inputs: { items: "items" }, outputs: { select: "select" }, decls: 3, vars: 0, consts: [[3, "valueChange"], [3, "value", "disabled"]], template: function RcContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "vcl-select-list", 0);
            i0.ɵɵlistener("valueChange", function RcContextMenuComponent_Template_vcl_select_list_valueChange_0_listener($event) { return ctx.onPick($event); });
            i0.ɵɵrepeaterCreate(1, RcContextMenuComponent_For_2_Template, 2, 3, "vcl-select-list-item", 1, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.items);
        } }, dependencies: [VCLSelectListComponent, VCLSelectListItemComponent], styles: ["[_nghost-%COMP%]{display:contents}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcContextMenuComponent, [{
        type: Component,
        args: [{ selector: 'rc-context-menu', template: `
    <vcl-select-list (valueChange)="onPick($event)">
      @for (it of items; track $index) {
      <vcl-select-list-item
        [value]="it.value"
        [disabled]="it.disabled || false"
      >
        {{ it.label }}
      </vcl-select-list-item>
      }
    </vcl-select-list>
  `, imports: [VCLSelectListComponent, VCLSelectListItemComponent], styles: [":host{display:contents}\n"] }]
    }], null, { items: [{
            type: Input
        }], select: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcContextMenuComponent, { className: "RcContextMenuComponent", filePath: "lib/shared/patterns/context-menu.component.ts", lineNumber: 38 }); })();
//# sourceMappingURL=context-menu.component.js.map