import { Pipe, inject } from '@angular/core';
import { RC_TRANSLATE } from './i18n.tokens';
import * as i0 from "@angular/core";
export class RcTranslatePipe {
    t = inject(RC_TRANSLATE);
    transform(value) {
        return this.t(value);
    }
    static ɵfac = function RcTranslatePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcTranslatePipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "rcTranslate", type: RcTranslatePipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcTranslatePipe, [{
        type: Pipe,
        args: [{
                name: 'rcTranslate',
            }]
    }], null, null); })();
//# sourceMappingURL=rc-translate.pipe.js.map