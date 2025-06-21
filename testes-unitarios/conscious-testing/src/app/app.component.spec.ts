import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

function pollingTask(task: any, interval = 1000) {
  return setInterval(() => task(), interval);
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall()
  });

  // it('Testing the use of Done Function', (done: DoneFn) => {
  //   setTimeout(() => {
  //     expect(1).toBe(1);
  //     done();
  //   }, 2000);
  // });
  
  it('Testing the use of jasmine.clock function', () => {
    setTimeout(() => {
      expect(2).toBe(2);
    }, 2000);
    jasmine.clock().tick(2000);
  });

  it('should execute async task with an interval', () => {
    const pollingTaskSpy = jasmine.createSpy('pollingTask');
    pollingTask(pollingTaskSpy, 2000);
    expect(pollingTaskSpy).not.toHaveBeenCalled();
    jasmine.clock().tick(1000);
    expect(pollingTaskSpy).not.toHaveBeenCalled();
    jasmine.clock().tick(1000);
    expect(pollingTaskSpy).toHaveBeenCalledTimes(1);
    jasmine.clock().tick(1000);
    expect(pollingTaskSpy).toHaveBeenCalledTimes(1);
    jasmine.clock().tick(1000);
    expect(pollingTaskSpy).toHaveBeenCalledTimes(2);
  });

  it('Test', async () => {
    // spyOn(window, 'fetch').and.returnValue(new Promise((resolve) => {
    //   resolve(new Response(JSON.stringify([1,2,3])));
    // }));
    const fetch = spyOn(window, 'fetch').and.resolveTo(new Response(JSON.stringify([1,2,3])));
    await window.fetch('https://localhost:4200');
    await window.fetch('');
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith('https://localhost:4200');
    
  });
  

});
