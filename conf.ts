import {Config} from 'protractor';

export let config: Config = {
    directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  specs: [ 'testspec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};