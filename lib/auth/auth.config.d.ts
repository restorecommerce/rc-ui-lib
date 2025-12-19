import { EnvironmentProviders, InjectionToken } from '@angular/core';
export type RcAuthForgotPasswordTarget = {
    kind: 'route';
    route: string | string[];
} | {
    kind: 'url';
    url: string;
};
export interface AuthBrandingConfig {
    appName: string;
    logoUrl: string;
    logoAlt?: string;
    tagline?: string;
    forgotPasswordRoute?: string | any[];
}
export declare const AUTH_BRANDING_CONFIG: InjectionToken<AuthBrandingConfig>;
/**
 * Host apps use this in their providers:
 *
 *   provideAuthBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
export declare function provideAuthBranding(config: AuthBrandingConfig): EnvironmentProviders;
