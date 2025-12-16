import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, } from '@angular/core';
import { VCLIconModule } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["actionsTemplate"];
const _c1 = ["subtitleTemplate"];
const _c2 = ["*"];
function RcResourceDetailComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function RcResourceDetailComponent_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back.emit()); });
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "div", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.backLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.backIcon);
} }
function RcResourceDetailComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.subtitleTpl);
} }
function RcResourceDetailComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.actionsTpl);
} }
function RcResourceDetailComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function RcResourceDetailComponent_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.edit.emit()); });
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "div", 13);
    i0.ɵɵelementEnd()();
} }
function RcResourceDetailComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function RcResourceDetailComponent_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.delete.emit()); });
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵelementEnd()();
} }
export class RcResourceDetailComponent {
    title = 'Detail';
    toolbarAriaLabel = 'Resource detail actions';
    // Left/back
    showBack = true;
    backIcon = 'mdi mdi-arrow-left';
    backLabel = 'Back';
    // Right/actions
    showEdit = true;
    showDelete = true;
    back = new EventEmitter();
    edit = new EventEmitter();
    delete = new EventEmitter();
    // Slots
    actionsTpl;
    subtitleTpl;
    static ɵfac = function RcResourceDetailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcResourceDetailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcResourceDetailComponent, selectors: [["rc-resource-detail"]], contentQueries: function RcResourceDetailComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, _c1, 5, TemplateRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsTpl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.subtitleTpl = _t.first);
        } }, inputs: { title: "title", toolbarAriaLabel: "toolbarAriaLabel", showBack: "showBack", backIcon: "backIcon", backLabel: "backLabel", showEdit: "showEdit", showDelete: "showDelete" }, outputs: { back: "back", edit: "edit", delete: "delete" }, ngContentSelectors: _c2, decls: 13, vars: 7, consts: [[1, "col", "h-100p"], ["role", "toolbar", 1, "toolbar", "secondary", "row", "center", "justify-between"], [1, "row", "center", "gap-05"], ["type", "button", 1, "button", "transparent", "square"], [1, "toolbar-title", "overflow-ellipsis"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", "Edit", 1, "button", "transparent", "square"], ["type", "button", "aria-label", "Delete", 1, "button", "transparent", "square"], [1, "rc-resource-detail-body", "scrollable", "flex", "p-2"], ["type", "button", 1, "button", "transparent", "square", 3, "click"], [1, "icogram"], ["aria-hidden", "true", 1, "icon", 3, "ngClass"], ["type", "button", "aria-label", "Edit", 1, "button", "transparent", "square", 3, "click"], ["aria-hidden", "true", 1, "icon", "mdi", "mdi-pencil"], ["type", "button", "aria-label", "Delete", 1, "button", "transparent", "square", 3, "click"], ["aria-hidden", "true", 1, "icon", "mdi", "mdi-delete-outline"]], template: function RcResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵconditionalCreate(3, RcResourceDetailComponent_Conditional_3_Template, 3, 2, "button", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, RcResourceDetailComponent_Conditional_6_Template, 1, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 2);
            i0.ɵɵconditionalCreate(8, RcResourceDetailComponent_Conditional_8_Template, 1, 1, "ng-container", 5);
            i0.ɵɵconditionalCreate(9, RcResourceDetailComponent_Conditional_9_Template, 3, 0, "button", 6);
            i0.ɵɵconditionalCreate(10, RcResourceDetailComponent_Conditional_10_Template, 3, 0, "button", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 8);
            i0.ɵɵprojection(12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", ctx.toolbarAriaLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showBack ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtitleTpl ? 6 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.actionsTpl ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showEdit ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDelete ? 10 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgTemplateOutlet, VCLIconModule], styles: [".toolbar-title[_ngcontent-%COMP%]{max-width:40rem}.rc-resource-detail-body[_ngcontent-%COMP%]{min-height:0}.gap-05[_ngcontent-%COMP%]{gap:.5rem}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcResourceDetailComponent, [{
        type: Component,
        args: [{ selector: 'rc-resource-detail', standalone: true, imports: [CommonModule, VCLIconModule], template: `
    <section class="col h-100p ">
      <!-- Toolbar -->
      <div
        class="toolbar secondary row center justify-between"
        role="toolbar"
        [attr.aria-label]="toolbarAriaLabel"
      >
        <!-- Left -->
        <div class="row center gap-05">
          @if (showBack) {
          <button
            type="button"
            class="button transparent square"
            [attr.aria-label]="backLabel"
            (click)="back.emit()"
          >
            <div class="icogram">
              <div
                class="icon"
                [ngClass]="backIcon"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          }

          <!-- Title -->
          <div class="toolbar-title overflow-ellipsis">
            {{ title }}
          </div>

          @if (subtitleTpl) {
          <ng-container [ngTemplateOutlet]="subtitleTpl" />
          }
        </div>

        <!-- Right -->
        <div class="row center gap-05">
          <!-- Custom actions slot -->
          @if (actionsTpl) {
          <ng-container [ngTemplateOutlet]="actionsTpl" />
          } @if (showEdit) {
          <button
            type="button"
            class="button transparent square"
            aria-label="Edit"
            (click)="edit.emit()"
          >
            <div class="icogram">
              <div
                class="icon mdi mdi-pencil"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          } @if (showDelete) {
          <button
            type="button"
            class="button transparent square"
            aria-label="Delete"
            (click)="delete.emit()"
          >
            <div class="icogram">
              <div
                class="icon mdi mdi-delete-outline"
                aria-hidden="true"
              ></div>
            </div>
          </button>
          }
        </div>
      </div>

      <!-- Body -->
      <div class="rc-resource-detail-body scrollable flex p-2 ">
        <ng-content />
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".toolbar-title{max-width:40rem}.rc-resource-detail-body{min-height:0}.gap-05{gap:.5rem}\n"] }]
    }], null, { title: [{
            type: Input
        }], toolbarAriaLabel: [{
            type: Input
        }], showBack: [{
            type: Input
        }], backIcon: [{
            type: Input
        }], backLabel: [{
            type: Input
        }], showEdit: [{
            type: Input
        }], showDelete: [{
            type: Input
        }], back: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], actionsTpl: [{
            type: ContentChild,
            args: ['actionsTemplate', { read: TemplateRef }]
        }], subtitleTpl: [{
            type: ContentChild,
            args: ['subtitleTemplate', { read: TemplateRef }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcResourceDetailComponent, { className: "RcResourceDetailComponent", filePath: "lib/shared/layouts/resource-detail/resource-detail.component.ts", lineNumber: 115 }); })();
//# sourceMappingURL=resource-detail.component.js.map