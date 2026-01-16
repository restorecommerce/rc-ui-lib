import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RcAuthLayoutConfig } from '../../auth.config';
import { RcSignUpTranslations } from './sign-up.i18n';
import { RcSignUpAction, RcSignUpState } from './sign-up.models';
import * as i0 from "@angular/core";
export declare class RcSignUpComponent {
    config: RcAuthLayoutConfig;
    state: RcSignUpState;
    action: EventEmitter<RcSignUpAction>;
    readonly form: FormGroup<{
        firstName: FormControl<string>;
        lastName: FormControl<string>;
        email: FormControl<string>;
        username: FormControl<string>;
        password: FormControl<string>;
        confirmPassword: FormControl<string>;
    }>;
    readonly t: import("@angular/core").Signal<RcSignUpTranslations>;
    submit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcSignUpComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcSignUpComponent, "rc-sign-up", never, { "config": { "alias": "config"; "required": true; }; "state": { "alias": "state"; "required": true; }; }, { "action": "action"; }, never, never, true, never>;
}
