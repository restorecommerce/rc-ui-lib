import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export type TDrawerMode = 'side' | 'over';
export declare class RcDrawerService implements OnDestroy {
    private openedEmitter;
    private modeEmitter;
    opened$: import("rxjs").Observable<boolean | undefined>;
    mode$: import("rxjs").Observable<string>;
    get mode(): string;
    get opened(): boolean | undefined;
    set opened(opened: boolean | undefined);
    toggle(opened?: boolean): void;
    setMode(mode: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcDrawerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RcDrawerService>;
}
