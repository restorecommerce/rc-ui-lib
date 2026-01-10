import { Component, EventEmitter, Input, Output, computed, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DEFAULT_SIGN_IN_TRANSLATIONS, } from './sign-in.i18n';
import { VCLButtonModule, VCLCheckboxModule, VCLFormControlGroupModule, VCLInputModule, VCLPasswordInputModule, } from '@vcl/ng-vcl';
import { RouterModule } from '@angular/router';
import { RsAuthLayoutComponent } from '../../layouts';
import { RcTranslatePipe } from '../../../i18n';
import { AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
function RcSignInComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r1.config.branding.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r1.config.branding.logoAlt);
} }
function RcSignInComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "rcTranslate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, i0.ɵɵpipeBind1(2, 1, ctx_r1.state.error)), " ");
} }
function RcSignInComponent_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r1.t().loading)), " ");
} }
function RcSignInComponent_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "rcTranslate");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, i0.ɵɵpipeBind1(1, 1, ctx_r1.t().submit)), " ");
} }
export class RcSignInComponent {
    // config
    config;
    // workflow state
    state;
    // user intent
    action = new EventEmitter();
    form = new FormGroup({
        identifier: new FormControl('', { nonNullable: true }),
        password: new FormControl('', { nonNullable: true }),
        remember: new FormControl(false, { nonNullable: true }),
    });
    t = computed(() => ({
        ...DEFAULT_SIGN_IN_TRANSLATIONS,
        ...this.config.i18n?.signIn,
    }), ...(ngDevMode ? [{ debugName: "t" }] : []));
    submit() {
        if (this.form.invalid || this.state.loading)
            return;
        this.action.emit({
            type: 'submit',
            payload: this.form.getRawValue(),
        });
    }
    forgotPassword() {
        this.action.emit({ type: 'forgot-password' });
    }
    static ɵfac = function RcSignInComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcSignInComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcSignInComponent, selectors: [["rc-sign-in"]], inputs: { config: "config", state: "state" }, outputs: { action: "action" }, decls: 41, vars: 31, consts: [[1, "w-100p", "col", "justify-center", "align-items-center", "mt-3", "mb-2"], ["width", "100", 3, "src", "alt"], [1, "p-2"], [1, "mt-1", "row", "justify-center", "align-item-center"], [1, "mt-2"], ["vclForm", "", 1, "form", 3, "ngSubmit", "formGroup"], ["vclInput", "", "formControlName", "identifier"], ["vclInput", "", "formControlName", "password"], ["formControlName", "remember"], [1, "row"], ["vcl-button", "", "type", "submit", 1, "w-100p", 3, "disabled"], [1, "mt-3"], [3, "click"]], template: function RcSignInComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "rc-auth-layout")(1, "div", 0);
            i0.ɵɵconditionalCreate(2, RcSignInComponent_Conditional_2_Template, 1, 2, "img", 1);
            i0.ɵɵelementStart(3, "h3", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3)(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "rcTranslate");
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, RcSignInComponent_Conditional_10_Template, 4, 5, "div", 4);
            i0.ɵɵelement(11, "hr");
            i0.ɵɵelementStart(12, "form", 5);
            i0.ɵɵlistener("ngSubmit", function RcSignInComponent_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.submit()); });
            i0.ɵɵelementStart(13, "vcl-form-control-group")(14, "vcl-label");
            i0.ɵɵtext(15);
            i0.ɵɵpipe(16, "rcTranslate");
            i0.ɵɵpipe(17, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "vcl-input-field");
            i0.ɵɵelement(19, "input", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "vcl-form-control-group")(21, "vcl-label");
            i0.ɵɵtext(22);
            i0.ɵɵpipe(23, "rcTranslate");
            i0.ɵɵpipe(24, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "vcl-password-input");
            i0.ɵɵelement(26, "input", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "vcl-form-control-group")(28, "vcl-checkbox", 8);
            i0.ɵɵtext(29);
            i0.ɵɵpipe(30, "rcTranslate");
            i0.ɵɵpipe(31, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 9)(33, "button", 10);
            i0.ɵɵconditionalCreate(34, RcSignInComponent_Conditional_34_Template, 3, 5)(35, RcSignInComponent_Conditional_35_Template, 3, 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "p", 11)(37, "a", 12);
            i0.ɵɵlistener("click", function RcSignInComponent_Template_a_click_37_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.forgotPassword()); });
            i0.ɵɵtext(38);
            i0.ɵɵpipe(39, "rcTranslate");
            i0.ɵɵpipe(40, "async");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.config.branding.logoUrl ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.config.branding.appName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 13, i0.ɵɵpipeBind1(8, 11, ctx.t().title)));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.state.error ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 17, i0.ɵɵpipeBind1(16, 15, ctx.t().identifierLabel)), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 21, i0.ɵɵpipeBind1(23, 19, ctx.t().passwordLabel)), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(31, 25, i0.ɵɵpipeBind1(30, 23, ctx.t().remember)), " ");
            const loading_r3 = ctx.state.loading || false;
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.form.invalid || loading_r3);
            i0.ɵɵadvance();
            i0.ɵɵconditional(loading_r3 ? 34 : 35);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(40, 29, i0.ɵɵpipeBind1(39, 27, ctx.t().forgotPassword)), " ");
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, VCLCheckboxModule, i2.VCLCheckboxComponent, VCLButtonModule, i2.VCLButtonComponent, VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i2.FormControlGroupComponent, i2.VCLLabelDirective, i2.FormDirective, i2.EmbeddedInputFieldLabelDirective, VCLFormControlGroupModule,
            VCLPasswordInputModule, i2.VCLPasswordInputComponent, RouterModule,
            RsAuthLayoutComponent,
            RcTranslatePipe,
            AsyncPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcSignInComponent, [{
        type: Component,
        args: [{ selector: 'rc-sign-in', imports: [
                    ReactiveFormsModule,
                    VCLCheckboxModule,
                    VCLButtonModule,
                    VCLInputModule,
                    VCLFormControlGroupModule,
                    VCLPasswordInputModule,
                    RouterModule,
                    RsAuthLayoutComponent,
                    RcTranslatePipe,
                    AsyncPipe,
                ], template: "<rc-auth-layout>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (config.branding.logoUrl) {\n    <img\n      width=\"100\"\n      [src]=\"config.branding.logoUrl\"\n      [alt]=\"config.branding.logoAlt\"\n    />\n    }\n    <h3 class=\"p-2\">{{ config.branding.appName }}</h3>\n  </div>\n\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>{{ t().title | rcTranslate | async }}</span>\n  </div>\n\n  @if (state.error) {\n\n  <div class=\"mt-2\">\n    {{ state.error | rcTranslate | async }}\n  </div>\n  }\n\n  <hr />\n\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"submit()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>\n        {{ t().identifierLabel | rcTranslate | async }}\n      </vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>\n        {{ t().passwordLabel | rcTranslate | async }}\n      </vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-checkbox formControlName=\"remember\">\n        {{ t().remember | rcTranslate | async }}\n      </vcl-checkbox>\n    </vcl-form-control-group>\n\n    <div class=\"row\">\n      @let loading = state.loading || false;\n\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p\"\n        [disabled]=\"form.invalid || loading\"\n      >\n        @if (loading) {\n        {{ t().loading | rcTranslate | async }}\n        } @else {\n        {{ t().submit | rcTranslate | async }}\n        }\n      </button>\n    </div>\n\n    <p class=\"mt-3\">\n      <a (click)=\"forgotPassword()\">\n        {{ t().forgotPassword | rcTranslate | async }}\n      </a>\n    </p>\n  </form>\n</rc-auth-layout>\n" }]
    }], null, { config: [{
            type: Input,
            args: [{ required: true }]
        }], state: [{
            type: Input,
            args: [{ required: true }]
        }], action: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcSignInComponent, { className: "RcSignInComponent", filePath: "lib/auth/pages/sign-in/sign-in.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=sign-in.component.js.map