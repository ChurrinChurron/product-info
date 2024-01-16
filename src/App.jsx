import Product from './components/Product'
import Headphones from "./assets/headphone.png"

function App() {

  return (
    <>
      <Product 
        imgProduct={Headphones}
        titleProduct="Razer Kraken Kitty Edt Gaming Headset Quartz"
        oldPrice="1 599"
        actualPrice="799"/>
    </>
  )
}

export default App
