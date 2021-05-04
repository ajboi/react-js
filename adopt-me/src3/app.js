const Pet = (props) => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h2', {}, props.name), React.createElement('h3', {}, props.animal), React.createElement('h4', {}, props.breed)]
  )
}

const App = () => {
  return React.createElement(
    'div',
    {},
    [React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(
        Pet,
        { name: 'tiger', animal: 'dog', breed: 'German Shepherd' }
      ),
      React.createElement(
        Pet,
        { name: 'leonard', animal: 'squirrel', breed: 'idk' }
      )
    ]
  )
}
// React.createElement takes three arguments, a) the component to be rendered (can be standard html tags or composite components) b) the props,
// (for standard components, you can define an object and set id and class, while for composite components you can pass props) c) Children components
// Note that the children components can be a single element or an array.
ReactDOM.render(React.createElement(App),
  document.getElementById('root')
)
