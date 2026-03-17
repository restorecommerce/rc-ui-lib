import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';
import { VCLBreakpoints } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
export class RcLayoutFacade {
    breakpointObserver = inject(BreakpointObserver);
    isHandset$ = this.breakpointObserver
        .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
        .pipe(map((state) => state.matches), shareReplay({ bufferSize: 1, refCount: true }));
    collapsedSubject = new BehaviorSubject(false);
    collapsed$ = this.collapsedSubject.asObservable();
    navItemsSubject = new BehaviorSubject([]);
    categoriesSubject = new BehaviorSubject([]);
    categories$ = this.categoriesSubject.asObservable();
    /** Called by the shell once it has the config */
    initConfig(config) {
        const navItems = config.navItems ?? [];
        const categories = config.categories && config.categories.length
            ? config.categories
            : [{ id: 'home', label: 'Home' }];
        this.navItemsSubject.next(navItems);
        this.categoriesSubject.next(categories);
    }
    getItemsByCategory(categoryId) {
        return this.navItemsSubject.value.filter((item) => item.categoryId === categoryId && !item.isHidden);
    }
    toggleSidebar() {
        this.collapsedSubject.next(!this.collapsedSubject.value);
    }
    setNavItems(items) {
        this.navItemsSubject.next(items);
    }
    static ɵfac = function RcLayoutFacade_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcLayoutFacade)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcLayoutFacade, factory: RcLayoutFacade.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcLayoutFacade, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=main-layout.facade.js.map