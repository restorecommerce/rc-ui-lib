import { AsyncValidatorFn } from '@angular/forms';
export type ZxcvbnMinScoreError = {
    score: number;
    feedback: {
        warning?: string;
        suggestions: string[];
    };
};
export declare function zxcvbnMinScoreValidator(minScore: number): AsyncValidatorFn;
