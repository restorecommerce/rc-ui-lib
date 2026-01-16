export interface RcPasswordRecoveryTranslations {
    title: string;
    identifierLabel: string;
    submit: string;
    loading: string;
    emailSentDescription: string;
    passwordLabel: string;
    confirmPasswordLabel: string;
    success: string;
    invalidToken: {
        expired: string;
        used: string;
        invalid: string;
    };
}
export declare const DEFAULT_PASSWORD_RECOVERY_TRANSLATIONS: RcPasswordRecoveryTranslations;
