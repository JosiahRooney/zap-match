/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';

import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface AppAgent {
      'history': RouterHistory;
    }
  }

  interface HTMLAppAgentElement extends StencilComponents.AppAgent, HTMLStencilElement {}

  var HTMLAppAgentElement: {
    prototype: HTMLAppAgentElement;
    new (): HTMLAppAgentElement;
  };
  interface HTMLElementTagNameMap {
    'app-agent': HTMLAppAgentElement;
  }
  interface ElementTagNameMap {
    'app-agent': HTMLAppAgentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-agent': JSXElements.AppAgentAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAgentAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {
      'history': RouterHistory;
    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'match': MatchResults;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppQuestions {
      'history': RouterHistory;
      'match': MatchResults;
    }
  }

  interface HTMLAppQuestionsElement extends StencilComponents.AppQuestions, HTMLStencilElement {}

  var HTMLAppQuestionsElement: {
    prototype: HTMLAppQuestionsElement;
    new (): HTMLAppQuestionsElement;
  };
  interface HTMLElementTagNameMap {
    'app-questions': HTMLAppQuestionsElement;
  }
  interface ElementTagNameMap {
    'app-questions': HTMLAppQuestionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-questions': JSXElements.AppQuestionsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppQuestionsAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppResults {
      'history': RouterHistory;
    }
  }

  interface HTMLAppResultsElement extends StencilComponents.AppResults, HTMLStencilElement {}

  var HTMLAppResultsElement: {
    prototype: HTMLAppResultsElement;
    new (): HTMLAppResultsElement;
  };
  interface HTMLElementTagNameMap {
    'app-results': HTMLAppResultsElement;
  }
  interface ElementTagNameMap {
    'app-results': HTMLAppResultsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-results': JSXElements.AppResultsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppResultsAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
