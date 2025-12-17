import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RcTranslatable } from './shared';
export type TranslateFn = (value: RcTranslatable) => Observable<string>;
export declare const RS_TRANSLATE: InjectionToken<TranslateFn>;
