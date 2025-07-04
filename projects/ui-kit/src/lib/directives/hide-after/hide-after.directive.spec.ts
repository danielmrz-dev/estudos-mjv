import { Component } from "@angular/core";
import { HideAfterDirective } from "./hide-after.directive";
import { discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

fdescribe(HideAfterDirective.name, () => {
    it('should render the initial template', () => {
        const { debugEl } = setup();
        const tlp = debugEl.query(By.css('[data-testingId="banner"]'));
        expect(tlp).not.toBeNull();
    });
    it('should remove a template after defined timeout', fakeAsync(() => {
        const { debugEl } = setup();
        flush();
        const tlp = debugEl.query(By.css('[data-testingId="banner"]'));
        expect(tlp).toBeNull();
    }));
    it('should replace template with a placeholder', fakeAsync(() => {
        const { debugEl } = setup();
        flush();
        const tlp = debugEl.query(By.css('[data-testingId="alt-banner"]'));
        expect(tlp).not.toBeNull();
    }));
    it('should update count down clock every second', fakeAsync(() => {
        const { fixture, debugEl } = setup();
        let counter = debugEl.query(By.css('[data-testingId="counter"]'));
        expect(counter.nativeElement.textContent).toBe('3');
        for (let i = 2; i > 0; i--) {
            tick(1000);
            fixture.detectChanges();
            counter = debugEl.query(By.css('[data-testingId="counter"]'));
            expect(counter.nativeElement.textContent).toBe(String(i));
        }
        flush();
    }));
});

function setup() {

    @Component({
        standalone: true,
        imports: [HideAfterDirective],
        template: `
        <div
            data-testingId="banner"
            class="banner"
            *hideAfter="3000; then altBanner; let counter = counter"
        >
            This Banner will be removed in
            <span data-testingId="counter" class="counter">{{ counter }}</span> seconds...
        </div>
        <ng-template #altBanner>
            <div data-testingId="alt-banner" class="alt-banner">Here was a banner...</div>
        </ng-template>
        `
    })
    class TestHost {}
    const fixture = TestBed.createComponent(TestHost);
    const debugEl = fixture.debugElement;
    fixture.detectChanges();

    return { fixture, debugEl };
}
