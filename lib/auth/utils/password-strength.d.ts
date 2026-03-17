import { type ZxcvbnResult } from '@zxcvbn-ts/core';
import * as zxcvbnEn from '@zxcvbn-ts/language-en';
export declare function initPasswordMatcherFrontend(opts: {
    minLength: number;
    userInputs?: string[];
    translations?: typeof zxcvbnEn.translations;
}): void;
export declare function initPasswordStrengthDefaults(): void;
export declare function checkPasswordStrength(password: string): Promise<ZxcvbnResult>;
