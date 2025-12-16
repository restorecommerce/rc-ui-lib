import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { RcId, RcResourceListHeaderCtx } from './resource-list.models';
import * as i0 from "@angular/core";
export declare class RcResourceListComponent<TItem = unknown> implements OnChanges {
    items: TItem[];
    getId: (item: TItem) => RcId;
    title: string;
    emptyLabel: string;
    total: number;
    filtered: number;
    itemSelected: EventEmitter<TItem>;
    itemTpl: TemplateRef<any>;
    headerTpl?: TemplateRef<any>;
    headerCtx: RcResourceListHeaderCtx;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcResourceListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcResourceListComponent<any>, "rc-resource-list", never, { "items": { "alias": "items"; "required": true; }; "getId": { "alias": "getId"; "required": true; }; "title": { "alias": "title"; "required": false; }; "emptyLabel": { "alias": "emptyLabel"; "required": false; }; "total": { "alias": "total"; "required": false; }; "filtered": { "alias": "filtered"; "required": false; }; }, { "itemSelected": "itemSelected"; }, ["itemTpl", "headerTpl"], never, true, never>;
}
