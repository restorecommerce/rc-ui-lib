import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from '../shared';
import * as i0 from "@angular/core";
export declare class RsTranslatePipe implements PipeTransform {
    private readonly t;
    transform(value: RcTranslatable): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RsTranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<RsTranslatePipe, "rsTranslate", true>;
}
