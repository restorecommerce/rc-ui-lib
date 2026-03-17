import { checkPasswordStrength } from '../utils';
export function zxcvbnMinScoreValidator(minScore) {
    return async (control) => {
        const pw = control.value ?? '';
        if (!pw)
            return null;
        const result = await checkPasswordStrength(pw);
        return result.score < minScore
            ? {
                zxcvbnMinScore: {
                    score: result.score,
                    feedback: result.feedback, // show warning/suggestions in UI
                },
            }
            : null;
    };
}
//# sourceMappingURL=password.validator.js.map