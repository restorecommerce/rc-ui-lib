import { ConnectedPosition } from '@angular/cdk/overlay';
import { EventEmitter } from '@angular/core';
import { RcHeaderOrganization, RcHeaderUser } from './header-toolbar.models';
import * as i0 from "@angular/core";
export declare class RcHeaderToolbarComponent {
    user: RcHeaderUser | null;
    organizations: RcHeaderOrganization[];
    selectedOrganizationId: string | null;
    showProfile: boolean;
    showPreferences: boolean;
    showSignOut: boolean;
    /** Popover positions (you can override if needed) */
    rightOrientedPositions: ConnectedPosition[];
    /** Emitted when an organization is selected */
    organizationSelected: EventEmitter<string>;
    /** Emitted when an account action is chosen */
    accountAction: EventEmitter<"profile" | "preferences" | "sign-out">;
    /** Emitted when the search term changes */
    searchChange: EventEmitter<string>;
    hostRowClass: boolean;
    searchTerm: string;
    get selectedOrganization(): RcHeaderOrganization | undefined;
    get filteredOrganizations(): RcHeaderOrganization[];
    onSearchChange(term: string): void;
    onSelectOrganization(id: string): void;
    onAccountItemSelected(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RcHeaderToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RcHeaderToolbarComponent, "rc-header-toolbar", never, { "user": { "alias": "user"; "required": false; }; "organizations": { "alias": "organizations"; "required": false; }; "selectedOrganizationId": { "alias": "selectedOrganizationId"; "required": false; }; "showProfile": { "alias": "showProfile"; "required": false; }; "showPreferences": { "alias": "showPreferences"; "required": false; }; "showSignOut": { "alias": "showSignOut"; "required": false; }; "rightOrientedPositions": { "alias": "rightOrientedPositions"; "required": false; }; }, { "organizationSelected": "organizationSelected"; "accountAction": "accountAction"; "searchChange": "searchChange"; }, never, never, true, never>;
}
