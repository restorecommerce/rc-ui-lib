import { zxcvbnAsync, zxcvbnOptions, } from '@zxcvbn-ts/core';
import * as zxcvbnCommon from '@zxcvbn-ts/language-common';
import * as zxcvbnDe from '@zxcvbn-ts/language-de';
import * as zxcvbnEn from '@zxcvbn-ts/language-en';
import { matcherPwnedFactory } from '@zxcvbn-ts/matcher-pwned';
let initialized = false;
export function initPasswordMatcherFrontend(opts) {
    if (initialized)
        return;
    const { minLength, userInputs = [], translations = zxcvbnEn.translations, } = opts;
    // --- Custom matchers (parity with backend) ---
    const minLengthMatcher = {
        Matching: class MatchMinLength {
            match({ password }) {
                const matches = [];
                if (password.length < minLength) {
                    matches.push({
                        pattern: 'minLength',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback(_match) {
            return {
                warning: 'Your password is not long enough',
                suggestions: [],
            };
        },
        scoring(match) {
            // mirrors backend: length * 10 (bigger => considered stronger)
            return match.token.length * 10;
        },
    };
    const numberMatcher = {
        Matching: class MatchNumber {
            match({ password }) {
                const matches = [];
                if (!/[0-9]/.test(password)) {
                    matches.push({
                        pattern: 'number',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one number',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const uppercaseMatcher = {
        Matching: class MatchUppercase {
            match({ password }) {
                const matches = [];
                if (!/[A-Z]/.test(password)) {
                    matches.push({
                        pattern: 'uppercase',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one uppercase letter',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const lowercaseMatcher = {
        Matching: class MatchLowercase {
            match({ password }) {
                const matches = [];
                if (!/[a-z]/.test(password)) {
                    matches.push({
                        pattern: 'lowercase',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one lowercase letter',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    const specialCharMatcher = {
        Matching: class MatchSpecialChar {
            match({ password }) {
                const matches = [];
                if (!/[!@#$%^&*]/.test(password)) {
                    matches.push({
                        pattern: 'specialChar',
                        token: password,
                        i: 0,
                        j: Math.max(0, password.length - 1),
                    });
                }
                return matches;
            }
        },
        feedback() {
            return {
                warning: 'Your password must contain at least one special character (!@#$%^&*)',
                suggestions: [],
            };
        },
        scoring() {
            return 10;
        },
    };
    // --- Register matchers (including pwned) ---
    // pwned uses window.fetch in browsers
    zxcvbnOptions.addMatcher('pwned', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    matcherPwnedFactory(fetch, zxcvbnOptions));
    zxcvbnOptions.addMatcher('minLength', minLengthMatcher);
    zxcvbnOptions.addMatcher('number', numberMatcher);
    zxcvbnOptions.addMatcher('uppercase', uppercaseMatcher);
    zxcvbnOptions.addMatcher('lowercase', lowercaseMatcher);
    zxcvbnOptions.addMatcher('specialChar', specialCharMatcher);
    // --- Core options (dicts/graphs) ---
    zxcvbnOptions.setOptions({
        dictionary: {
            ...zxcvbnCommon.dictionary,
            ...zxcvbnEn.dictionary,
            ...zxcvbnDe.dictionary,
            userInputs,
        },
        graphs: zxcvbnCommon.adjacencyGraphs,
        useLevenshteinDistance: true,
        translations,
    });
    initialized = true;
}
// Call this during app bootstrap (once)
export function initPasswordStrengthDefaults() {
    initPasswordMatcherFrontend({
        minLength: 10, // <- mirror your backend cfg.get('service:passwordMinLength')
        userInputs: [], // add username/email/brand to penalize if desired
        translations: zxcvbnEn.translations,
    });
}
// Convenience checker (use anywhere in UI)
export async function checkPasswordStrength(password) {
    if (!initialized)
        initPasswordStrengthDefaults();
    return zxcvbnAsync(password);
}
//# sourceMappingURL=password-strength.js.map