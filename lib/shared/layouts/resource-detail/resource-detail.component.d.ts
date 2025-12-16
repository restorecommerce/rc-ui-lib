import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RcResourceDetailComponent {
    title: string;
    toolbarAriaLabel: string;
    showBack: boolean;
    backIcon: string;
    backLabel: string;
    showEdit: boolean;
    showDelete: boolean;
    back: EventEmitter<void>;
    edit: EventEmitter<void>;
    delete: EventEmitter<void>;
    actionsTpl?: TemplateRef<any>;
    subtitleTpl?: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcResourceDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcResourceDetailComponent, "rc-resource-detail", never, { "title": { "alias": "title"; "required": false; }; "toolbarAriaLabel": { "alias": "toolbarAriaLabel"; "required": false; }; "showBack": { "alias": "showBack"; "required": false; }; "backIcon": { "alias": "backIcon"; "required": false; }; "backLabel": { "alias": "backLabel"; "required": false; }; "showEdit": { "alias": "showEdit"; "required": false; }; "showDelete": { "alias": "showDelete"; "required": false; }; }, { "back": "back"; "edit": "edit"; "delete": "delete"; }, ["actionsTpl", "subtitleTpl"], ["*"], true, never>;
}
