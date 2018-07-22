import { TestWindow } from '@stencil/core/testing';
import { AppResults } from './app-results';

describe('app-results', () => {
  it('should build', () => {
    expect(new AppResults()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppResultsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppResults],
        html: '<app-results></app-results>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
