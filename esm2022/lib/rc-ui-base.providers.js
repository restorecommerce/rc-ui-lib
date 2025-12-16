import { makeEnvironmentProviders, } from '@angular/core';
import { IconResolverService, MaterialDesignIconResolverService, MaterialDesignVCLIconAliasResolverService, } from '@vcl/ng-vcl';
import { RcDrawerService, RcValidationService, RcMdiIconResolverService, } from './services';
export const MODULES_RS_UI_BASE_PROVIDERS = [
    {
        provide: IconResolverService,
        useClass: RcMdiIconResolverService,
        multi: true,
    },
    {
        provide: IconResolverService,
        useClass: MaterialDesignIconResolverService,
        multi: true,
    },
    {
        provide: IconResolverService,
        useClass: MaterialDesignVCLIconAliasResolverService,
        multi: true,
    },
    RcDrawerService,
    RcValidationService,
];
export function provideModulesUiBase() {
    return makeEnvironmentProviders(MODULES_RS_UI_BASE_PROVIDERS);
}
//# sourceMappingURL=rc-ui-base.providers.js.map