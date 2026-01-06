import { InjectionToken } from '@angular/core';
import { of } from 'rxjs';
export const RC_TRANSLATE = new InjectionToken('RC_TRANSLATE', {
    providedIn: 'root',
    factory: () => (value) => of(typeof value === 'string' ? value : value.fallback ?? value.key),
});
//# sourceMappingURL=i18n.tokens.js.map