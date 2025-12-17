import { InjectionToken } from '@angular/core';
import { of } from 'rxjs';
export const RS_TRANSLATE = new InjectionToken('RS_TRANSLATE', {
    providedIn: 'root',
    factory: () => (value) => of(typeof value === 'string' ? value : value.fallback ?? value.key),
});
//# sourceMappingURL=i18n.tokens.js.map