import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLCheckboxModule, VCLInputModule, VCLFormControlGroupModule, VCLPasswordInputModule, VCLButtonModule, } from '@vcl/ng-vcl';
import { AUTH_BRANDING_CONFIG } from '../../auth.config';
import { RsAuthLayoutComponent } from '../../layouts';
import { RsTranslatePipe } from '../../../i18n';
import { AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@vcl/ng-vcl";
import * as i3 from "@angular/router";
const _c0 = () => ({ key: "auth.signIn.title", fallback: "Sign in" });
const _c1 = () => ({ key: "auth.signIn.identifierLabel", fallback: "Email or Username" });
const _c2 = () => ({ key: "auth.signIn.passwordLabel", fallback: "Password" });
const _c3 = () => ({ key: "auth.signIn.remember7Days", fallback: "Stay signed in for 7 days" });
const _c4 = () => ({ key: "auth.signIn.submit", fallback: "Sign in" });
const _c5 = () => ({ key: "auth.signIn.forgotPassword", fallback: "Forgot Password?" });
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
        identifier: ['', [Validators.required]],
        password: ['', [Validators.required]],
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
            forgotPasswordRoute: 'password-recovery',
        };
        const base = this.config ?? fallback;
        return {
            appName: this.appName ?? base.appName,
            logoUrl: this.logoUrl ?? base.logoUrl,
            logoAlt: this.logoAlt ?? base.logoAlt ?? base.appName,
            tagline: this.tagline ?? base.tagline,
            forgotPasswordRoute: base?.forgotPasswordRoute,
        };
    }
    asRouteLink(route) {
        return Array.isArray(route) ? route : [route];
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcSignInComponent, selectors: [["rc-sign-in"]], inputs: { appName: "appName", logoUrl: "logoUrl", logoAlt: "logoAlt", tagline: "tagline" }, outputs: { signIn: "signIn" }, decls: 41, vars: 40, consts: [[1, "w-100p", "col", "justify-center", "align-items-center", "mt-3", "mb-2"], [1, "p-2"], [1, "mt-1", "row", "justify-center", "align-item-center"], ["vclForm", "", 1, "form", 3, "ngSubmit", "formGroup"], ["vclInput", "", "formControlName", "identifier"], ["vclInput", "", "formControlName", "password"], ["formControlName", "remember"], [1, "row"], ["vcl-button", "", "type", "submit", 1, "w-100p", 3, "disabled"], [1, "mt-3"], ["routerLink", "asRouteLink(branding.forgotPasswordRoute)"], ["width", "100", 3, "src", "alt"]], template: function RcSignInComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rc-auth-layout")(1, "div", 0);
            i0.ɵɵconditionalCreate(2, RcSignInComponent_Conditional_2_Template, 2, 2, "span");
            i0.ɵɵelementStart(3, "h3", 1);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 2)(6, "span");
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "rsTranslate");
            i0.ɵɵpipe(9, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(10, "hr");
            i0.ɵɵelementStart(11, "form", 3);
            i0.ɵɵlistener("ngSubmit", function RcSignInComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(12, "vcl-form-control-group")(13, "vcl-label");
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "rsTranslate");
            i0.ɵɵpipe(16, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "vcl-input-field");
            i0.ɵɵelement(18, "input", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "vcl-form-control-group")(20, "vcl-label");
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "rsTranslate");
            i0.ɵɵpipe(23, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "vcl-password-input");
            i0.ɵɵelement(25, "input", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "vcl-form-control-group")(27, "vcl-checkbox", 6);
            i0.ɵɵtext(28);
            i0.ɵɵpipe(29, "rsTranslate");
            i0.ɵɵpipe(30, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "div", 7)(32, "button", 8);
            i0.ɵɵtext(33);
            i0.ɵɵpipe(34, "rsTranslate");
            i0.ɵɵpipe(35, "async");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "p", 9)(37, "a", 10);
            i0.ɵɵtext(38);
            i0.ɵɵpipe(39, "rsTranslate");
            i0.ɵɵpipe(40, "async");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.branding.logoUrl ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.branding.appName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 12, i0.ɵɵpipeBind1(8, 10, i0.ɵɵpureFunction0(34, _c0))));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 16, i0.ɵɵpipeBind1(15, 14, i0.ɵɵpureFunction0(35, _c1))));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 20, i0.ɵɵpipeBind1(22, 18, i0.ɵɵpureFunction0(36, _c2))), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(30, 24, i0.ɵɵpipeBind1(29, 22, i0.ɵɵpureFunction0(37, _c3))), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", ctx.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(35, 28, i0.ɵɵpipeBind1(34, 26, i0.ɵɵpureFunction0(38, _c4))), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(40, 32, i0.ɵɵpipeBind1(39, 30, i0.ɵɵpureFunction0(39, _c5))), " ");
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, VCLCheckboxModule, i2.VCLCheckboxComponent, VCLButtonModule, i2.VCLButtonComponent, VCLInputModule, i2.InputDirective, i2.InputFieldComponent, i2.FormControlGroupComponent, i2.VCLLabelDirective, i2.FormDirective, i2.EmbeddedInputFieldLabelDirective, VCLFormControlGroupModule,
            VCLPasswordInputModule, i2.VCLPasswordInputComponent, RouterModule, i3.RouterLink, RsAuthLayoutComponent,
            RsTranslatePipe,
            AsyncPipe], encapsulation: 2, changeDetection: 0 });
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
                    RsTranslatePipe,
                    AsyncPipe,
                ], template: "<rc-auth-layout>\n  <div class=\"w-100p col justify-center align-items-center mt-3 mb-2\">\n    @if (branding.logoUrl) {\n    <span>\n      <img\n        width=\"100\"\n        [src]=\"branding.logoUrl\"\n        [alt]=\"branding.logoAlt\"\n      />\n    </span>\n    }\n    <h3 class=\"p-2\">{{ branding.appName }}</h3>\n  </div>\n  <div class=\"mt-1 row justify-center align-item-center\">\n    <span>{{\n      { key: 'auth.signIn.title', fallback: 'Sign in' } | rsTranslate | async\n    }}</span>\n  </div>\n  <hr />\n  <form\n    vclForm\n    class=\"form\"\n    [formGroup]=\"form\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <vcl-form-control-group>\n      <vcl-label>{{\n        { key: 'auth.signIn.identifierLabel', fallback: 'Email or Username' }\n          | rsTranslate\n          | async\n      }}</vcl-label>\n      <vcl-input-field>\n        <input\n          vclInput\n          formControlName=\"identifier\"\n        />\n      </vcl-input-field>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-label>\n        {{\n          { key: 'auth.signIn.passwordLabel', fallback: 'Password' }\n            | rsTranslate\n            | async\n        }}\n      </vcl-label>\n      <vcl-password-input>\n        <input\n          vclInput\n          formControlName=\"password\"\n        />\n      </vcl-password-input>\n    </vcl-form-control-group>\n\n    <vcl-form-control-group>\n      <vcl-checkbox formControlName=\"remember\">\n        {{\n          {\n            key: 'auth.signIn.remember7Days',\n            fallback: 'Stay signed in for 7 days'\n          }\n            | rsTranslate\n            | async\n        }}\n      </vcl-checkbox>\n    </vcl-form-control-group>\n\n    <div class=\"row\">\n      <button\n        [disabled]=\"form.invalid\"\n        vcl-button\n        type=\"submit\"\n        class=\"w-100p\"\n      >\n        {{\n          {\n            key: 'auth.signIn.submit',\n            fallback: 'Sign in'\n          }\n            | rsTranslate\n            | async\n        }}\n      </button>\n    </div>\n\n    <p class=\"mt-3\">\n      <a routerLink=\"asRouteLink(branding.forgotPasswordRoute)\">\n        {{\n          {\n            key: 'auth.signIn.forgotPassword',\n            fallback: 'Forgot Password?'\n          }\n            | rsTranslate\n            | async\n        }}\n      </a>\n    </p>\n  </form>\n</rc-auth-layout>\n" }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcSignInComponent, { className: "RcSignInComponent", filePath: "lib/auth/pages/sign-in/sign-in.component.ts", lineNumber: 53 }); })();
//# sourceMappingURL=sign-in.component.js.map