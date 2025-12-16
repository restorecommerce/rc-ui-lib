import { type EnvironmentProviders } from '@angular/core';
import { IconResolverService, MaterialDesignIconResolverService } from '@vcl/ng-vcl';
import { RcDrawerService, RcValidationService, RcMdiIconResolverService } from './services';
export declare const MODULES_RS_UI_BASE_PROVIDERS: (typeof RcDrawerService | typeof RcValidationService | {
    provide: typeof IconResolverService;
    useClass: typeof RcMdiIconResolverService;
    multi: boolean;
} | {
    provide: typeof IconResolverService;
    useClass: typeof MaterialDesignIconResolverService;
    multi: boolean;
})[];
export declare function provideModulesUiBase(): EnvironmentProviders;
