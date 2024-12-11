import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'login',
  exposes: {
    './Routes': 'apps/login/src/app/remote-entry/entry.routes.ts',
  },
  shared: (name, config) => {
    // We want lodash to be tree shaken, and bundled into each host/remote separately.
    switch (name) {
      case 'rxjs':
      case 'rxjs/operators':
      //case '@angular/router':
      case '@angular/platform-browser':
      case '@angular/forms':
      //case '@angular/core':
      case '@angular/core/primitives/signals':
      case '@angular/core/primitives/event-dispatch':
      //case '@angular/common':
      case '@angular/common/http':
        return false
    }
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
