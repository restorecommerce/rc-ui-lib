import { Component } from '@angular/core';
import { VCLPopoverDirective, VCLButtonComponent, VCLIconComponent, } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
function NotificationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1, "Popover is connected to the target");
    i0.ɵɵelementEnd();
} }
export class NotificationComponent {
    static ɵfac = function NotificationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationComponent, selectors: [["ui-notification"]], decls: 7, vars: 1, consts: [["profileTarget", ""], ["popover", "vclPopover"], ["vcl-button", "", "square", "", 1, "transparent"], ["icon", "mdi mdi-bell-outline", 1, "scale155p"], ["vclPopover", "", 3, "afterClose", "target"], [1, "p-2"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div")(1, "button", 2);
            i0.ɵɵelement(2, "vcl-icon", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", null, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, NotificationComponent_ng_template_5_Template, 2, 0, "ng-template", 4, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("afterClose", function NotificationComponent_Template_ng_template_afterClose_5_listener() { i0.ɵɵrestoreView(_r1); const popover_r2 = i0.ɵɵreference(6); return i0.ɵɵresetView(popover_r2.close()); });
        } if (rf & 2) {
            const profileTarget_r3 = i0.ɵɵreference(4);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("target", profileTarget_r3);
        } }, dependencies: [VCLPopoverDirective, VCLButtonComponent, VCLIconComponent], styles: [".profile-trigger[_ngcontent-%COMP%]{width:40px;height:40px;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationComponent, [{
        type: Component,
        args: [{ selector: 'ui-notification', imports: [VCLPopoverDirective, VCLButtonComponent, VCLIconComponent], template: `
    <div>
      <button
        vcl-button
        square
        class="transparent"
      >
        <vcl-icon
          class="scale155p"
          icon="mdi mdi-bell-outline"
        ></vcl-icon>
      </button>

      <div #profileTarget></div>
    </div>

    <ng-template
      vclPopover
      #popover="vclPopover"
      [target]="profileTarget"
      (afterClose)="popover.close()"
    >
      <div class="p-2">Popover is connected to the target</div>
    </ng-template>
  `, styles: [".profile-trigger{width:40px;height:40px;cursor:pointer}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "lib/shared/patterns/notification/notification.component.ts", lineNumber: 46 }); })();
//# sourceMappingURL=notification.component.js.map