import { ElementRef } from '@angular/core';
import { AbstractControl, AsyncValidator, ControlValueAccessor, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RcUsernameFieldComponent implements ControlValueAccessor, AsyncValidator {
    input: ElementRef<HTMLInputElement>;
    asyncValidator?: (control: AbstractControl) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
    label: string;
    minLength: number;
    maxLength: number;
    required: boolean;
    value: string;
    disabled: boolean;
    private onChange;
    private onTouched;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    onInput(value: string): void;
    onBlur(): void;
    validate(control: AbstractControl): Promise<ValidationErrors | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcUsernameFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcUsernameFieldComponent, "rc-username-field", never, { "asyncValidator": { "alias": "asyncValidator"; "required": false; }; "label": { "alias": "label"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, true, never>;
}
