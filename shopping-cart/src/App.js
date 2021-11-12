import { Component } from 'react'
import Products from './components/Products'

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
        <Products
          add_to_cart={() => console.log('It does nothing')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
