import { EventEmitter } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthBrandingConfig } from '../../auth.config';
import * as i0 from "@angular/core";
export interface SignInCredentials {
    identifier: string;
    password: string;
    remember: boolean;
}
export declare class RcSignInComponent {
    appName?: string;
    logoUrl?: string;
    logoAlt?: string;
    tagline?: string;
    signIn: EventEmitter<SignInCredentials>;
    fb: FormBuilder;
    readonly config: AuthBrandingConfig | null;
    form: import("@angular/forms").FormGroup<{
        identifier: FormControl<string | null>;
        password: FormControl<string | null>;
        remember: FormControl<boolean | null>;
    }>;
    get formFields(): {
        identifier: FormControl;
        password: FormControl;
        remember: FormControl;
    };
    get branding(): AuthBrandingConfig;
    asRouteLink(route: string | any[]): any[];
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcSignInComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcSignInComponent, "rc-sign-in", never, { "appName": { "alias": "appName"; "required": false; }; "logoUrl": { "alias": "logoUrl"; "required": false; }; "logoAlt": { "alias": "logoAlt"; "required": false; }; "tagline": { "alias": "tagline"; "required": false; }; }, { "signIn": "signIn"; }, never, never, true, never>;
}
