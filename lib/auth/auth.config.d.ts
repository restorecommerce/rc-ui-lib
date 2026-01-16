import { EnvironmentProviders, InjectionToken } from '@angular/core';
import { RcPasswordRecoveryTranslations, RcSignUpTranslations, RcSignInTranslations } from './pages';
export type RcAuthForgotPasswordTarget = {
    kind: 'route';
    route: string | string[];
} | {
    kind: 'url';
    url: string;
};
export interface RcAuthI18nConfig {
    signIn?: Partial<RcSignInTranslations>;
    signUp?: Partial<RcSignUpTranslations>;
    passwordRecovery?: Partial<RcPasswordRecoveryTranslations>;
}
export interface RcAuthLayoutConfig {
    branding: {
        appName: string;
        logoUrl: string;
        logoAlt?: string;
        tagline?: string;
        logoSize?: number;
    };
    i18n?: RcAuthI18nConfig;
}
export declare const AUTH_LAYOUT_CONFIG: InjectionToken<RcAuthLayoutConfig>;
/**
 * Host apps use this in their providers:
 *
 *   provideAuthBranding({
 *     appName: 'Console',
 *     logoUrl: '/assets/logo.svg',
 *   })
 */
export declare function provideAuthBranding(config: RcAuthLayoutConfig): EnvironmentProviders;
