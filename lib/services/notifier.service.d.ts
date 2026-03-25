import { NotifierPosition, NotifierService } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
export declare class RcNotifierService {
    readonly notifier: NotifierService;
    readonly position = NotifierPosition.TopRight;
    info(title?: string, content?: string): void;
    success(title?: string, content?: string): void;
    warning(title?: string, content?: string): void;
    error(title?: string, content?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcNotifierService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RcNotifierService>;
}
