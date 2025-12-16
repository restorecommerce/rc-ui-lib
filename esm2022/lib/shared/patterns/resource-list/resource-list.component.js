import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, } from '@angular/core';
import { VCLButtonComponent, VCLDataListModule, VCLIconModule, VCLInputModule, } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@vcl/ng-vcl";
const _c0 = ["itemTemplate"];
const _c1 = ["headerTemplate"];
const _c2 = (a0, a1) => ({ $implicit: a0, item: a1 });
function _forTrack0($index, $item) { return this.getId($item); }
function RcResourceListComponent_Conditional_18_For_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RcResourceListComponent_Conditional_18_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-data-list-item", 17);
    i0.ɵɵlistener("click", function RcResourceListComponent_Conditional_18_For_1_Template_vcl_data_list_item_click_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.itemSelected.emit(item_r2)); });
    i0.ɵɵtemplate(1, RcResourceListComponent_Conditional_18_For_1_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", ctx_r2.getId(item_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.itemTpl)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c2, item_r2, item_r2));
} }
function RcResourceListComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, RcResourceListComponent_Conditional_18_For_1_Template, 2, 6, "vcl-data-list-item", 16, _forTrack0, true);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.items);
} }
function RcResourceListComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.emptyLabel, " ");
} }
export class RcResourceListComponent {
    items = [];
    getId;
    title = 'Items';
    emptyLabel = 'No results';
    total = 0;
    filtered = 0;
    itemSelected = new EventEmitter();
    // Templates
    itemTpl;
    headerTpl;
    headerCtx = { total: 0, filtered: 0 };
    ngOnChanges() {
        this.headerCtx = { total: this.total, filtered: this.filtered };
    }
    static ɵfac = function RcResourceListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcResourceListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcResourceListComponent, selectors: [["rc-resource-list"]], contentQueries: function RcResourceListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, _c1, 5, TemplateRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemTpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerTpl = _t.first);
        } }, inputs: { items: "items", getId: "getId", title: "title", emptyLabel: "emptyLabel", total: "total", filtered: "filtered" }, outputs: { itemSelected: "itemSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 20, vars: 3, consts: [[1, "w-100p", "h-100p", 3, "noBorder"], ["role", "menubar", 1, "toolbar", "row", "just", "align-items-center", "px-2"], [1, "flex"], [1, "flex", "row", "justify-content-center", "overflow-ellipsis"], [1, "flex", "row", "justify-content-end"], ["vclAppend", "", "vcl-button", "", "square", "", "title", "Add", 1, "transparent"], ["icon", "mdi mdi-plus"], ["vclAppend", "", "vcl-button", "", "square", "", "title", "Refresh", 1, "transparent"], ["icon", "mdi mdi-refresh"], ["role", "menubar", 1, "toolbar", "row", "justify-between", "px-2", "mt-1", "mb-2"], ["placeholder", "Search...", "vclInput", ""], ["vclAppend", "", "vcl-button", "", "square", "", 1, "transparent"], ["icon", "mdi mdi-magnify"], ["vcl-button", "", "square", "", "title", "Open filter", 1, "transparent"], ["icon", "mdi mdi-filter"], [1, "p-2", "text-muted"], [3, "value"], [3, "click", "value"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function RcResourceListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "vcl-data-list", 0)(1, "vcl-data-list-header")(2, "div", 1);
            i0.ɵɵelement(3, "div", 2);
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4)(7, "button", 5);
            i0.ɵɵelement(8, "vcl-icon", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵelement(10, "vcl-icon", 8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 9)(12, "vcl-input-field", 2);
            i0.ɵɵelement(13, "input", 10);
            i0.ɵɵelementStart(14, "button", 11);
            i0.ɵɵelement(15, "vcl-icon", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "button", 13);
            i0.ɵɵelement(17, "vcl-icon", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(18, RcResourceListComponent_Conditional_18_Template, 2, 0)(19, RcResourceListComponent_Conditional_19_Template, 2, 1, "div", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("noBorder", true);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.items.length ? 18 : 19);
        } }, dependencies: [CommonModule, i1.NgTemplateOutlet, VCLDataListModule, i2.VCLDataListComponent, i2.VCLDataListItemDirective, i2.VCLAppendDirective, i2.VCLDataListHeaderDirective, VCLButtonComponent,
            VCLInputModule, i2.InputDirective, i2.InputFieldComponent, VCLIconModule, i2.VCLIconComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'rc-resource-list',
                imports: [
                    CommonModule,
                    VCLDataListModule,
                    VCLButtonComponent,
                    VCLInputModule,
                    VCLIconModule,
                ],
                template: `
    <vcl-data-list
      [noBorder]="true"
      class="w-100p h-100p"
    >
      <vcl-data-list-header>
        <div
          class="toolbar row just align-items-center px-2"
          role="menubar"
        >
          <div class="flex"></div>
          <span class="flex row justify-content-center overflow-ellipsis">
            {{ title }}
          </span>
          <div class="flex row justify-content-end">
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
              title="Add"
            >
              <vcl-icon icon="mdi mdi-plus"></vcl-icon>
            </button>

            <button
              vclAppend
              vcl-button
              square
              class="transparent"
              title="Refresh"
            >
              <vcl-icon icon="mdi mdi-refresh"></vcl-icon>
            </button>
          </div>
        </div>

        <div
          class="toolbar row justify-between px-2 mt-1 mb-2"
          role="menubar"
        >
          <vcl-input-field class="flex">
            <input
              placeholder="Search..."
              vclInput
            />
            <button
              vclAppend
              vcl-button
              square
              class="transparent"
            >
              <vcl-icon icon="mdi mdi-magnify"></vcl-icon>
            </button>
          </vcl-input-field>

          <button
            vcl-button
            square
            class="transparent"
            title="Open filter"
          >
            <vcl-icon icon="mdi mdi-filter"></vcl-icon>
          </button>
        </div>
      </vcl-data-list-header>

      @if (items.length) { @for (item of items; track getId(item)) {
      <vcl-data-list-item
        [value]="getId(item)"
        (click)="itemSelected.emit(item)"
      >
        <ng-container
          *ngTemplateOutlet="itemTpl; context: { $implicit: item, item: item }"
        />
      </vcl-data-list-item>
      } } @else {
      <div class="p-2 text-muted">
        {{ emptyLabel }}
      </div>
      }
    </vcl-data-list>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { items: [{
            type: Input,
            args: [{ required: true }]
        }], getId: [{
            type: Input,
            args: [{ required: true }]
        }], title: [{
            type: Input
        }], emptyLabel: [{
            type: Input
        }], total: [{
            type: Input
        }], filtered: [{
            type: Input
        }], itemSelected: [{
            type: Output
        }], itemTpl: [{
            type: ContentChild,
            args: ['itemTemplate', { read: TemplateRef }]
        }], headerTpl: [{
            type: ContentChild,
            args: ['headerTemplate', { read: TemplateRef }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcResourceListComponent, { className: "RcResourceListComponent", filePath: "lib/shared/patterns/resource-list/resource-list.component.ts", lineNumber: 115 }); })();
//# sourceMappingURL=resource-list.component.js.map