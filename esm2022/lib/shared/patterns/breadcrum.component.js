import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { VCLIconModule } from '@vcl/ng-vcl';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@vcl/ng-vcl";
const _c0 = a0 => [a0];
const _c1 = a0 => ({ selected: a0 });
const _forTrack0 = ($index, $item) => $item.url;
function RcBreadcrumbComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "vcl-icon", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, ctx_r0.rootUrl));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.rootLabel, " ");
} }
function RcBreadcrumbComponent_Conditional_0_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "vcl-icon", 3);
} if (rf & 2) {
    const breadcrumb_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", breadcrumb_r2.url);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r2.label, " ");
} }
function RcBreadcrumbComponent_Conditional_0_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r2.label, " ");
} }
function RcBreadcrumbComponent_Conditional_0_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 1);
    i0.ɵɵconditionalCreate(1, RcBreadcrumbComponent_Conditional_0_For_4_Conditional_1_Template, 3, 2)(2, RcBreadcrumbComponent_Conditional_0_For_4_Conditional_2_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_14_r3 = ctx.$index;
    const ɵ$count_14_r4 = ctx.$count;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c1, ɵ$index_14_r3 === ɵ$count_14_r4 - 1));
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(ɵ$index_14_r3 === ɵ$count_14_r4 - 1) ? 1 : 2);
} }
function RcBreadcrumbComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 0)(1, "ol");
    i0.ɵɵconditionalCreate(2, RcBreadcrumbComponent_Conditional_0_Conditional_2_Template, 4, 4, "li");
    i0.ɵɵrepeaterCreate(3, RcBreadcrumbComponent_Conditional_0_For_4_Template, 3, 4, "li", 1, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.showRoot ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.breadcrumbs);
} }
export class RcBreadcrumbComponent {
    /**
     * Text for the root crumb (defaults to "Home").
     * You can change this from the host app: <rc-breadcrumb rootLabel="Dashboard" />
     */
    rootLabel = 'Home';
    /**
     * Router URL for the root crumb.
     * Defaults to '/'.
     */
    rootUrl = '/';
    /**
     * Whether to display the root crumb at all.
     */
    showRoot = true;
    /**
     * Labels to exclude when the last crumb matches them (e.g. a generic "Home" page).
     * You can override from outside instead of relying on ROUTER constants.
     */
    breadcrumbsToExclude = [];
    /**
     * All generated breadcrumbs.
     */
    breadcrumbs = [];
    /**
     * Convenience getter: last breadcrumb label or empty.
     */
    get lastLabel() {
        return this.breadcrumbs[this.breadcrumbs.length - 1]?.label ?? '';
    }
    destroy$ = new Subject();
    cdr = inject(ChangeDetectorRef);
    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);
    ngAfterViewInit() {
        // Rebuild breadcrumbs on each navigation end
        this.router.events
            .pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateBreadcrumbs();
        });
        // initial build (in case we already have an active route)
        this.updateBreadcrumbs();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // ---- internal helpers ----
    updateBreadcrumbs() {
        const newBreadcrumbs = this.createBreadcrumbs(this.activatedRoute.root).reduce((acc, { label, url }) => {
            if (label !== '' && !acc.some((breadcrumb) => breadcrumb.url === url)) {
                acc.push({ label, url });
            }
            return acc;
        }, []);
        // shallow comparison is enough; array reference change triggers update
        if (this.breadcrumbs !== newBreadcrumbs) {
            this.breadcrumbs = newBreadcrumbs;
            this.cdr.markForCheck();
        }
    }
    createBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url
                .map((segment) => segment.path)
                .join('/');
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }
            const data = child.snapshot.data;
            let label = '';
            // Support both: data.breadcrumb: string | (data) => string
            if (typeof data['breadcrumb'] === 'function') {
                label = data['breadcrumb'](data);
            }
            else {
                label = data['breadcrumb'] ?? child.snapshot.title ?? '';
            }
            if (label !== '' &&
                label !== breadcrumbs[breadcrumbs.length - 1]?.label) {
                breadcrumbs.push({ label, url });
            }
            // Continue recursively down the tree
            return this.createBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
    static ɵfac = function RcBreadcrumbComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RcBreadcrumbComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RcBreadcrumbComponent, selectors: [["rc-breadcrumb"]], inputs: { rootLabel: "rootLabel", rootUrl: "rootUrl", showRoot: "showRoot", breadcrumbsToExclude: "breadcrumbsToExclude" }, decls: 1, vars: 1, consts: [[1, "breadcrumb-nav"], [3, "ngClass"], [1, "breadcrumb-nav-item-label", 3, "routerLink"], ["icon", "vcl:arrow-right", 1, "breadcrumb-nav-divider"], [1, "breadcrumb-nav-item-label"]], template: function RcBreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, RcBreadcrumbComponent_Conditional_0_Template, 5, 1, "nav", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.breadcrumbs.length && !ctx.breadcrumbsToExclude.includes(ctx.lastLabel) ? 0 : -1);
        } }, dependencies: [NgClass, RouterModule, i1.RouterLink, VCLIconModule, i2.VCLIconComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RcBreadcrumbComponent, [{
        type: Component,
        args: [{
                selector: 'rc-breadcrumb',
                standalone: true,
                imports: [NgClass, RouterModule, VCLIconModule],
                template: `
    @if (breadcrumbs.length && !breadcrumbsToExclude.includes(lastLabel)) {
    <nav class="breadcrumb-nav">
      <ol>
        @if (showRoot) {
        <li>
          <a
            [routerLink]="[rootUrl]"
            class="breadcrumb-nav-item-label"
          >
            {{ rootLabel }}
          </a>
          <vcl-icon
            class="breadcrumb-nav-divider"
            icon="vcl:arrow-right"
          />
        </li>
        }

        <!-- Dynamic crumbs -->
        @for (breadcrumb of breadcrumbs; track breadcrumb.url; let last = $last)
        {
        <li [ngClass]="{ selected: last }">
          @if (!last) {
          <a
            [routerLink]="breadcrumb.url"
            class="breadcrumb-nav-item-label"
          >
            {{ breadcrumb.label }}
          </a>
          <vcl-icon
            class="breadcrumb-nav-divider"
            icon="vcl:arrow-right"
          />
          } @else {
          <span class="breadcrumb-nav-item-label">
            {{ breadcrumb.label }}
          </span>
          }
        </li>
        }
      </ol>
    </nav>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { rootLabel: [{
            type: Input
        }], rootUrl: [{
            type: Input
        }], showRoot: [{
            type: Input
        }], breadcrumbsToExclude: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RcBreadcrumbComponent, { className: "RcBreadcrumbComponent", filePath: "lib/shared/patterns/breadcrum.component.ts", lineNumber: 77 }); })();
//# sourceMappingURL=breadcrum.component.js.map