import { Pipe, inject } from '@angular/core';
import { RS_TRANSLATE } from './i18n.tokens';
import * as i0 from "@angular/core";
export class RsTranslatePipe {
    t = inject(RS_TRANSLATE);
    transform(value) {
        return this.t(value);
    }
    static ɵfac = function RsTranslatePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RsTranslatePipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "rsTranslate", type: RsTranslatePipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RsTranslatePipe, [{
        type: Pipe,
        args: [{
                name: 'rsTranslate',
            }]
    }], null, null); })();
//# sourceMappingURL=rs-translate.pipe.js.map