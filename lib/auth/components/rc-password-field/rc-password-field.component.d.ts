import { ControlValueAccessor, AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { ZxcvbnMinScoreError } from '../../validators';
import * as i0 from "@angular/core";
export declare class RcPasswordFieldComponent implements ControlValueAccessor, AsyncValidator {
    minLength: number;
    minScore: number;
    label: string;
    value: string;
    disabled: boolean;
    zxcvbnErr: ZxcvbnMinScoreError | null;
    private onChange;
    private onTouched;
    private asyncValidator;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    onInput(value: string): void;
    onBlur(): void;
    validate(control: AbstractControl): Promise<ValidationErrors | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcPasswordFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcPasswordFieldComponent, "rc-password-field", never, { "minLength": { "alias": "minLength"; "required": false; }; "minScore": { "alias": "minScore"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, {}, never, never, true, never>;
}
