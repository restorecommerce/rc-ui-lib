import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface LayoutNavCategory {
    id: string;
    label: string;
}
export declare class RcCategorySelectComponent {
    label: string;
    categories: LayoutNavCategory[];
    value: string | null;
    valueChange: EventEmitter<string>;
    onChange(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcCategorySelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcCategorySelectComponent, "rc-category-select", never, { "label": { "alias": "label"; "required": false; }; "categories": { "alias": "categories"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
