import { AsyncPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLFormControlGroupModule, VCLInputModule, VCLPasswordInputModule, } from '@vcl/ng-vcl';
import { RcTranslatePipe } from '../../../i18n';
import { RsAuthLayoutComponent } from '../../layouts';
import { DEFAULT_SIGN_UP_TRANSLATIONS, } from './sign-up.i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
const _c0 = a0 => ({ disabled: a0 });
function RcSignUpComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("width", ctx_r1.config.branding.logoSize || 100)("src", ctx_r1.config.branding.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r1.config.branding.logoAlt);
} }
function RcSignUpComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r1.t().loading)), " ");
} }
function RcSignUpComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r1.t().submit)), " ");
} }
export class RcSignUpComponent {
    // Config for branding, translations
    config;
    // Workflow state (loading, success, errors)
    state;
    // User action emitter
    action = new EventEmitter();
    // Reactive form with validators
    form = new FormGroup({
        firstName: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        lastName: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        email: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.email],
        }),
        username: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
    });
    // Computed translations (defaults + overrides)
    t = computed(() => ({
        ...DEFAULT_SIGN_UP_TRANSLATIONS,
        ...this.config.i18n?.signUp,
    }), ...(ngDevMode ? [{ debugName: "t" }] : []));
    // Submit handler
    submit() {
        if (this.form.invalid || this.state.loading)
            return;
        const { password, confirmPassword, ...rest } = this.form.getRawValue();
        if (password !== confirmPassword) {
            // Optionally emit a password mismatch action
            this.action.emit({ type: 'password-mismatch' });
            return;
        }
        this.action.emit({
            type: 'submit',
            payload: { ...rest, password },
        });
    }
    static ɵfac = function RcSignUpComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcSignUpComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcSignUpComponent, selectors: [["rc-sign-up"]], inputs: { config: "config", state: "state" }, outputs: { action: "action" }, decls: 58, vars: 43, consts: [[1, "w-100p", "col", "justify-center", "align-items-center", "mt-3", "mb-2"], [3, "width", "src", "alt"], [1, "p-2"], [1, "mt-1", "row", "justify-center", "align-item-center"], ["vclForm", "", 1, "form", 3, "ngSubmit", "formGroup"], ["vclInput", "", "formControlName", "firstName"], ["vclInput", "", "formControlName", "lastName"], ["vclInput", "", "formControlName", "email", "type", "email"], ["vclInput", "", "formControlName", "username"], ["vclInput", "", "formControlName", "password", "type", "password"], ["vclInput", "", "formControlName", "confirmPassword", "type", "password"], [1, "row"], ["vcl-button", "", "type", "submit", 1, "w-100p", "emphasized", 3, "ngClass", "disabled"]], template: function RcSignUpComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "rc-auth-layout")(1, "div", 0);
            i0.ɵɵconditionalCreate(2, RcSignUpComponent_Conditional_2_Template, 1, 3, "img", 1);
            i0.ɵɵelementStart(3, "h3", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3)(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "rcTranslate");
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(10, "hr");
            i0.ɵɵelementStart(11, "form", 4);
            i0.ɵɵlistener("ngSubmit", function RcSignUpComponent_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(12, "vcl-form-control-group")(13, "vcl-label");
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "rcTranslate");
            i0.ɵɵpipe(16, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "vcl-input-field");
            i0.ɵɵelement(18, "input", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "vcl-form-control-group")(20, "vcl-label");
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "rcTranslate");
            i0.ɵɵpipe(23, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "vcl-input-field");
            i0.ɵɵelement(25, "input", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "vcl-form-control-group")(27, "vcl-label");
            i0.ɵɵtext(28);
            i0.ɵɵpipe(29, "rcTranslate");
            i0.ɵɵpipe(30, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "vcl-input-field");
            i0.ɵɵelement(32, "input", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "vcl-form-control-group")(34, "vcl-label");
            i0.ɵɵtext(35);
            i0.ɵɵpipe(36, "rcTranslate");
            i0.ɵɵpipe(37, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "vcl-input-field");
            i0.ɵɵelement(39, "input", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "vcl-form-control-group")(41, "vcl-label");
            i0.ɵɵtext(42);
            i0.ɵɵpipe(43, "rcTranslate");
            i0.ɵɵpipe(44, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "vcl-password-input");
            i0.ɵɵelement(46, "input", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "vcl-form-control-group")(48, "vcl-label");
            i0.ɵɵtext(49);
            i0.ɵɵpipe(50, "rcTranslate");
            i0.ɵɵpipe(51, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "vcl-password-input");
            i0.ɵɵelement(53, "input", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(54, "div", 11)(55, "button", 12);
            i0.ɵɵconditionalCreate(56, RcSignUpComponent_Conditional_56_Template, 3, 5)(57, RcSignUpComponent_Conditional_57_Template, 3, 5);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.config.branding.logoUrl ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.config.branding.appName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 15, i0.ɵɵpipeBind1(8, 13, ctx.t().title)));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 19, i0.ɵɵpipeBind1(15, 17, ctx.t().firstNameLabel)));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(23, 23, i0.ɵɵpipeBind1(22, 21, ctx.t().lastNameLabel)));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(30, 27, i0.ɵɵpipeBind1(29, 25, ctx.t().emailLabel)));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(37, 31, i0.ɵɵpipeBind1(36, 29, ctx.t().usernameLabel)));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(44, 35, i0.ɵɵpipeBind1(43, 33, ctx.t().passwordLabel)));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(51, 39, i0.ɵɵpipeBind1(50, 37, ctx.t().confirmPasswordLabel)));
            const loading_r3 = ctx.state.loading || false;
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(41, _c0, ctx.form.invalid || loading_r3))("disabled", ctx.form.invalid || loading_r3);
            i0.ɵɵadvance();
            i0.ɵɵconditional(loading_r3 ? 56 : 57);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, VCLButtonModule, i2.VCLButtonComponent, VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i2.FormControlGroupComponent, i2.VCLLabelDirective, i2.FormDirective, i2.EmbeddedInputFieldLabelDirective, VCLFormControlGroupModule,
            VCLPasswordInputModule, i2.VCLPasswordInputComponent, RouterModule,
            RsAuthLayoutComponent,
            NgClass,
            RcTranslatePipe,
            AsyncPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcSignUpComponent, [{
        type: Component,
        args: [{ selector: 'rc-sign-up', imports: [
                    ReactiveFormsModule,
                    VCLButtonModule,
                    VCLInputModule,
                    VCLFormControlGroupModule,
                    VCLPasswordInputModule,
                    RouterModule,
                    RsAuthLayoutComponent,
                    RcTranslatePipe,
                    AsyncPipe,
                    NgClass,
                ], template: "<rc-auth-layout>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (config.branding.logoUrl) {\n    <img\n      [width]=\"config.branding.logoSize || 100\"\n      [src]=\"config.branding.logoUrl\"\n      [alt]=\"config.branding.logoAlt\"\n    />\n    }\n    <h3 class=\"p-2\">{{ config.branding.appName }}</h3>\n  </div>\n\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>{{ t().title | rcTranslate | async }}</span>\n  </div>\n\n  <hr />\n\n  <!-- Sign-Up Form -->\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n  >\n    <!-- First Name -->\n    <vcl-form-control-group>\n      <vcl-label>{{ t().firstNameLabel | rcTranslate | async }}</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"firstName\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <!-- Last Name -->\n    <vcl-form-control-group>\n      <vcl-label>{{ t().lastNameLabel | rcTranslate | async }}</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"lastName\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <!-- Email -->\n    <vcl-form-control-group>\n      <vcl-label>{{ t().emailLabel | rcTranslate | async }}</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"email\"\n          type=\"email\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <!-- Username -->\n    <vcl-form-control-group>\n      <vcl-label>{{ t().usernameLabel | rcTranslate | async }}</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"username\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <!-- Password -->\n    <vcl-form-control-group>\n      <vcl-label>{{ t().passwordLabel | rcTranslate | async }}</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n          type=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <!-- Confirm Password -->\n    <vcl-form-control-group>\n      <vcl-label>{{\n        t().confirmPasswordLabel | rcTranslate | async\n      }}</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"confirmPassword\"\n          type=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <!-- Submit Button -->\n    <div class=\"row\">\n      @let loading = state.loading || false;\n\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p emphasized\"\n        [ngClass]=\"{ disabled: form.invalid || loading }\"\n        [disabled]=\"form.invalid || loading\"\n      >\n        @if (loading) {\n        {{ t().loading | rcTranslate | async }}\n        } @else {\n        {{ t().submit | rcTranslate | async }}\n        }\n      </button>\n    </div>\n  </form>\n</rc-auth-layout>\n" }]
    }], null, { config: [{
            type: Input,
            args: [{ required: true }]
        }], state: [{
            type: Input,
            args: [{ required: true }]
        }], action: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcSignUpComponent, { className: "RcSignUpComponent", filePath: "lib/auth/pages/sign-up/sign-up.component.ts", lineNumber: 50 }); })();
//# sourceMappingURL=sign-up.component.js.map