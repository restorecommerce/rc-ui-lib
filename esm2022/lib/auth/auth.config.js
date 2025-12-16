import { InjectionToken, makeEnvironmentProviders, } from '@angular/core';
export const AUTH_BRANDING_CONFIG = new InjectionToken('AUTH_BRANDING_CONFIG');
/**
 * Host apps use this in their providers:
 *
 *   provideAuthBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
export function provideAuthBranding(config) {
    return makeEnvironmentProviders([
        {
            provide: AUTH_BRANDING_CONFIG,
            useValue: config,
        },
    ]);
}
//# sourceMappingURL=auth.config.js.map