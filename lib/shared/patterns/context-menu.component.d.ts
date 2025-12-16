import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface RcContextMenuItem {
    value: string;
    label: string;
    disabled?: boolean;
    danger?: boolean;
}
export declare class RcContextMenuComponent {
    items: RcContextMenuItem[];
    /** Emitted when a value is chosen */
    select: EventEmitter<string>;
    /** Handle pick + close */
    onPick(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcContextMenuComponent, "rc-context-menu", never, { "items": { "alias": "items"; "required": false; }; }, { "select": "select"; }, never, never, true, never>;
}
