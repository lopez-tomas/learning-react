// impure functions
const impure = () => new Date().toLocaleString();
console.log(impure())

const MyComponent = ({ my_property }) => {
  //const { my_property } = props; // the other way
  return (
    <div>
      Name: {my_property}
    </div>
  )
}

const App = () => {
  return (
    <MyComponent my_property={'lalala'}/>
  )
}

export default App
