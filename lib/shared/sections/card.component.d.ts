import * as i0 from "@angular/core";
export declare class RcCardComponent {
    title: string;
    subtitle?: string;
    icon?: string;
    variant?: string;
    forceFooter: boolean;
    get showFooter(): true;
    get hasHeaderContent(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcCardComponent, "rc-card", never, { "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "forceFooter": { "alias": "forceFooter"; "required": false; }; }, {}, never, ["[rsCardHeaderActions]", "[rsCardHeader]", "*", "[rsCardFooter]"], true, never>;
}
