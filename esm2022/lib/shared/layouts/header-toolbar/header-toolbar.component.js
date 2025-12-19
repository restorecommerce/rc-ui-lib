import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, inject, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLDataListModule, VCLIcogramModule, VCLIconModule, VCLInputModule, VCLPopoverModule, VCLSelectListModule, } from '@vcl/ng-vcl';
import { RS_TRANSLATE } from '../../../i18n/i18n.tokens';
import { RC_LAYOUT_CONFIG } from '../main-layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
import * as i3 from "@angular/common";
function RcHeaderToolbarComponent_Conditional_0_ng_template_15_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 17)(1, "div", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const organization_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", organization_r6.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(organization_r6 == null ? null : organization_r6.name);
} }
function RcHeaderToolbarComponent_Conditional_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "vcl-input-field", 14)(2, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function RcHeaderToolbarComponent_Conditional_0_ng_template_15_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r4.searchTerm, $event) || (ctx_r4.searchTerm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "vcl-select-list", 16);
    i0.ɵɵlistener("valueChange", function RcHeaderToolbarComponent_Conditional_0_ng_template_15_Template_vcl_select_list_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r4); i0.ɵɵnextContext(); const templatePopoverOrganization_r2 = i0.ɵɵreference(16); const ctx_r4 = i0.ɵɵnextContext(); ctx_r4.onSelectOrganization($event); return i0.ɵɵresetView(templatePopoverOrganization_r2.close()); });
    i0.ɵɵrepeaterCreate(4, RcHeaderToolbarComponent_Conditional_0_ng_template_15_For_5_Template, 3, 2, "vcl-select-list-item", 17, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.searchTerm);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r4.filteredOrganizations);
} }
function RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 20);
    i0.ɵɵelement(1, "vcl-icon", 23);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, ctx_r4.label$((ctx_r4.config.accountMenu == null ? null : ctx_r4.config.accountMenu.profile) || "Profile")), " ");
} }
function RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 21);
    i0.ɵɵelement(1, "vcl-icon", 24);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, ctx_r4.label$((ctx_r4.config.accountMenu == null ? null : ctx_r4.config.accountMenu.preferences) || "Preferences")), " ");
} }
function RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "vcl-select-list-item", 22);
    i0.ɵɵelement(1, "vcl-icon", 25);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, ctx_r4.label$((ctx_r4.config.accountMenu == null ? null : ctx_r4.config.accountMenu.signOut) || "Sign out")), " ");
} }
function RcHeaderToolbarComponent_Conditional_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "vcl-select-list", 19);
    i0.ɵɵlistener("valueChange", function RcHeaderToolbarComponent_Conditional_0_ng_template_17_Template_vcl_select_list_valueChange_0_listener($event) { i0.ɵɵrestoreView(_r7); i0.ɵɵnextContext(); const templatePopoverAccount_r3 = i0.ɵɵreference(18); const ctx_r4 = i0.ɵɵnextContext(); ctx_r4.onAccountItemSelected($event); return i0.ɵɵresetView(templatePopoverAccount_r3.close()); });
    i0.ɵɵconditionalCreate(1, RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_1_Template, 4, 3, "vcl-select-list-item", 20);
    i0.ɵɵconditionalCreate(2, RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_2_Template, 4, 3, "vcl-select-list-item", 21);
    i0.ɵɵconditionalCreate(3, RcHeaderToolbarComponent_Conditional_0_ng_template_17_Conditional_3_Template, 4, 3, "vcl-select-list-item", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r4.showProfile ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r4.showPreferences ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r4.showSignOut ? 3 : -1);
} }
function RcHeaderToolbarComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "span", 4, 0)(3, "button", 5);
    i0.ɵɵlistener("click", function RcHeaderToolbarComponent_Conditional_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const templatePopoverOrganization_r2 = i0.ɵɵreference(16); return i0.ɵɵresetView(templatePopoverOrganization_r2.toggle()); });
    i0.ɵɵelement(4, "vcl-icon", 6);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelement(7, "vcl-icon", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 4, 1)(10, "button", 8);
    i0.ɵɵlistener("click", function RcHeaderToolbarComponent_Conditional_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const templatePopoverAccount_r3 = i0.ɵɵreference(18); return i0.ɵɵresetView(templatePopoverAccount_r3.toggle()); });
    i0.ɵɵelementStart(11, "vcl-icogram");
    i0.ɵɵelement(12, "vcl-icon", 9);
    i0.ɵɵtext(13);
    i0.ɵɵelement(14, "vcl-icon", 10);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(15, RcHeaderToolbarComponent_Conditional_0_ng_template_15_Template, 6, 1, "ng-template", 11, 2, i0.ɵɵtemplateRefExtractor)(17, RcHeaderToolbarComponent_Conditional_0_ng_template_17_Template, 4, 3, "ng-template", 12, 3, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const popoverOrganizationTarget_r8 = i0.ɵɵreference(2);
    const popoverAccountTarget_r9 = i0.ɵɵreference(9);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("selectable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (ctx_r4.selectedOrganization == null ? null : ctx_r4.selectedOrganization.name) || i0.ɵɵpipeBind1(6, 10, ctx_r4.label$((ctx_r4.config.uiText == null ? null : ctx_r4.config.uiText.selectOrganization) || "Select organization")), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("selectable", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.user.fullName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("target", popoverOrganizationTarget_r8)("closeOnOffClick", true)("positions", ctx_r4.rightOrientedPositions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("target", popoverAccountTarget_r9)("closeOnOffClick", true)("positions", ctx_r4.rightOrientedPositions);
} }
export class RcHeaderToolbarComponent {
    user = {
        id: 'user-1',
        fullName: 'Bello Babakolo',
        email: 'bello.babakolo@example.com',
        // avatarUrl: 'https://i.pravatar.cc/80?img=5',
    };
    organizations = [
        {
            id: 'org-nfuse',
            name: 'n-fuse GmbH',
            description: 'IoT & E-commerce platform',
        },
        {
            id: 'org-fieldmorph',
            name: 'FieldMorph',
            description: 'Field operations & asset tracking',
        },
        {
            id: 'org-bells',
            name: 'Bells Transport',
            description: 'Bus ticketing & logistics',
        },
    ];
    selectedOrganizationId = 'org-nfuse';
    showProfile = true;
    showPreferences = true;
    showSignOut = true;
    /** Popover positions (you can override if needed) */
    rightOrientedPositions = [
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
        },
    ];
    /** Emitted when an organization is selected */
    organizationSelected = new EventEmitter();
    /** Emitted when an account action is chosen */
    accountAction = new EventEmitter();
    /** Emitted when the search term changes */
    searchChange = new EventEmitter();
    hostRowClass = true;
    t = inject(RS_TRANSLATE, { optional: false });
    config = inject(RC_LAYOUT_CONFIG, { optional: false });
    searchTerm = '';
    get selectedOrganization() {
        return this.organizations.find((o) => o.id === this.selectedOrganizationId);
    }
    get filteredOrganizations() {
        const term = this.searchTerm.trim().toLowerCase();
        if (!term)
            return this.organizations;
        return this.organizations.filter((org) => {
            const name = org.name?.toLowerCase() ?? '';
            const desc = org.description?.toLowerCase() ?? '';
            return name.includes(term) || desc.includes(term);
        });
    }
    onSearchChange(term) {
        this.searchChange.emit(term);
    }
    onSelectOrganization(id) {
        this.organizationSelected.emit(id);
    }
    onAccountItemSelected(value) {
        if (value === 'profile' ||
            value === 'preferences' ||
            value === 'sign-out') {
            this.accountAction.emit(value);
        }
    }
    label$(v) {
        return this.t(v);
    }
    static ɵfac = function RcHeaderToolbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcHeaderToolbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcHeaderToolbarComponent, selectors: [["rc-header-toolbar"]], hostVars: 2, hostBindings: function RcHeaderToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("row", ctx.hostRowClass);
        } }, inputs: { user: "user", organizations: "organizations", selectedOrganizationId: "selectedOrganizationId", showProfile: "showProfile", showPreferences: "showPreferences", showSignOut: "showSignOut", rightOrientedPositions: "rightOrientedPositions" }, outputs: { organizationSelected: "organizationSelected", accountAction: "accountAction", searchChange: "searchChange" }, decls: 1, vars: 1, consts: [["popoverOrganizationTarget", ""], ["popoverAccountTarget", ""], ["templatePopoverOrganization", "vclPopover"], ["templatePopoverAccount", "vclPopover"], [1, "inline-block"], ["vcl-button", "", 1, "half-transparent", 3, "click", "selectable"], ["vclPrepend", "", "icon", "mdi:home-outline"], ["vclAppend", "", "icon", "mdi:chevron-down"], ["vcl-button", "", 1, "half-transparent", "account", 3, "click", "selectable"], ["icon", "mdi:account-outline"], ["icon", "mdi:chevron-down"], ["vclPopover", "", 1, "mt-2", 3, "target", "closeOnOffClick", "positions"], ["vclPopover", "", 3, "target", "closeOnOffClick", "positions"], [1, "rc-header-toolbar-org-popover"], [1, "searchField"], ["vclInput", "", "placeholder", "Search organizations...", 3, "ngModelChange", "ngModel"], [1, "m-0", 3, "valueChange"], [1, "row", "center", 3, "value"], [1, "p-2"], [3, "valueChange"], ["value", "profile"], ["value", "preferences"], ["value", "sign-out"], ["vclPrepend", "", "icon", "mdi:account-cog-outline"], ["vclPrepend", "", "icon", "mdi:cog-outline"], ["vclPrepend", "", "icon", "mdi:logout"]], template: function RcHeaderToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, RcHeaderToolbarComponent_Conditional_0_Template, 19, 12);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.user ? 0 : -1);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterModule,
            CommonModule,
            VCLButtonModule, i2.VCLIconComponent, i2.VCLIcogramComponent, i2.VCLButtonComponent, VCLPopoverModule, i2.VCLPopoverDirective, VCLDataListModule, i2.VCLPrependDirective, i2.VCLAppendDirective, VCLSelectListModule, i2.VCLSelectListComponent, i2.VCLSelectListItemComponent, VCLIconModule,
            VCLIcogramModule,
            VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i3.AsyncPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcHeaderToolbarComponent, [{
        type: Component,
        args: [{ selector: 'rc-header-toolbar', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    FormsModule,
                    RouterModule,
                    CommonModule,
                    VCLButtonModule,
                    VCLPopoverModule,
                    VCLDataListModule,
                    VCLSelectListModule,
                    VCLIconModule,
                    VCLIcogramModule,
                    VCLInputModule,
                ], template: "@if (user) {\n<div>\n  <!-- Organization trigger -->\n  <span\n    #popoverOrganizationTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverOrganization.toggle()\"\n      class=\"half-transparent\"\n    >\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:home-outline\"\n      ></vcl-icon>\n\n      {{\n        selectedOrganization?.name ||\n          (label$(config.uiText?.selectOrganization || 'Select organization')\n            | async)\n      }}\n\n      <vcl-icon\n        vclAppend\n        icon=\"mdi:chevron-down\"\n      ></vcl-icon>\n    </button>\n  </span>\n\n  <!-- Account trigger -->\n  <span\n    #popoverAccountTarget\n    class=\"inline-block\"\n  >\n    <button\n      vcl-button\n      [selectable]=\"true\"\n      (click)=\"templatePopoverAccount.toggle()\"\n      class=\"half-transparent account\"\n    >\n      <vcl-icogram>\n        <vcl-icon icon=\"mdi:account-outline\"></vcl-icon>\n        {{ user.fullName }}\n        <vcl-icon icon=\"mdi:chevron-down\"></vcl-icon>\n      </vcl-icogram>\n    </button>\n  </span>\n</div>\n\n<!-- ORG POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverOrganization=\"vclPopover\"\n  [target]=\"popoverOrganizationTarget\"\n  class=\"mt-2\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <div class=\"rc-header-toolbar-org-popover\">\n    <!-- Search -->\n    <vcl-input-field class=\"searchField\">\n      <input\n        vclInput\n        placeholder=\"Search organizations...\"\n        [(ngModel)]=\"searchTerm\"\n      />\n    </vcl-input-field>\n\n    <!-- Organization list -->\n    <vcl-select-list\n      class=\"m-0\"\n      (valueChange)=\"\n        onSelectOrganization($event); templatePopoverOrganization.close()\n      \"\n    >\n      @for (organization of filteredOrganizations; track $index) {\n      <vcl-select-list-item\n        class=\"row center\"\n        [value]=\"organization.id\"\n      >\n        <div class=\"p-2\">{{ organization?.name }}</div>\n      </vcl-select-list-item>\n      }\n    </vcl-select-list>\n  </div>\n</ng-template>\n\n<!-- ACCOUNT POPOVER -->\n<ng-template\n  vclPopover\n  #templatePopoverAccount=\"vclPopover\"\n  [target]=\"popoverAccountTarget\"\n  [closeOnOffClick]=\"true\"\n  [positions]=\"rightOrientedPositions\"\n>\n  <vcl-select-list\n    (valueChange)=\"\n      onAccountItemSelected($event); templatePopoverAccount.close()\n    \"\n  >\n    @if (showProfile) {\n    <vcl-select-list-item value=\"profile\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:account-cog-outline\"\n      ></vcl-icon>\n\n      {{ label$(config.accountMenu?.profile || 'Profile') | async }}\n    </vcl-select-list-item>\n    } @if (showPreferences) {\n    <vcl-select-list-item value=\"preferences\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:cog-outline\"\n      ></vcl-icon>\n      {{ label$(config.accountMenu?.preferences || 'Preferences') | async }}\n    </vcl-select-list-item>\n    } @if (showSignOut) {\n    <vcl-select-list-item value=\"sign-out\">\n      <vcl-icon\n        vclPrepend\n        icon=\"mdi:logout\"\n      ></vcl-icon>\n      {{ label$(config.accountMenu?.signOut || 'Sign out') | async }}\n    </vcl-select-list-item>\n    }\n  </vcl-select-list>\n</ng-template>\n}\n" }]
    }], null, { user: [{
            type: Input
        }], organizations: [{
            type: Input
        }], selectedOrganizationId: [{
            type: Input
        }], showProfile: [{
            type: Input
        }], showPreferences: [{
            type: Input
        }], showSignOut: [{
            type: Input
        }], rightOrientedPositions: [{
            type: Input
        }], organizationSelected: [{
            type: Output
        }], accountAction: [{
            type: Output
        }], searchChange: [{
            type: Output
        }], hostRowClass: [{
            type: HostBinding,
            args: ['class.row']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcHeaderToolbarComponent, { className: "RcHeaderToolbarComponent", filePath: "lib/shared/layouts/header-toolbar/header-toolbar.component.ts", lineNumber: 46 }); })();
//# sourceMappingURL=header-toolbar.component.js.map