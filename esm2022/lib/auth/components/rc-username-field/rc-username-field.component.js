import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild, } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { firstValueFrom, isObservable } from 'rxjs';
import { VCLFormControlGroupModule, VCLInputModule } from '@vcl/ng-vcl';
import { RcTranslatePipe } from '../../../i18n';
import * as i0 from "@angular/core";
import * as i1 from "@vcl/ng-vcl";
const _c0 = ["input"];
export class RcUsernameFieldComponent {
    input;
    asyncValidator;
    label = 'Username';
    minLength = 8;
    maxLength = 40;
    required = true;
    value = '';
    disabled = false;
    onChange = () => {
        // onchange
    };
    onTouched = () => {
        // onTouch
    };
    // One possible validator would be to check if the username already exists.
    // Assuming the username-field is used in a registration mode...
    // Hence we could just pass additional validation..
    // private asyncValidator = zxcvbnMinScoreValidator(this.minScore);
    // ---- ControlValueAccessor ----
    writeValue(value) {
        // completely bypasses directive interference.
        if (this.input) {
            this.input.nativeElement.value = value ?? '';
        }
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
    async validate(control) {
        const value = control.value ?? '';
        if (this.required && !value) {
            return { required: true };
        }
        if (value && value.length < this.minLength) {
            return {
                minlength: {
                    requiredLength: this.minLength,
                    actualLength: value.length,
                },
            };
        }
        if (value && value.length > this.maxLength) {
            return {
                maxlength: {
                    requiredLength: this.maxLength,
                    actualLength: value.length,
                },
            };
        }
        if (!this.asyncValidator) {
            return null;
        }
        const validatorResult = this.asyncValidator(control);
        const result = isObservable(validatorResult)
            ? await firstValueFrom(validatorResult)
            : await validatorResult;
        return result;
    }
    static ɵfac = function RcUsernameFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcUsernameFieldComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcUsernameFieldComponent, selectors: [["rc-username-field"]], viewQuery: function RcUsernameFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        } }, inputs: { asyncValidator: "asyncValidator", label: "label", minLength: "minLength", maxLength: "maxLength", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => RcUsernameFieldComponent),
                    multi: true,
                },
                {
                    provide: NG_ASYNC_VALIDATORS,
                    useExisting: forwardRef(() => RcUsernameFieldComponent),
                    multi: true,
                },
            ])], decls: 14, vars: 7, consts: [["input", ""], ["vclInput", "", 3, "input", "blur", "value", "disabled"], ["error", "required"], ["error", "minlength"], ["error", "maxlength"]], template: function RcUsernameFieldComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "vcl-form-control-group")(1, "vcl-label");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "rcTranslate");
            i0.ɵɵpipe(4, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "vcl-input-field")(6, "input", 1, 0);
            i0.ɵɵlistener("input", function RcUsernameFieldComponent_Template_input_input_6_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onInput($event.target.value)); })("blur", function RcUsernameFieldComponent_Template_input_blur_6_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onBlur()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "vcl-hint-error", 2);
            i0.ɵɵtext(9, "This field is required.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "vcl-hint-error", 3);
            i0.ɵɵtext(11, "Username must have a length of atleast 8 characters");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "vcl-hint-error", 4);
            i0.ɵɵtext(13, "Username must have a length of atmost 40 characters.");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, i0.ɵɵpipeBind1(3, 3, ctx.label)));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.value)("disabled", ctx.disabled);
        } }, dependencies: [VCLFormControlGroupModule, i1.FormControlGroupComponent, i1.FormControlHintErrorComponent, i1.VCLLabelDirective, VCLInputModule, i1.InputDirective, i1.InputFieldComponent, i1.EmbeddedInputFieldLabelDirective, RcTranslatePipe,
            AsyncPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcUsernameFieldComponent, [{
        type: Component,
        args: [{ selector: 'rc-username-field', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
                    VCLFormControlGroupModule,
                    VCLInputModule,
                    RcTranslatePipe,
                    AsyncPipe,
                ], providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RcUsernameFieldComponent),
                        multi: true,
                    },
                    {
                        provide: NG_ASYNC_VALIDATORS,
                        useExisting: forwardRef(() => RcUsernameFieldComponent),
                        multi: true,
                    },
                ], template: "<vcl-form-control-group>\n  <vcl-label>{{ label | rcTranslate | async }}</vcl-label>\n\n  <vcl-input-field>\n    <input\n      #input\n      vclInput\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onInput($any($event.target).value)\"\n      (blur)=\"onBlur()\"\n    />\n  </vcl-input-field>\n  <vcl-hint-error error=\"required\">This field is required.</vcl-hint-error>\n  <vcl-hint-error error=\"minlength\"\n    >Username must have a length of atleast 8 characters</vcl-hint-error\n  >\n  <vcl-hint-error error=\"maxlength\"\n    >Username must have a length of atmost 40 characters.</vcl-hint-error\n  >\n</vcl-form-control-group>\n" }]
    }], null, { input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }], asyncValidator: [{
            type: Input
        }], label: [{
            type: Input
        }], minLength: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcUsernameFieldComponent, { className: "RcUsernameFieldComponent", filePath: "lib/auth/components/rc-username-field/rc-username-field.component.ts", lineNumber: 48 }); })();
//# sourceMappingURL=rc-username-field.component.js.map