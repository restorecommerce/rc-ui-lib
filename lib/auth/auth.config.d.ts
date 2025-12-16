import { EnvironmentProviders, InjectionToken } from '@angular/core';
export interface AuthBrandingConfig {
    appName: string;
    logoUrl: string;
    logoAlt?: string;
    tagline?: string;
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
