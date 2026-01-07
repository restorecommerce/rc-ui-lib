import { Component, Input } from '@angular/core';
import { VCLButtonComponent, VCLPopoverDirective } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function RcProfileThumbnailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
export class RcProfileThumbnailComponent {
    avatarUrl = 'https://i.pravatar.cc/80';
    static ɵfac = function RcProfileThumbnailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcProfileThumbnailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcProfileThumbnailComponent, selectors: [["rc-profile-thumbnail"]], inputs: { avatarUrl: "avatarUrl" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [["profileTarget", ""], ["popover", "vclPopover"], ["vcl-button", "", "square", "", "aria-haspopup", "menu", "aria-label", "User menu", 1, "profile-trigger", "transparent", 3, "click", "keydown.enter", "keydown.space"], ["alt", "User avatar", 1, "responsive-image", "img-shape-circular", 3, "src"], ["vclPopover", "", 3, "target", "closeOnOffClick"], ["role", "menu", 1, "profile-popover"]], template: function RcProfileThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", null, 0)(2, "button", 2);
            i0.ɵɵlistener("click", function RcProfileThumbnailComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(5); return i0.ɵɵresetView(popover_r2.toggle()); })("keydown.enter", function RcProfileThumbnailComponent_Template_button_keydown_enter_2_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(5); return i0.ɵɵresetView(popover_r2.toggle()); })("keydown.space", function RcProfileThumbnailComponent_Template_button_keydown_space_2_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(5); return i0.ɵɵresetView(popover_r2.toggle()); });
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, RcProfileThumbnailComponent_ng_template_4_Template, 2, 0, "ng-template", 4, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const profileTarget_r3 = i0.ɵɵreference(1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("src", ctx.avatarUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("target", profileTarget_r3)("closeOnOffClick", true);
        } }, dependencies: [VCLPopoverDirective, VCLButtonComponent], styles: [".profile-trigger[_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcProfileThumbnailComponent, [{
        type: Component,
        args: [{ selector: 'rc-profile-thumbnail', imports: [VCLPopoverDirective, VCLButtonComponent], template: `
    <span #profileTarget>
      <button
        vcl-button
        square
        class="profile-trigger transparent"
        (click)="popover.toggle()"
        (keydown.enter)="popover.toggle()"
        (keydown.space)="popover.toggle()"
        aria-haspopup="menu"
        aria-label="User menu"
      >
        <img
          [src]="avatarUrl"
          alt="User avatar"
          class="responsive-image img-shape-circular"
        />
      </button>
    </span>

    <!-- Popover -->
    <ng-template
      vclPopover
      #popover="vclPopover"
      [target]="profileTarget"
      [closeOnOffClick]="true"
    >
      <div
        class="profile-popover"
        role="menu"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `, styles: [".profile-trigger{width:40px;height:40px;cursor:pointer}\n"] }]
    }], null, { avatarUrl: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcProfileThumbnailComponent, { className: "RcProfileThumbnailComponent", filePath: "lib/shared/patterns/profile-thumbnail/profile-thumbnail.component.ts", lineNumber: 52 }); })();
//# sourceMappingURL=profile-thumbnail.component.js.map