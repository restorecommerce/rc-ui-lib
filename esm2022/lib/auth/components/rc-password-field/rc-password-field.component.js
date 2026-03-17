import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_ASYNC_VALIDATORS, } from '@angular/forms';
import { firstValueFrom, isObservable } from 'rxjs';
import { VCLFormControlGroupModule, VCLInputModule, VCLPasswordInputModule, } from '@vcl/ng-vcl';
import { RcTranslatePipe } from '../../../i18n';
import { zxcvbnMinScoreValidator } from '../../validators';
import * as i0 from "@angular/core";
import * as i1 from "@vcl/ng-vcl";
const _c0 = () => [];
function RcPasswordFieldComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Password must have at least ", ctx_r0.minLength, " characters ");
} }
function RcPasswordFieldComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Strength: ", ctx_r0.zxcvbnErr.score, "/4 (min ", ctx_r0.minScore, ") ");
} }
function RcPasswordFieldComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.zxcvbnErr == null ? null : ctx_r0.zxcvbnErr.feedback == null ? null : ctx_r0.zxcvbnErr.feedback.warning, " ");
} }
function RcPasswordFieldComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r2);
} }
export class RcPasswordFieldComponent {
    minLength = 12;
    minScore = 3;
    label = 'Password';
    value = '';
    disabled = false;
    zxcvbnErr = null;
    onChange = () => {
        // onchange
    };
    onTouched = () => {
        // onTouch
    };
    asyncValidator = zxcvbnMinScoreValidator(this.minScore);
    // ---- ControlValueAccessor ----
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    onInput(value) {
        this.value = value;
        this.onChange(value);
    }
    onBlur() {
        this.onTouched();
    }
    // ---- AsyncValidator ----
    async validate(control) {
        const minLengthError = control.value?.length < this.minLength ? { minlength: true } : null;
        if (minLengthError)
            return minLengthError;
        const validatorResult = this.asyncValidator(control);
        const result = isObservable(validatorResult)
            ? await firstValueFrom(validatorResult)
            : await validatorResult;
        this.zxcvbnErr = result?.['zxcvbnMinScore'] ?? null;
        return result;
    }
    static ɵfac = function RcPasswordFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcPasswordFieldComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcPasswordFieldComponent, selectors: [["rc-password-field"]], inputs: { minLength: "minLength", minScore: "minScore", label: "label" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => RcPasswordFieldComponent),
                    multi: true,
                },
                {
                    provide: NG_ASYNC_VALIDATORS,
                    useExisting: forwardRef(() => RcPasswordFieldComponent),
                    multi: true,
                },
            ])], decls: 12, vars: 11, consts: [["vclInput", "", 3, "input", "blur", "value", "disabled"], [1, "form-control-hint", "error"], [1, "form-control-hint"], [1, "form-control-hint", "warning"], [1, "form-control-hint", "info"]], template: function RcPasswordFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "vcl-form-control-group")(1, "vcl-label");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "rcTranslate");
            i0.ɵɵpipe(4, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "vcl-password-input")(6, "input", 0);
            i0.ɵɵlistener("input", function RcPasswordFieldComponent_Template_input_input_6_listener($event) { return ctx.onInput($event.target.value); })("blur", function RcPasswordFieldComponent_Template_input_blur_6_listener() { return ctx.onBlur(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, RcPasswordFieldComponent_Conditional_7_Template, 2, 1, "span", 1);
            i0.ɵɵconditionalCreate(8, RcPasswordFieldComponent_Conditional_8_Template, 2, 2, "span", 2);
            i0.ɵɵconditionalCreate(9, RcPasswordFieldComponent_Conditional_9_Template, 2, 1, "span", 3);
            i0.ɵɵrepeaterCreate(10, RcPasswordFieldComponent_For_11_Template, 2, 1, "span", 4, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 8, i0.ɵɵpipeBind1(3, 6, ctx.label)));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.value)("disabled", ctx.disabled);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.value.length < ctx.minLength && ctx.value.length > 0 ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.zxcvbnErr ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.zxcvbnErr == null ? null : ctx.zxcvbnErr.feedback == null ? null : ctx.zxcvbnErr.feedback.warning) ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater((ctx.zxcvbnErr == null ? null : ctx.zxcvbnErr.feedback == null ? null : ctx.zxcvbnErr.feedback.suggestions) ?? i0.ɵɵpureFunction0(10, _c0));
        } }, dependencies: [VCLFormControlGroupModule, i1.FormControlGroupComponent, i1.VCLLabelDirective, VCLPasswordInputModule, i1.VCLPasswordInputComponent, VCLInputModule, i1.InputDirective, i1.EmbeddedInputFieldLabelDirective, RcTranslatePipe,
            AsyncPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcPasswordFieldComponent, [{
        type: Component,
        args: [{ selector: 'rc-password-field', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    VCLFormControlGroupModule,
                    VCLPasswordInputModule,
                    VCLInputModule,
                    RcTranslatePipe,
                    AsyncPipe,
                ], providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RcPasswordFieldComponent),
                        multi: true,
                    },
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: forwardRef(() => RcPasswordFieldComponent),
                        multi: true,
                    },
                ], template: "<vcl-form-control-group>\n  <vcl-label>{{ label | rcTranslate | async }}</vcl-label>\n\n  <vcl-password-input>\n    <input\n      vclInput\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n      (blur)=\"onBlur()\"\n    />\n  </vcl-password-input>\n\n  @if (value.length < minLength && value.length > 0) {\n    <span class=\"form-control-hint error\">\n      Password must have at least {{ minLength }} characters\n    </span>\n  }\n\n  @if (zxcvbnErr) {\n    <span class=\"form-control-hint\">\n      Strength: {{ zxcvbnErr.score }}/4 (min {{ minScore }})\n    </span>\n  }\n\n  @if (zxcvbnErr?.feedback?.warning) {\n    <span class=\"form-control-hint warning\">\n      {{ zxcvbnErr?.feedback?.warning }}\n    </span>\n  }\n\n  @for (s of zxcvbnErr?.feedback?.suggestions ?? []; track $index) {\n    <span class=\"form-control-hint info\">{{ s }}</span>\n  }\n</vcl-form-control-group>\n" }]
    }], null, { minLength: [{
            type: Input
        }], minScore: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcPasswordFieldComponent, { className: "RcPasswordFieldComponent", filePath: "lib/auth/components/rc-password-field/rc-password-field.component.ts", lineNumber: 53 }); })();
//# sourceMappingURL=rc-password-field.component.js.map