import React from "react";
import "./css/Main.css";
// import { ProductPage } from "./pages/ProductPage";
import Products from "./components/Products";
// import { productData } from "./data-info";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { productData } from "./data-info";
import { Container, Row } from "react-bootstrap";


function Main() {
  // const [cartItems, setCartItems] = useState([]);
  const {products} = productData;
  return (
   <>
        <Header />
        
         <Container>
          <Row>
            <Products products={products} key={products.id}/>
          </Row>
          </Container>

        {/* footer */}
        <Footer />
  </>
  );
}

export default Main;
