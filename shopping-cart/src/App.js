import { Component } from 'react'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <p>Hello, World!</p>
      </div>
    )
  }
}

export default App;
