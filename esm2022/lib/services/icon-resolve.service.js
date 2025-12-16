import { Injectable } from '@angular/core';
import { IconAliasResolverServiceBase } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
export const MDI_ALIAS_MAP = {
    search: 'mdi mdi-magnify',
    menu: 'mdi mdi-menu mdi-36px',
};
export const FA_ALIAS_MAP = {
    search: 'fa fa-search',
    menu: 'fa fa-menu fa-36px',
};
export class RcMdiIconResolverService extends IconAliasResolverServiceBase {
    constructor() {
        super('rc', MDI_ALIAS_MAP);
    }
    static ɵfac = function RcMdiIconResolverService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcMdiIconResolverService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcMdiIconResolverService, factory: RcMdiIconResolverService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcMdiIconResolverService, [{
        type: Injectable
    }], () => [], null); })();
export class RcFaIconResolverService extends IconAliasResolverServiceBase {
    constructor() {
        super('rc', FA_ALIAS_MAP);
    }
    static ɵfac = function RcFaIconResolverService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcFaIconResolverService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcFaIconResolverService, factory: RcFaIconResolverService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcFaIconResolverService, [{
        type: Injectable
    }], () => [], null); })();
//# sourceMappingURL=icon-resolve.service.js.map