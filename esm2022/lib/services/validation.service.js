import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RcValidationService {
    validatePasswordMatch(control) {
        const password = control.get('password');
        const passwordConfirmation = control.get('passwordConfirmation');
        if (password?.value !== passwordConfirmation?.value) {
            return { passwordConfirmationMismatch: true };
        }
        return null;
    }
    static ɵfac = function RcValidationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcValidationService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcValidationService, factory: RcValidationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcValidationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=validation.service.js.map