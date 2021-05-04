const Pet = () => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h2', {}, 'Luna'), React.createElement('h2', {}, 'Tiger!'), React.createElement('h2', {}, 'Sesus')]
  )
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h1', {}, 'Adopt Me!'), React.createElement(Pet), React.createElement(Pet)]
  )
}
// React.createElement takes three arguments, a) the component to be rendered (can be standard html tags or composite components) b) the props,
// (for standard components, you can define an object and set id and class, while for composite components you can pass props) c) Children components
// Note that the children components can be a single element or an array.
ReactDOM.render(React.createElement(App),
  document.getElementById('root')
)
