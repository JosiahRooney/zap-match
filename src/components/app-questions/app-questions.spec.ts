import { TestWindow } from '@stencil/core/testing';
import { AppQuestions } from './app-questions';

describe('app-questions', () => {
  it('should build', () => {
    expect(new AppQuestions()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppQuestionsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppQuestions],
        html: '<app-questions></app-questions>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
