# Users

Users app which has three pages home, user list, and user detail.

## Project setup

```
yarn or npm install
```

### Build and minifies for production

```
yarn build or npm run build (open bundle report by default as mentioned below)

yarn global add serve
serve -s build (to deploy on static server)
```

### Usage

**(Compiles and hot-reloads for development: uses CRA)**

```
yarn start or npm run start (the user home page will be opened over http://localhost:3000/)
```

### Bundle analysis for production

```
yarn bundle:report (open the bundle analyzer on http://localhost:2100/)
yarn analyze (provides source map explorer)
```

### Running the tests

```
yarn test or npm run test
```

### Performance

- Used lighthouse & react performance dev tools, to detect the performance metrics and re-renderes on the app.
- Lazy loaded route components (user-list & user-detail) on the initial page load, moreover structured the components to avoid the re-renders with the react hooks wherever necessary.
- Added no render common hooks to avoid unnecessary renders.
