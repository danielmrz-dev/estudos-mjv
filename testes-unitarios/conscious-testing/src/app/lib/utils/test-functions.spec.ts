import { createApp, removeApp, renderTitle } from "./test-functions";

describe('UI Framework', () => {

    beforeEach(() => createApp());
    afterEach(() => removeApp());

    it('should create the container', () => {
        const el = document.getElementById('app');
        expect(el).not.toBeNull();
    });

    it('should remove the container', () => {
        removeApp();
        const el = document.getElementById('app');
        expect(el).toBeNull();
    });

    it('should render title', () => {
        renderTitle('Ana singer!');
        const h1 = document.querySelector('#app h1');
        expect(h1?.textContent?.trim()).toBe('Ana singer!');
    });
    
});
