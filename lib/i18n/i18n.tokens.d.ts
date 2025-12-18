import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from '../shared';
export type RsTranslateFn = (value: RcTranslatable) => Observable<string>;
export declare const RS_TRANSLATE: InjectionToken<RsTranslateFn>;
