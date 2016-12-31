import { configure } from '@kadira/storybook';

function loadStories() {
  require ('../__stories__/SemanticUIReactTags.js')
}

configure(loadStories, module);
