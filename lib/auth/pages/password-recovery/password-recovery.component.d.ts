import { EventEmitter } from '@angular/core';
import { RcAuthLayoutConfig } from '../../auth.config';
import { RcPasswordRecoveryTranslations } from './password-recovery.i18n';
import { RcPasswordRecoveryState } from './password-recovery.models';
import * as i0 from "@angular/core";
export declare class RcPasswordRecoveryComponent {
    config: RcAuthLayoutConfig;
    state: RcPasswordRecoveryState;
    requestReset: EventEmitter<{
        identifier: string;
    }>;
    submitNewPassword: EventEmitter<{
        password: string;
    }>;
    readonly t: import("@angular/core").Signal<RcPasswordRecoveryTranslations>;
    private readonly fb;
    readonly identifierForm: import("@angular/forms").FormGroup<{
        identifier: import("@angular/forms").FormControl<string>;
    }>;
    readonly passwordForm: import("@angular/forms").FormGroup<{
        password: import("@angular/forms").FormControl<string>;
        confirmPassword: import("@angular/forms").FormControl<string>;
    }>;
    submitIdentifier(): void;
    submitPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcPasswordRecoveryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcPasswordRecoveryComponent, "rc-password-recovery", never, { "config": { "alias": "config"; "required": true; }; "state": { "alias": "state"; "required": true; }; }, { "requestReset": "requestReset"; "submitNewPassword": "submitNewPassword"; }, never, never, true, never>;
}
