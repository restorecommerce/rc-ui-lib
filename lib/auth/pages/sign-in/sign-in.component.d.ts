import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RcAuthLayoutConfig } from '../../auth.config';
import { RcSignInTranslations } from './sign-in.i18n';
import { RcSignInAction, RcSignInState } from './sign-in.models';
import * as i0 from "@angular/core";
export declare class RcSignInComponent {
    config: RcAuthLayoutConfig;
    state: RcSignInState;
    action: EventEmitter<RcSignInAction>;
    readonly form: FormGroup<{
        identifier: FormControl<string>;
        password: FormControl<string>;
        remember: FormControl<boolean>;
    }>;
    readonly t: import("@angular/core").Signal<RcSignInTranslations>;
    submit(): void;
    forgotPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcSignInComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcSignInComponent, "rc-sign-in", never, { "config": { "alias": "config"; "required": true; }; "state": { "alias": "state"; "required": true; }; }, { "action": "action"; }, never, never, true, never>;
}
