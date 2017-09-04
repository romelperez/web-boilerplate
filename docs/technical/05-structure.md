[Index](./00-index.md)

# Structure

Configuration in client and server sides are stored in their settings module respectively by environment.

Source code is located at `src` by client, server and universally.

We isolate components/modules functionality, design, tests and docs in their folders and resources at distribution folder `dist/[RESOURCE]/`.

Client general code is located at `src/client/core`.

File structure:

- `docs/` - Documentation
  - `spec/` - Specification
  - `design/` - UI/UX designs
  - `architecture/` - Software design and architecture
  - `styleguide/` - Components style guide
  - `api/` - Server API docs
  - *`user/` - User documentation*
- `src/`
  - `client/`
    - `settings/` - Settings by environment
    - `components/` - React static components
    - `core/`
      - `index.js`
      - `core.scss`
    - *`data/` - Server persistence utils*
    - *`tools/`*
    - `[APP]/`
      - `containers/` - React container components
      - *`store/`*
      - *`actions/`*
      - *`reducers/`*
      - *`selectors/`*
      - `index.js` - Application client entry point
      - `[APP].scss`
  - `server/`
    - `settings/`
    - `models/`
    - `views/`
    - `api/`
    - `pages/`
    - *`tools/`*
    - `index.js`
  - `shared/`
    - *`tools/`*
    - *`i18n/`*
- `test/` - Testing setups and suites
  - *`[TYPE]/`*
- `public/` - Distribution folder for assets and built client code
  - `css/`
  - `js/`
  - *`img/`*
  - *`fonts/`*
  - *`files/` - Dynamic files by users*
  - *`audio/`*
  - *`video/`*
- `bundle/` - Server bundled code
- *`static_components/` - Client static libraries*
- *`setup/` - Environment project setup*
- *`tasks/` - Automation tasks*

_Optional folders in cursive._

_Dynamic names are marked as [NAME]._
