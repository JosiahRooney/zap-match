import { TestWindow } from '@stencil/core/testing';
import { AppAgent } from './app-agent';

describe('app-agent', () => {
  it('should build', () => {
    expect(new AppAgent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppAgentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppAgent],
        html: '<app-agent></app-agent>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
