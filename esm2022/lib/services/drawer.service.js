import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class RcDrawerService {
    openedEmitter = new BehaviorSubject(undefined);
    modeEmitter = new BehaviorSubject('side');
    opened$ = this.openedEmitter.asObservable();
    mode$ = this.modeEmitter.asObservable();
    get mode() {
        return this.modeEmitter.value;
    }
    get opened() {
        return this.openedEmitter.value;
    }
    set opened(opened) {
        this.openedEmitter.next(opened);
    }
    toggle(opened) {
        this.openedEmitter.next(typeof opened === 'boolean' ? opened : !this.openedEmitter.value);
    }
    setMode(mode) {
        this.modeEmitter.next(mode);
    }
    ngOnDestroy() {
        this.openedEmitter.complete();
    }
    static ɵfac = function RcDrawerService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcDrawerService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcDrawerService, factory: RcDrawerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcDrawerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=drawer.service.js.map