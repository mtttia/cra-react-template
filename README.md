# cra-react-template
template for create react app

# Package installed and configurated
- React router dom [https://www.reactrouter.com/] (v.6)
- react redux [https://react-redux.js.org/]
- pwa support [https://create-react-app.dev/docs/making-a-progressive-web-app]
- bootstrap [https://getbootstrap.com/] (v.5)
- mui, material ui [https://mui.com/]
- sass [https://sass-lang.com/]

# get started
in your environment:
- `git clone https://github.com/mtttia/cra-react-template.git`
- `npx create-rect-app my-app --template file:./cra-react-template`

# central memory with redux

## Documentation
For all the issues go to https://react-redux.js.org/tutorials/quick-start.

Redux was implemented using the instructions from the previous link.

## General
The state is implemented in `src / app / store.js`

All the slice are implemented in `src / features / ...`, to implement a slice follow the number.js example, or go to the https://react-redux.js.org/tutorials/quick-start tutorial

## Save in local storage
To save the state in LocalStorage go to `src / app / store.js` and read the istruction.

# Router
## Documentation
For all the issues go to https://www.reactrouter.com/docs/en/v6/getting-started/tutorial.

React router dom was implemented using the instructions from the previous link.

## General
The router is implemented in `src / index.jsx`.

All the route are implemented in `src / routes / ...`, to implement a route follow the home.jsx example, or go to the https://www.reactrouter.com/docs/en/v6/getting-started/tutorial tutorial

# Theme
## Template personalization
to customize the theme, edit the `src / theme / palette.js` file, if you change the structure of the palette object, change the structures of the lightTheme and darkTheme objects of `src / theme / muiTheme.js` accordingly.

For example, if you add a field in the palette, add it also in muiTheme.

If you want to change the body, use the `src / theme / themeLoader.js` file

## Reading theme in the application
`import { useTheme } from "@mui/material/styles"`

All'interno del componente:

`const theme = useTheme()`

`theme.palette` will have all the values of the currently used palette.

For other style setting see https://mui.com/customization/theming/.

# Template root
- public: (all public file, like create-react-app default template)
- src 
  - app
    - store.js: react redux store config file
  - components: react components to use in the app
  - features: react redux slice
  - routes: react router endpoint component
  - theme
    - muiTheme.js: theme that will be exported in the application
    - palette.js: color palette in the application
    - themeLoader.js: export the theme in the application and edit the style of the body
  - ... other file are like create-react-app default template
