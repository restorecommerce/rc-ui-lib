import { Component, Input } from '@angular/core';
import { VCLPopoverDirective } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function ProfileThumbnailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
export class ProfileThumbnailComponent {
    avatarUrl = 'https://i.pravatar.cc/80';
    static ɵfac = function ProfileThumbnailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileThumbnailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileThumbnailComponent, selectors: [["ui-profile-thumbnail"]], inputs: { avatarUrl: "avatarUrl" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [["profileTarget", ""], ["popover", "vclPopover"], ["vcl-button", "", "square", "", "aria-haspopup", "menu", "aria-label", "User menu", 1, "profile-trigger", "transparent", 3, "click", "keydown.enter", "keydown.space"], ["alt", "User avatar", 1, "responsive-image", "img-shape-circular", 3, "src"], ["vclPopover", "", 3, "target", "closeOnOffClick"], ["role", "menu", 1, "profile-popover"]], template: function ProfileThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 2, 0);
            i0.ɵɵlistener("click", function ProfileThumbnailComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(4); return i0.ɵɵresetView(popover_r2.toggle()); })("keydown.enter", function ProfileThumbnailComponent_Template_button_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(4); return i0.ɵɵresetView(popover_r2.toggle()); })("keydown.space", function ProfileThumbnailComponent_Template_button_keydown_space_0_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(4); return i0.ɵɵresetView(popover_r2.toggle()); });
            i0.ɵɵelement(2, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, ProfileThumbnailComponent_ng_template_3_Template, 2, 0, "ng-template", 4, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const profileTarget_r3 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", ctx.avatarUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("target", profileTarget_r3)("closeOnOffClick", true);
        } }, dependencies: [VCLPopoverDirective], styles: [".profile-trigger[_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileThumbnailComponent, [{
        type: Component,
        args: [{ selector: 'ui-profile-thumbnail', imports: [VCLPopoverDirective], template: `
    <button
      #profileTarget
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileThumbnailComponent, { className: "ProfileThumbnailComponent", filePath: "lib/shared/patterns/profile-thumbnail/profile-thumbnail.component.ts", lineNumber: 51 }); })();
//# sourceMappingURL=profile-thumbnail.component.js.map