import { inject, Injectable } from '@angular/core';
import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
export class RcNotifierService {
    notifier = inject(NotifierService);
    position = NotifierPosition.TopRight;
    info(title = '', content = '') {
        this.notifier.info({
            content,
            title,
            // icon: 'vcl:info',
            position: this.position,
        });
    }
    success(title = '', content = '') {
        this.notifier.success({
            content,
            title,
            position: this.position,
        });
    }
    warning(title = '', content = '') {
        this.notifier.warning({
            content,
            title,
            position: this.position,
        });
    }
    error(title = '', content = '') {
        this.notifier.error({
            content,
            title,
            position: this.position,
        });
    }
    static ɵfac = function RcNotifierService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcNotifierService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcNotifierService, factory: RcNotifierService.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcNotifierService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=notifier.service.js.map