import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { VCLFormControlGroupModule, VCLSelectModule, VCLSelectListModule, } from '@vcl/ng-vcl';
import { RS_TRANSLATE } from '../../i18n.tokens';
import * as i0 from "@angular/core";
import * as i1 from "@vcl/ng-vcl";
import * as i2 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function RcCategorySelectComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 1);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", cat_r1.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r1.label$(cat_r1.label)), " ");
} }
export class RcCategorySelectComponent {
    label = 'Select category';
    categories = [];
    value = null;
    t = inject(RS_TRANSLATE, { optional: false });
    valueChange = new EventEmitter();
    onChange(id) {
        this.valueChange.emit(id);
    }
    label$(v) {
        return this.t(v);
    }
    static ɵfac = function RcCategorySelectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcCategorySelectComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcCategorySelectComponent, selectors: [["rc-category-select"]], inputs: { label: "label", categories: "categories", value: "value" }, outputs: { valueChange: "valueChange" }, decls: 7, vars: 2, consts: [[3, "valueChange", "value"], [3, "value"]], template: function RcCategorySelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "vcl-form-control-group")(1, "vcl-label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "vcl-select")(4, "vcl-select-list", 0);
            i0.ɵɵlistener("valueChange", function RcCategorySelectComponent_Template_vcl_select_list_valueChange_4_listener($event) { return ctx.onChange($event); });
            i0.ɵɵrepeaterCreate(5, RcCategorySelectComponent_For_6_Template, 3, 4, "vcl-select-list-item", 1, _forTrack0);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.categories);
        } }, dependencies: [CommonModule,
            VCLFormControlGroupModule, i1.FormControlGroupComponent, i1.VCLLabelDirective, VCLSelectModule, i1.VCLSelectComponent, i1.EmbeddedInputFieldLabelDirective, VCLSelectListModule, i1.VCLSelectListComponent, i1.VCLSelectListItemComponent, i2.AsyncPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcCategorySelectComponent, [{
        type: Component,
        args: [{
                selector: 'rc-category-select',
                standalone: true,
                imports: [
                    CommonModule,
                    VCLFormControlGroupModule,
                    VCLSelectModule,
                    VCLSelectListModule,
                ],
                template: `
    <vcl-form-control-group>
      <vcl-label>{{ label }}</vcl-label>

      <vcl-select>
        <vcl-select-list
          [value]="value"
          (valueChange)="onChange($event)"
        >
          @for (cat of categories; track cat.id) {
          <vcl-select-list-item [value]="cat.id">
            {{ label$(cat.label) | async }}
          </vcl-select-list-item>
          }
        </vcl-select-list>
      </vcl-select>
    </vcl-form-control-group>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { label: [{
            type: Input
        }], categories: [{
            type: Input
        }], value: [{
            type: Input
        }], valueChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcCategorySelectComponent, { className: "RcCategorySelectComponent", filePath: "lib/shared/patterns/category-select.component.ts", lineNumber: 48 }); })();
//# sourceMappingURL=category-select.component.js.map