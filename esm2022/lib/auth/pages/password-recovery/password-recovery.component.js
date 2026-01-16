import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VCLButtonComponent, VCLFormControlGroupModule, VCLInputModule, VCLPasswordInputModule, } from '@vcl/ng-vcl';
import { RcTranslatePipe } from '../../../i18n';
import { RsAuthLayoutComponent } from '../../layouts';
import { DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS, } from './password-recovery.i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
function RcPasswordRecoveryComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("width", ctx_r0.config.branding.logoSize || 100)("src", ctx_r0.config.branding.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r0.config.branding.logoAlt);
} }
function RcPasswordRecoveryComponent_Conditional_11_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r0.t().loading)), " ");
} }
function RcPasswordRecoveryComponent_Conditional_11_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r0.t().submit)), " ");
} }
function RcPasswordRecoveryComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵlistener("ngSubmit", function RcPasswordRecoveryComponent_Conditional_11_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitIdentifier()); });
    i0.ɵɵelementStart(1, "vcl-form-control-group")(2, "vcl-label");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "rcTranslate");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "vcl-input-field");
    i0.ɵɵelement(7, "input", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 10)(9, "button", 11);
    i0.ɵɵconditionalCreate(10, RcPasswordRecoveryComponent_Conditional_11_Conditional_10_Template, 3, 5)(11, RcPasswordRecoveryComponent_Conditional_11_Conditional_11_Template, 3, 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.identifierForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 6, i0.ɵɵpipeBind1(4, 4, ctx_r0.t().identifierLabel)), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.identifierForm.invalid || ctx_r0.state.status === "requesting");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.state.status === "requesting" ? 10 : 11);
} }
function RcPasswordRecoveryComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "rcTranslate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(2, 1, ctx_r0.t().emailSentDescription)), " ");
} }
function RcPasswordRecoveryComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵlistener("ngSubmit", function RcPasswordRecoveryComponent_Conditional_13_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submitPassword()); });
    i0.ɵɵelementStart(1, "vcl-form-control-group")(2, "vcl-label");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "rcTranslate");
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "vcl-password-input");
    i0.ɵɵelement(7, "input", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "vcl-form-control-group")(9, "vcl-label");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "rcTranslate");
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "vcl-password-input");
    i0.ɵɵelement(14, "input", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 10)(16, "button", 11);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "rcTranslate");
    i0.ɵɵpipe(19, "async");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.passwordForm);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 7, i0.ɵɵpipeBind1(4, 5, ctx_r0.t().passwordLabel)), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 11, i0.ɵɵpipeBind1(11, 9, ctx_r0.t().confirmPasswordLabel)), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.passwordForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 15, i0.ɵɵpipeBind1(18, 13, ctx_r0.t().submit)), " ");
} }
function RcPasswordRecoveryComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "rcTranslate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(2, 1, ctx_r0.t().invalidToken[ctx_r0.state.reason])), " ");
} }
function RcPasswordRecoveryComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "rcTranslate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(2, 1, ctx_r0.t().success)), " ");
} }
export class RcPasswordRecoveryComponent {
    config;
    state;
    requestReset = new EventEmitter();
    submitNewPassword = new EventEmitter();
    t = computed(() => ({
        ...DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS,
        ...this.config.i18n?.passwordRecovery,
    }), ...(ngDevMode ? [{ debugName: "t" }] : []));
    fb = inject(FormBuilder);
    identifierForm = this.fb.nonNullable.group({
        identifier: ['', Validators.required],
    });
    passwordForm = this.fb.nonNullable.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
    });
    submitIdentifier() {
        if (this.identifierForm.invalid)
            return;
        this.requestReset.emit({
            identifier: this.identifierForm.value.identifier,
        });
    }
    submitPassword() {
        if (this.passwordForm.invalid)
            return;
        this.submitNewPassword.emit({
            password: this.passwordForm.value.password,
        });
    }
    static ɵfac = function RcPasswordRecoveryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcPasswordRecoveryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcPasswordRecoveryComponent, selectors: [["rc-password-recovery"]], inputs: { config: "config", state: "state" }, outputs: { requestReset: "requestReset", submitNewPassword: "submitNewPassword" }, decls: 16, vars: 12, consts: [[1, "w-100p", "col", "justify-center", "align-items-center", "mt-3", "mb-2"], [3, "width", "src", "alt"], [1, "p-2"], [1, "mt-1", "row", "justify-center", "align-item-center"], ["vclForm", "", 1, "form", 3, "formGroup"], [1, "text-center", "mt-3"], [1, "panel", "error", "text-center", "mt-3"], [1, "panel", "success", "text-center", "mt-3"], ["vclForm", "", 1, "form", 3, "ngSubmit", "formGroup"], ["vclInput", "", "formControlName", "identifier"], [1, "row", "mt-3"], ["vcl-button", "", "type", "submit", 1, "w-100p", "emphasized", 3, "disabled"], ["vclInput", "", "formControlName", "password"], ["vclInput", "", "formControlName", "confirmPassword"]], template: function RcPasswordRecoveryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rc-auth-layout")(1, "div", 0);
            i0.ɵɵconditionalCreate(2, RcPasswordRecoveryComponent_Conditional_2_Template, 1, 3, "img", 1);
            i0.ɵɵelementStart(3, "h3", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3)(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "rcTranslate");
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(10, "hr");
            i0.ɵɵconditionalCreate(11, RcPasswordRecoveryComponent_Conditional_11_Template, 12, 8, "form", 4);
            i0.ɵɵconditionalCreate(12, RcPasswordRecoveryComponent_Conditional_12_Template, 4, 5, "p", 5);
            i0.ɵɵconditionalCreate(13, RcPasswordRecoveryComponent_Conditional_13_Template, 20, 17, "form", 4);
            i0.ɵɵconditionalCreate(14, RcPasswordRecoveryComponent_Conditional_14_Template, 4, 5, "p", 6);
            i0.ɵɵconditionalCreate(15, RcPasswordRecoveryComponent_Conditional_15_Template, 4, 5, "p", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.config.branding.logoUrl ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.config.branding.appName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 10, i0.ɵɵpipeBind1(8, 8, ctx.t().title)));
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.state.status === "idle" || ctx.state.status === "requesting" ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.status === "emailSent" ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.status === "settingPassword" ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.status === "invalidToken" ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.status === "success" ? 15 : -1);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i2.FormControlGroupComponent, i2.VCLLabelDirective, i2.FormDirective, i2.EmbeddedInputFieldLabelDirective, VCLButtonComponent,
            VCLFormControlGroupModule,
            VCLPasswordInputModule, i2.VCLPasswordInputComponent, RsAuthLayoutComponent,
            RcTranslatePipe,
            AsyncPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcPasswordRecoveryComponent, [{
        type: Component,
        args: [{ selector: 'rc-password-recovery', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    ReactiveFormsModule,
                    VCLInputModule,
                    VCLButtonComponent,
                    VCLFormControlGroupModule,
                    VCLPasswordInputModule,
                    RsAuthLayoutComponent,
                    RcTranslatePipe,
                    AsyncPipe,
                ], template: "<rc-auth-layout>\n  <!-- Branding -->\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (config.branding.logoUrl) {\n    <img\n      [width]=\"config.branding.logoSize || 100\"\n      [src]=\"config.branding.logoUrl\"\n      [alt]=\"config.branding.logoAlt\"\n    />\n    }\n    <h3 class=\"p-2\">{{ config.branding.appName }}</h3>\n  </div>\n\n  <!-- Title -->\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>{{ t().title | rcTranslate | async }}</span>\n  </div>\n\n  <hr />\n\n  <!-- REQUEST RESET -->\n  @if (state.status === 'idle' || state.status === 'requesting') {\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"identifierForm\"\n    (ngSubmit)=\"submitIdentifier()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>\n        {{ t().identifierLabel | rcTranslate | async }}\n      </vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <div class=\"row mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p emphasized\"\n        [disabled]=\"identifierForm.invalid || state.status === 'requesting'\"\n      >\n        @if (state.status === 'requesting') {\n        {{ t().loading | rcTranslate | async }}\n        } @else {\n        {{ t().submit | rcTranslate | async }}\n        }\n      </button>\n    </div>\n  </form>\n  }\n\n  <!-- EMAIL SENT -->\n  @if (state.status === 'emailSent') {\n  <p class=\"text-center mt-3\">\n    {{ t().emailSentDescription | rcTranslate | async }}\n  </p>\n  }\n\n  <!-- SET PASSWORD -->\n  @if (state.status === 'settingPassword') {\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"passwordForm\"\n    (ngSubmit)=\"submitPassword()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>\n        {{ t().passwordLabel | rcTranslate | async }}\n      </vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>\n        {{ t().confirmPasswordLabel | rcTranslate | async }}\n      </vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"confirmPassword\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <div class=\"row mt-3\">\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p emphasized\"\n        [disabled]=\"passwordForm.invalid\"\n      >\n        {{ t().submit | rcTranslate | async }}\n      </button>\n    </div>\n  </form>\n  }\n\n  <!-- INVALID TOKEN -->\n  @if (state.status === 'invalidToken') {\n  <p class=\"panel error text-center mt-3\">\n    {{ t().invalidToken[state.reason] | rcTranslate | async }}\n  </p>\n  }\n\n  <!-- SUCCESS -->\n  @if (state.status === 'success') {\n  <p class=\"panel success text-center mt-3\">\n    {{ t().success | rcTranslate | async }}\n  </p>\n  }\n</rc-auth-layout>\n" }]
    }], null, { config: [{
            type: Input,
            args: [{ required: true }]
        }], state: [{
            type: Input,
            args: [{ required: true }]
        }], requestReset: [{
            type: Output
        }], submitNewPassword: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcPasswordRecoveryComponent, { className: "RcPasswordRecoveryComponent", filePath: "lib/auth/pages/password-recovery/password-recovery.component.ts", lineNumber: 45 }); })();
//# sourceMappingURL=password-recovery.component.js.map