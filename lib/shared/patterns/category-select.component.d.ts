import { EventEmitter } from '@angular/core';
import { RcLayoutNavCategory, RcTranslatable } from '../layouts';
import * as i0 from "@angular/core";
export declare class RcCategorySelectComponent {
    label: string;
    categories: RcLayoutNavCategory[];
    value: string | null;
    private readonly t;
    valueChange: EventEmitter<string>;
    onChange(id: string): void;
    label$(v: RcTranslatable): import("rxjs").Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcCategorySelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcCategorySelectComponent, "rc-category-select", never, { "label": { "alias": "label"; "required": false; }; "categories": { "alias": "categories"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
