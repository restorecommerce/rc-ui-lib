import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay } from 'rxjs';
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
    navItems$ = this.navItemsSubject.asObservable();
    categories$ = this.categoriesSubject.asObservable();
    activeCategorySubject = new BehaviorSubject(this.categoriesSubject.value[0]?.id ?? 'home');
    activeCategory$ = this.activeCategorySubject.asObservable();
    visibleNavItems$ = combineLatest([
        this.navItems$,
        this.activeCategory$,
        this.categories$,
    ]).pipe(map(([items, activeCategory, categories]) => {
        const defaultCategoryId = categories[0]?.id;
        return items.filter((item) => {
            const id = item.categoryId ?? defaultCategoryId;
            return id === activeCategory;
        });
    }));
    /** Called by the shell once it has the config */
    initConfig(config) {
        const navItems = config.navItems ?? [];
        const categories = config.categories && config.categories.length
            ? config.categories
            : [{ id: 'home', label: 'Home' }];
        this.navItemsSubject.next(navItems);
        this.categoriesSubject.next(categories);
        // reset active category if needed
        const firstId = categories[0]?.id ?? 'home';
        this.activeCategorySubject.next(firstId);
    }
    toggleSidebar() {
        this.collapsedSubject.next(!this.collapsedSubject.value);
    }
    setNavItems(items) {
        this.navItemsSubject.next(items);
    }
    setActiveCategory(id) {
        this.activeCategorySubject.next(id);
    }
    static ɵfac = function RcLayoutFacade_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcLayoutFacade)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RcLayoutFacade, factory: RcLayoutFacade.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcLayoutFacade, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=main-layout.facade.js.map