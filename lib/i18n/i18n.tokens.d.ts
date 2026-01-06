import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from '../shared';
export type RcTranslateFn = (value: RcTranslatable) => Observable<string>;
export declare const RC_TRANSLATE: InjectionToken<RcTranslateFn>;
