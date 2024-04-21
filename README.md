# boilerplate-react-ts

It's a boilerplate for usage of `webpack 5+`, `html`, `scss/css`, `ts` with `react` library as core concept. (everything of that is meant to be `components` and `webpack` are for bundling and connecting parts together) in a future project. Check out the docs below to be in `actual tune`!

**note**: pay attention - the boilerplate is contains primarly only `react` and `react-dom` and it is must be integrated into [boilerplate-webpack-gulp-html-css-ts-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-ts-components)! Also pay attention that `react` and `react-dom` must be installed as **Project dependencies**!

### !Important

- While using modules always set an extension to the imported file's path! Even for `*.js`(`*.ts`) files! Or you'll get an exception and `webpack` will crash. Otherwise add the `resolve.extensions` to the `webpack.config.ts` to solve this:

```ts
export default {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
```

<br>

- Before usage - update packages and dependency versions (instruction below), than run script for build (to test for errors) (e,g, `npm run build`). Otherwise cure the exceptions(((
- don't forget to rename all the `<project_name>` or `projectName` names to desired one! Also check the following list of files, folders and linked things, to insure about the replacement:
  - `./projectName`;
  - `webpack.config.ts` all the occurrences of `projectName` in the `entry`, `output` etc (path: `./configs/webpack/webpack.config.ts`);
  - `index.ts` all the occurrences of `projectName` (path: `projectName/src/index.ts`);
  - `projectNameSelfCheck` and all subfolders and files inside (path: `projectName/src/shared/projectNameSelfCheck/index.ts`);
  - `index.html` project `title` and `meta.content` (path: `projectName/src/pages/index.html` or `projectName/src/widgets/head/_head.html` for only `_head.html` chunk usage in component with `.tsx`)
- files with extension `.gitkeep` are only for adding `empty folders` to the staging area and for continious committing. Since the folder turn to be not empty you can for sure delete this files (they are for nothing but only for saving folder structure (check the link for more [what is .gitkeep for?](https://stackoverflow.com/questions/115983/how-do-i-add-an-empty-directory-to-a-git-repository)));
- check `./configs/webpack/webpack.config.ts` before usage using CLI command for no errors:
  `npx webpack configtest [config-path]` so currently => `npx webpack configtest ./configs/webpack/webpack.config.ts`

---

### How to check for npm packages update and update them

[Pay attention to this answers at stackoverflow.com](https://stackoverflow.com/questions/16525430/npm-check-and-update-package-if-needed)

To check the outdated packages:  
`npm outdated`

To update all the outdated packages (**note**: this command do not update devDependencies in the package.json!):  
`npm update`

To update one `package` (**note**: this command do not update devDependency in the package.json!):  
`npm update <package_name>`

To update all the outdated packages and refresh all devDependencies in the package.json:  
`npm update --save`

**!important**: never use the `npm-check-updates` in a way as below in a prodaction, this one is only for updating to the latest packages' versions of the boilerplate:

```bash
npx npm-check-updates -u
npm install
```

The `npx npm-check-updates -u` command will **overwrite** the versions of **all** the project packages to the latest ones,
than will install them. (check the [How can I update each dependency in package.json to the latest version?](https://stackoverflow.com/questions/16073603/how-can-i-update-each-dependency-in-package-json-to-the-latest-version) for details).

To delete an unnecessary `package` use the following command ([official npm Docs](https://docs.npmjs.com/uninstalling-packages-and-dependencies)):  
`npm uninstall <package_name>`  
**note**: don't forget to check `scripts` in the `package.json` to delete unnecessary one.

The boilerplate is set to use ECMAScript modules (ESM) (see the `package.json` => `{"type": "module"}`);

#### webpack

`webpack` is turned to use `React` library with `Babel` and to bundle all assets and reduce final bundle (for example: images are minimized as possible) to have as result `main.js`, `index.html`, `main.css` and `src/assets` (file structure is save as is! check my custom made function in the `output.assetModuleFilename`. It was made relying on this [webpack 5 assetModuleFilename stackoverflow.com](https://stackoverflow.com/questions/68814833/webpack-5-assets-module-how-to-keep-the-folder-structure-in-the-output-folder)).

`webpack` uses:

- `babel-loader`, `"@babel/core`, `@babel/preset-react` for ability to load and handle `.jsx` and `React` components in the `*.js` files. As is it's assumed to use actual ECMAScript standard in `.(js|jsx)` files and just transform `React` syntax into `React.createElement()` function usage for ability to handle it with `Webpack`;
- `html-loader` for ability to load `.html` files into `*.js` one;
- `html-webpack-plugin` to nest final `script.js` file (currently to the `head` of html file. Check `inject: 'head'` option in the `./configs/webpack/webpack.config.js` HtmlWebpackPlugin options) and final `main.css` styles file to the final html template.
- `image-minimizer-webpack-plugin`, `imagemin`, `imagemin-gifsicle`, `imagemin-jpegtran`, `imagemin-optipng`, `imagemin-svgo` - a fable things to reduce size of the image resources with lossless quality optimization (can be changed, use offical docs for more);
- `mini-css-extract-plugin` - to bundle final external css file;
- `resolve-url-loader` - loader for Sass to ease assets pathes' setting relying on current file but not to the output one (**note**: `sourceMap: true` in the `sass-loader` options is lifeworth required for working the plugin!!!);
- `sass` - for using all SCSS / Sass features;
- `sass-loader` - loader for ability to read and use `.scss` / `.sass` files inside `*.js` one;

#### Babel

`Babel` as mentioned above is used to transform `React` syntax into `Webpack`'s appropriate one. Also there's a lot of possibilities to use this powerful tool. E.g. for transforming actual ECMAScript into older one for legacy browsers support via `@babel/preset-env` preset usage. Check the `babel` docs for more [Babel docs](https://babeljs.io/docs/).
Also check the current `babel.config.js` for details (path: `configs/babel/babel.config.js`).

#### SCSS / Sass

`Sass` is turned to use all the benefits of the Block Element Modifier (BEM) metodology. There's a commonly using BEM features like reusing as much as possible classes, that are stand for only few goals: mockup forming, styling, coloring, text-style-changing (the most behavior is like Bootstrap for it's classnames usage) and combining classes to implement desired looks without creating a ton of repeated and only for once classes.

`Sass` includes `abstracts` parts that are used in the entire boilerplate. It's an

- `animations` (path: `projectName/src/shared/ui/common styles/abstracts/_animations.scss`),
- `constants` (path: `projectName/src/shared/ui/common styles/abstracts/_constants.scss`),
- `mixins` (path: `projectName/src/shared/ui/common styles/abstracts/_mixins.scss`),
- `placeholders` (path: `projectName/src/shared/ui/common styles/abstracts/_placeholders.scss`).
  You can check them for benefits or delete otherwise (also check `index.scss` file `projectName/src/app/index.scss` to delete unused anymore scss files!).

Also there's `base` folder with styles or classes that impact on entire boilerplate layout view and includes `Blocks` (BEM methodology). There're

- `_normalize.scss` (path: `projectName/src/shared/ui/common styles/base/_normalize.scss`) (to lead the browser styles to be browser independent, to ease crossbrowser app development),
- `_typography.scss` (path: `projectName/src/shared/ui/common styles/base/_typography.scss`) containing all the text heights variables,
- `_common.scss` (path: `projectName/src/shared/ui/common styles/base/_common.scss`) one of the most important files that introduce basic classes for `body`, `containers`, `links`, `text elements` (color-modificators, letter - spacing modificators). This classes will be fundamental for elements in the `app` or `site page` that with usage of a few of their own classes help to reach desire result with minimum efforts.

`layout` folder includes classes that forming `flex` or `grid` layout.

Also it's possible to use `css-modules` via the `css-loader` (check the [css-loader](https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules) for details). Read more about the `css-modules` usage at [css-modules](https://github.com/css-modules/css-modules?tab=readme-ov-file) and then just turn the `.(css|sass|scss)` extension of the file with styles into `.module.(css|scss|sass)`.

So, there're possible usage of the global styles all over the project (common ui styles to prevent unnecessary classes multiplications) and locally scoped `*.module.(css|sass|scss)` styles for `segments`, `slices` or `layers` that contain component's unique data and are small and potentially can have classNames similarity problems all over the project.

Long story short say all the `.(css|scss|sass)` files are handled as `global` (normal) CSS, and `.module.(css|scss|sass)`
are `css-modules` with `local` scope.

---

**note**: pay attention to order of the imported files in the `index.scss`! The last imports will override previous one if there's matches in classnames or ids or tags!

---

#### JavaScript / Component approach

`JS` rules all the things inside the boilerplate. The only and one. Entire boilerplate structure is made for only the goal - turn everything into the hierarchical components (`React` one and other Frameworks like), where every component is as much as possible unconnected and incapsulated unit for maximum reusage by higher ordered ones in a project (it's must be the only strict linear connection from higher standing components to lower one due to Feature-Sliced Design(FSD) architecture principle!).

There're chunks like `_<component_filename>.html`, `_<component_filename>.scss` and optional `_<component_filename>.(js|jsx)` It's possible to include them into upper - standing `index.js` using `webpack` features of loaders. The `index.js` plays a role of `public api` for other components to import and usage.

But the best possible way for nowdays is to use appropriate to your goals architecture (MVC, MVP, MVVM, Module Architecture, Atomic Design, Feature-Sliced Design(FSD) etc) with the power of `reactive frameworks and libraries` usage for creating `Single Page Applications` (`SPA`) or similar `applications`. The boilerplate structure is turned to use `FSD architecture` with `React` (to learn more about `FSD` check the [FSD official docs](https://feature-sliced.design/docs/get-started) and [React official website](https://react.dev/)).

### The boilerplate structure and brief descriptions:

- `configs/` - the folder includes config files for: Babel package currently. It's possible to add `prettier/eslint/husky` to the boilerplate from [boilerplate-eslint-prettier-husky](https://github.com/Dmitriy-Frostoff/boilerplate-eslint-prettier-husky);

**[FSD structure](https://feature-sliced.design/docs/get-started/overview "FSD structure official docs")**  
<a href="https://feature-sliced.design/docs/get-started/overview" target="_blank">  
 <img width="50%" height="50%" src="https://feature-sliced.design/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg" alt="Feature-Sliced Design Basics"/>
</a>

- `projectName/src/` - source folder for `layers` of a future project:

  - `projectName/src/index.js` - the top - level high - ordered `Public API file` to load implemented business logic of `layers` (to render up ready app, in React like way say);

  1. `projectName/src/shared` - `layer`, there're reusable functionality, detached from the specifics of the project/business. (e.g. UIKit, libs, API).

     **Take a notice: `shared` slice doesn't have it's main `Public API file` `index.js`! Instead the `Public API file` is only inside the ready - to - use `segment`!!!**

  - `projectName/src/shared/api` - `slice`, all the APIs for usage all over the app / project from the backend;
  - `projectName/src/shared/assets` - `slice`, there're all the images, icons, fonts, music, video etc sources of a future project as is (includes `segements` in other words);
  - `projectName/src/shared/lib` - `slice`, the libraries commonly used by high - ordered `layers`;
  - `projectName/src/shared/pixel perfect drafts` - `slice`, drafts for desktop, tablet and mobile for usage in the pixel perfect extension in the web browser to check the draft matching (delete it if unnecessary);
  - `projectName/src/shared/projectNameSelfCheck` - `slice`, there's a template function for logging self - check of the task (the Rolling Scopes School for only. Can be deleted easily and don't forget to delete the file's import from `projectName/src/index.js`!);
  - `projectName/src/shared/ui` - `slice`, there're commonly used by high-ordered `slices` UI parts:

    - `projectName/src/shared/ui/common styles` - `segment`, commonly used styles

      - `projectName/src/components/abstracts` - `segment`, contains parts that are used in a entire future project. There's animations, constants, mixins (like simple functions but in Sass/SCSS), placeholders (behaves a bit like variables in Sass but more powerfull. Check the official docs for more).
        Take a notice: `projectName/src/shared/ui/common styles/abstracts/_constants.scss` turn to use `CSS variables`! It's far convenient for the result css file (`DRY` principle as is);

      - `projectName/src/components/base` - `segment`, there're Blocks (in BEM terminology). For now there're
        `_normalize.scss` (to softly set your browser default styles to be more 'average' with others one to ease the process of crossbrowsers development),
        `_typography.scss` - this file includes font data and variables (`CSS variables` to be precise) of font size as for example,
        `_common.scss` - this file contains the most basic classes of a project perfomance like titles properties, containers properties, modificators for text classes etc;

      - `projectName/src/components/layout` - `segment`, includes `_content-structure.scss` file with basic layouts to use in a future project (one column or multiple columns as basic (or foundation as you wish) and they can be easily added with the necessary property modificators of new styling classes (e.g. for current paragraph or section to align everything to the center etc as BEM recommends, behaves like `CSS frameworks'` classes do)) (`_content-structure.scss` rely on `flex` or `grid` basics, also depend on mixins in the `projectName/src/shared/ui/common styles/abstracts/_mixins.scss` file so check it out or modify for your needs);

  - `projectName/src/shared/utilities` - `segment`, contains utilities and helpers commonly used in the entire app (assumed to take them from [boilerplate-webpack-gulp-html-css-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components));

    - `projectName/src/shared/utilities/handleFilesWithDynamicHash` - `segment`, the utility to handle appropriately with the files with dynamically generated name hashes. Check the example and docs inside the `projectName/src/shared/utilities/handleFilesWithDynamicHash/getCashedFilename.js` for more;

    - `projectName/src/shared/utilities/handleFilesWithDynamicHash` - `segment`, the utility to improt all files from folder (to nest it to the bundle). Check the example and docs inside the `projectName/src/shared/utilities/handleFilesWithDynamicHash/importAllfromFolder.js` for more;

  **all the next (or higher - ordered `slices`) include Public API `index.js` directly inside the slice (folder) to interract with higher - ordered slices or head - chief over the slices `index.js` file. Use them only to import necessary parts / functionality and to keep `slices` encapsulation**

  2. `projectName/src/entities` — business entities. (e.g., User, Product, Order).  
     More descriptions: Contains the shell of the card with slots for content and the interactive elements. The tile representing the post author is also here, but in a different slice. Simple words say: the product of your internet market, a song of your audioplayer;
  3. `projectName/src/features` — user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch, or in simple case - like button in the post, button for share post etc);
     More descriptions: contains the interactivity of the card (e.g., like button) and the logic of processing those interactions. Simple words say: it's an actions over the `entities`;
  4. `projectName/src/widgets` — compositional layer to combine entities and features into meaningful blocks. (e.g. IssuesList, UserProfile).
     More descriptions: contains the "assembled" post card, with content and interactive buttons that are wired up to the relevant calls on the back-end. Simple words say: it's a bunch of `entities` and `features` over them;
  5. `projectName/src/pages` — compositional layer to construct full pages from entities, features and widgets.
     More descriptions: contains the route components for each page in the app, mostly composition, hardly any logic.
     Within that application, let's consider a post card in a news feed. Simple words say: it's an entire ready page that contain `widgets` or `layers` below it in the hierarchy (**strictly** below ones!!!);

  - `projectName/src/pages/index.html` - it's template page (or initial page) for first `SPA` predefined view and it's a base for `React` injection into the page via `<div id="root"></div>` in the body (the `index.html` from [boilerplate-webpack-gulp-html-css-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components) must be replace with this one!);

  6. `projectName/src/processes` (deprecated) — complex inter-page scenarios. (e.g., authentication);
  7. `projectName/src/app` — app-wide settings, styles and providers.
     More descriptions: contains setup of routing, store and global styles;

  - `projectName/src/app/index.scss` - file with Sass styles that persue the same goal as `index.html` above - bundle global styles;

- `projectName/dist/` - output bundle of a project;
- `.browserslistrc` - file with settings for webpack about prior browsers to traspile app data in order with the settings;
- `.editorconfig` - the project common settings (as for now it's as in RSSchool recommended check the [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for more.  
  **notice**: `EditorConfig` IDE extension required!);
- .`gitignore` - exlude node_modules from git watching and more settings (check out the file);
- `LICENSE` - license file;
- `package.json` - the heart of all.
  Check the scripts (especially, the pathes for webpack configs. Currently: `'./configs/...'`). Scripts already have CLI prefixes to link with config and ignore files;

[Also useful link(RU) about the FSD architecture with clear definition and examples by @IrkaTyman](https://habr.com/ru/articles/795823/);

**Important!** If you tend only to transfer module to upper hierarchy one (e.g. `index.scss` from the `app` layer to the main `index.js`) do the following steps:

```js
// projectName/src/app/index.js
import "./index.scss";
```

than

```js
// projectName/src/index.js
import "./app/index.js";
```

to clarify the `Webpack` to handle it correctly.

If there's a need to use imported as a data (e.g. import `.html` file to handle it as a string) step the following:

```js
// projectName/src/app/index.js
import anyNameYouWish from "../pages/index.html";
export { anyNameYouWish };
```

than

```js
// projectName/src/index.js
import "./app/index.js"; /*e.g. to import index.scss from example above (to demand Webpack load global styles)
this is only to show, that it possible to use import 'entireModule' and import {something} from 'entireModule'
*/
import { anyNameYouWish } from "./app/index.js";
```

If there're files like `chunk.abc5d.(css|js|anyExt)` in the `dist` folder so take care of correctness of usage
dynamic `import()`s because exactly it usage (that is `async` naturally) trigger Webpack to emit `fileChunks` [read more here](https://github.com/webpack/webpack/issues/12464).

#### Best practicies

- **Why to import file into `jsx module` and than use it as `props` in the component**

Benefits:

1. **Dependency Management**: When you import an image, you explicitly specify the dependency between your component and this file. This makes it easier to keep track of which resources are being used and where.

2. **Module Collector processing**: Module collectors such as Webpack can optimize resource utilization. They can change paths, add hashes for caching, minimize file size, and more.

3. **Modularity**: Importing makes your components more modular and reusable. You can move the component to another location, and all its dependencies (including images) will "move" with it.

4. **Ease of updating**: If you need to replace an image, you just change the import in one place, and this change will automatically apply wherever this component is used.

5. **Performance**: Module builders can "lazily" load images (lazy loading), which improves page loading time and performance.

To implement the approach correctly:

- import desired asset file (image, song, video etc)

```jsx
import React, { StrictMode } from "react";
import desiredAssetWithFileNameYouWish from "path/to/file.extension";
```

- create component. e.g.:

```jsx
export function ExampleComponent() {
  return (
    <>
      <div>
        <img
          src={desiredAssetWithFileNameYouWish}
          alt="alternative description"
        />
      </div>
    </>
  );
}
```

- **may be far not the best practice ever but in some cases rather useful**
  specify `props` and `props.children` in the `.jsx` (primarly for components only containing HTML markup, e.g. `projectName/src/widgets/main/ui/index.jsx`) to ease the process of nesting component inside the parent one (more precisely, this is only to read a one more time about `React props and porps.children` because `React` handle `props` specifyed/not specifyed - automatically and perfectly!!!)  
  e.g.:

  ```jsx
  import React, { StrictMode } from "react";

  export function ExampleComponent(props) {
    return (
      <section className="layout-one-column container example__container">
        {props.children}
      </section>
    );
  }
  ```

  where `props` all the properties the initialized component contains currently, `props.children` all the component's children.

  P.S. without explicit `props` and `{props.children}` specifying it works nice too)))

### Integration with [`Connections`](#Connections) links:

**The [boilerplate-webpack-gulp-html-css-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components) must be installed because the boilerplate is only addon for it and strongly require it!**

To integrate the boilerplate do the following steps (**note**: copy the project structure as is!!! Take a notice to the `projectName/src/shared/ui/common styles/base/_common.scss` there **must be** styles for `#root`, `.root__container` and `.main__container`):

- do all the steps in [boilerplate-webpack-gulp-html-scss-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components) first (and then install all desired from [`Connections`](#Connections)) and then come back here;

- copy the `configs`, `projectName`, `.browserslistrc`, `.editorconfig`, `.gitignore` (optionally);

- install current packages as `devDependencies` via bash command below:

```bash
npm i -D @babel/core @babel/preset-react @commitlint/cli babel-loader eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks
```

- install current packages as `dependencies` via bash command below:

```bash
npm i react react-dom
```

- do all the steps from the top of the document's [# !Important](#!Important) (i.e. rename `projectName`, delete unnecessary files);

- add to the `webpack.config.js`(`configs/webpack/webpack.config.js`) 's `module.rules`:

```js
{
  test: /\.(?:js|mjs|cjs|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      configFile: path.resolve(__dirname, '../babel/babel.config.js'),
    },
  },
},
```

this is required for `Webpack` to handle `React` syntax;

- add to the `.eslintrc.cjs`(`configs/eslint/.eslintrc.cjs`) `overrides` (the [boilerplate-eslint-prettier-husky](https://github.com/Dmitriy-Frostoff/boilerplate-eslint-prettier-husky) required!):

```js
{
  files: ['*.js', '*.jsx'],
  extends: [
    'airbnb-base',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
},
```

With the new `packages` releases, the ones above can turn to pumpkin, so check'em out with official docs!!!

### Links:

---

#### Architecture

- [MVC: Model, View, Controller](https://www.codecademy.com/article/mvc);
- [The official docs of Atomic design architecture](https://atomicdesign.bradfrost.com/);
- [The official docs of FSD architecture](https://feature-sliced.design/);
- [The official docs of The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html);
- [Clean Architecture on Frontend by Alex Bespoyasov](https://bespoyasov.me/blog/clean-architecture-on-frontend/);
- [Architecture of modern FRONTEND applications. 5 types. Advantages and disadvantages by `Ulbi TV`(RU)](https://www.youtube.com/watch?v=c3JGBdxfYcU&t=3s);

---

#### React

- [The official website of the React library](https://react.dev/);
- [The official website of the Redux library for global state management](https://redux.js.org/);
- [The official website of the MobX library for global state management](https://mobx.js.org/README.html);
- [The official website of the Zustand library for global state management](https://docs.pmnd.rs/zustand/getting-started/introduction);
- [The official website of the effector UI-logic](https://effector.dev/ru/);
- [The official website of the Next.js The React Framework for the Web](https://nextjs.org/);

---

#### Babel

- [The official website of the Babel](https://babeljs.io/docs/);
- [The official page of the @babel/core at npmjs.com](https://www.npmjs.com/package/@babel/core);
- [The official page of the @babel/preset-env at npmjs.com](https://www.npmjs.com/package/@babel/preset-env);
- [The official page of the @babel/preset-react at npmjs.com](https://www.npmjs.com/package/@babel/preset-react);

---

#### ESLint:

- [The official page of the eslint-plugin-react at npmjs.com](https://www.npmjs.com/package/eslint-plugin-react);
- [The official github repo of the eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react);
- [The official page of the eslint-plugin-react-hooks at npmjs.com](https://www.npmjs.com/package/eslint-plugin-react-hooks);
- [The official page of the eslint-config-airbnb at npmjs.com](https://www.npmjs.com/package/eslint-config-airbnb);

---

#### Webpack

- [The official docs of Webpack](https://webpack.js.org/api/);
- [Official github repo of webpack](https://github.com/webpack/webpack);
- [The official docs of Webpack: Concepts](https://webpack.js.org/concepts/);
- [The official docs of Webpack: Command Line Interface](https://webpack.js.org/api/cli);
- [A mostly complete guide to webpack 5 (2020) by Valentino Gagliardi](https://www.valentinog.com/blog/webpack/)  
  (**note**: a little bit outdated. There's a CMJ webpack config was used, but never the less is far usefull!!!);
- [How to transpile ES modules with webpack and Node.js, Dec 15, 2021 by Alexander Nnakwue](https://blog.logrocket.com/transpile-es-modules-with-webpack-node-js/);
- [Stackoverflow.com answers about dealling with ES modules and '\_\_dirname' in node.js](https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules);
- [Official github repo of webpack-cli](https://github.com/webpack/webpack-cli);
- [Official github repo of webpack-dev-server](https://github.com/webpack/webpack-dev-server);
- [The official awesome webpack resources, libraries, tools and applications](https://webpack.js.org/awesome-webpack/#utility);
- [Official page of babel-loader at webpack.js.org](https://webpack.js.org/loaders/babel-loader/);
- [Official page of the babel-loader at npmjs.com](https://www.npmjs.com/package/babel-loader);
- [Official github repo of babel-loader](https://webpack.js.org/loaders/babel-loader/);
- [Official webpack docs: html-loader](https://webpack.js.org/loaders/html-loader/#root);
- [Official github repo of html-loader](https://github.com/webpack-contrib/html-loader);
- [Official webpack docs: html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root);
- [Official github repo of html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin);
- [Official webpack docs: css-loader](https://webpack.js.org/loaders/css-loader/#root);
- [Official github repo of css-loader](https://github.com/webpack-contrib/css-loader);
- [Official Sass docs](https://sass-lang.com/documentation/);
- [Official Sass Basics](https://sass-lang.com/guide/);
- [Official webpack docs: sass-loader](https://webpack.js.org/loaders/sass-loader/#root);
- [Official github repo of sass-loader](https://github.com/webpack-contrib/sass-loader);
- [Official github repo of resolve-url-loader](https://github.com/bholloway/resolve-url-loader);
- [Official github repo of resolve-url-loader docs](https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md);
- [Official webpack docs: mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#root);
- [Official github repo of mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin);
- [Official webpack docs: ImageMinimizerWebpackPlugin](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/);
- [Official github repo of image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin);
- [Official github repo of imagemin](https://github.com/imagemin/imagemin);
- [Official github repo of imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle);
- [Official github repo of imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran);
- [Official github repo of imagemin-optipng](https://github.com/imagemin/imagemin-optipng);
- [Official github repo of imagemin-svgo](https://github.com/imagemin/imagemin-svgo);
- [Webpack 5 creates chunks even though maxChunks set to 1 only with 2 JS entry points](https://github.com/webpack/webpack/issues/12464#issuecomment-766727668);

---

#### Browserslist

- [Official Browserslist docs](https://browsersl.ist/);
- [Official github repo of Browserslist](https://github.com/browserslist/browserslist);

---

#### BEM

- [Official BEM docs: Quick start](https://en.bem.info/methodology/quick-start/);

---

#### Node.js

- [Official node.js docs](https://nodejs.org/docs/latest/api/globals.html);
- [Official node.js docs: \_\_dirname](https://nodejs.org/docs/latest/api/modules.html#__dirname);
- [Official node.js docs: \_\_filename](https://nodejs.org/docs/latest/api/modules.html#__filename);

#### Connections:

- [boilerplate-eslint-prettier-husky](https://github.com/Dmitriy-Frostoff/boilerplate-eslint-prettier-husky);
- [boilerplate-jest](https://github.com/Dmitriy-Frostoff/boilerplate-jest);
- [boilerplate-webpack-gulp-html-scss-js-components](https://github.com/Dmitriy-Frostoff/boilerplate-webpack-gulp-html-scss-js-components);

#### done: April 21, 2024
