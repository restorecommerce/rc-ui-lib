import { makeEnvironmentProviders } from '@angular/core';
import { RC_LAYOUT_CONFIG } from './main-layout.tokens';
export function provideMainRcLayout(config) {
    return makeEnvironmentProviders([
        { provide: RC_LAYOUT_CONFIG, useValue: config.layout },
    ]);
}
//# sourceMappingURL=main-layout.providers.js.map