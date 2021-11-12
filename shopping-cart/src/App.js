import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' },
    ],
    cart: [
      //{ name: 'Tomato', price: 1500, img: '/products/tomato.jpg', amount: 1 },
    ],
  }

  add_to_cart = (product) => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name)) {
      const new_cart = cart.map(x => x.name === product.name
        ? ({
          ...x,
          amount: x.amount + 1,
        })
        : x)
      return this.setState({ cart: new_cart })
    }   
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      })
    })
  }

  render() {
    console.log(this.state.cart)
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            add_to_cart={this.add_to_cart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
