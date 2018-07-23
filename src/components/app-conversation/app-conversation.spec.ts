import { TestWindow } from '@stencil/core/testing';
import { AppConversation } from './app-conversation';

describe('app-conversation', () => {
  it('should build', () => {
    expect(new AppConversation()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppConversationElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppConversation],
        html: '<app-conversation></app-conversation>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
