import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLCheckboxModule, VCLInputModule, VCLFormControlGroupModule, VCLPasswordInputModule, VCLButtonModule, } from '@vcl/ng-vcl';
import { AUTH_BRANDING_CONFIG } from '../../auth.config';
import { RsAuthLayoutComponent } from '../../layouts';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
import * as i3 from "@angular/router";
function RcSignInComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "img", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.branding.logoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r0.branding.logoAlt);
} }
export class RcSignInComponent {
    appName;
    logoUrl;
    logoAlt;
    tagline;
    signIn = new EventEmitter();
    fb = inject(FormBuilder);
    config = inject(AUTH_BRANDING_CONFIG, { optional: true });
    form = this.fb.group({
        identifier: ['', []],
        password: ['', []],
        remember: [false, []],
    });
    get formFields() {
        return {
            identifier: this.form.get('identifier'),
            password: this.form.get('password'),
            remember: this.form.get('remember'),
        };
    }
    get branding() {
        const fallback = {
            appName: 'My App',
            logoUrl: '',
            logoAlt: 'App logo',
            tagline: '',
        };
        const base = this.config ?? fallback;
        return {
            appName: this.appName ?? base.appName,
            logoUrl: this.logoUrl ?? base.logoUrl,
            logoAlt: this.logoAlt ?? base.logoAlt ?? base.appName,
            tagline: this.tagline ?? base.tagline,
        };
    }
    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = {
            identifier: this.form.value.identifier?.trim() ?? '',
            password: this.form.value.password ?? '',
            remember: this.form.value.remember || false,
        };
        this.signIn.emit(payload);
    }
    static ɵfac = function RcSignInComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcSignInComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcSignInComponent, selectors: [["rc-sign-in"]], inputs: { appName: "appName", logoUrl: "logoUrl", logoAlt: "logoAlt", tagline: "tagline" }, outputs: { signIn: "signIn" }, decls: 29, vars: 3, consts: [[1, "w-100p", "col", "justify-center", "align-items-center", "mt-3", "mb-2"], [1, "p-2"], [1, "mt-1", "row", "justify-center", "align-item-center"], ["vclForm", "", 1, "form", 3, "ngSubmit", "formGroup"], ["vclInput", "", "formControlName", "identifier"], ["vclInput", "", "formControlName", "password"], ["formControlName", "remember"], [1, "row"], ["vcl-button", "", "type", "submit", 1, "w-100p"], [1, "mt-3"], ["routerLink", "password-recovery"], ["width", "100", 3, "src", "alt"]], template: function RcSignInComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rc-auth-layout")(1, "div", 0);
            i0.ɵɵconditionalCreate(2, RcSignInComponent_Conditional_2_Template, 2, 2, "span");
            i0.ɵɵelementStart(3, "h3", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 2)(6, "span");
            i0.ɵɵtext(7, "Sign in");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "hr");
            i0.ɵɵelementStart(9, "form", 3);
            i0.ɵɵlistener("ngSubmit", function RcSignInComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(10, "vcl-form-control-group")(11, "vcl-label");
            i0.ɵɵtext(12, "Email or Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "vcl-input-field");
            i0.ɵɵelement(14, "input", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "vcl-form-control-group")(16, "vcl-label");
            i0.ɵɵtext(17, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "vcl-password-input");
            i0.ɵɵelement(19, "input", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "vcl-form-control-group")(21, "vcl-checkbox", 6);
            i0.ɵɵtext(22, "Stay signed in for 7 days");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 7)(24, "button", 8);
            i0.ɵɵtext(25, " Sign in ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "p", 9)(27, "a", 10);
            i0.ɵɵtext(28, "Forgot Password?");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.branding.logoUrl ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.branding.appName);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.form);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, VCLCheckboxModule, i2.VCLCheckboxComponent, VCLButtonModule, i2.VCLButtonComponent, VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i2.FormControlGroupComponent, i2.VCLLabelDirective, i2.FormDirective, i2.EmbeddedInputFieldLabelDirective, VCLFormControlGroupModule,
            VCLPasswordInputModule, i2.VCLPasswordInputComponent, RouterModule, i3.RouterLink, RsAuthLayoutComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcSignInComponent, [{
        type: Component,
        args: [{ selector: 'rc-sign-in', changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    ReactiveFormsModule,
                    VCLCheckboxModule,
                    VCLButtonModule,
                    VCLInputModule,
                    VCLFormControlGroupModule,
                    VCLPasswordInputModule,
                    RouterModule,
                    RsAuthLayoutComponent,
                ], template: "<rc-auth-layout>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (branding.logoUrl) {\n    <span>\n      <img\n        width=\"100\"\n        [src]=\"branding.logoUrl\"\n        [alt]=\"branding.logoAlt\"\n      />\n    </span>\n    }\n    <h3 class=\"p-2\">{{ branding.appName }}</h3>\n  </div>\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>Sign in</span>\n  </div>\n  <hr />\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>Email or Username</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>Password</vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-checkbox formControlName=\"remember\"\n        >Stay signed in for 7 days</vcl-checkbox\n      >\n    </vcl-form-control-group>\n\n    <div class=\"row\">\n      <button\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p\"\n      >\n        Sign in\n      </button>\n    </div>\n\n    <p class=\"mt-3\">\n      <a routerLink=\"password-recovery\">Forgot Password?</a>\n    </p>\n  </form>\n</rc-auth-layout>\n" }]
    }], null, { appName: [{
            type: Input
        }], logoUrl: [{
            type: Input
        }], logoAlt: [{
            type: Input
        }], tagline: [{
            type: Input
        }], signIn: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcSignInComponent, { className: "RcSignInComponent", filePath: "lib/auth/pages/sign-in/sign-in.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=sign-in.component.js.map