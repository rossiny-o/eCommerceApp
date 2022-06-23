import React, { useEffect } from "react";
import "../scss/Main.scss";
import { Header } from "../components/Header";
import { ArrowLeft } from "react-bootstrap-icons";
// import { useState } from "react";
import { productData } from "../data-info";
import { Container, Row, Col, Button } from "react-bootstrap";
// --
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

// export function Cart() {
//   const { products } = productData;
//   // const [cartItems, setCartItems] = useState([]);
//   // const onAdd = (product) => {
//   //   const exist = cartItems.find((x) => x.id === product.id);
//   //   if (exist) {
//   //     setCartItems(
//   //       cartItems.map((x) =>
//   //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//   //       )
//   //     );
//   //   } else {
//   //     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   //   }
//   // };

//   return (
//     <div>
//         <Header />

//       <CartProvider>
//         {/* <div>
//           {cartItems.length === 0 && (
//             <div className="m-3">
//               <a
//                 href="/"
//                 onClick={<ProductPage onAdd={onAdd} products={products} />}
//                 className="text-decoration-none d-flex"
//               >
//                 <ArrowLeft className="mx-2" /> <h6> Return To Shopping</h6>
//               </a>
//               <h1 className=" cart-with-0 text-muted ">Your Cart Is Empty</h1>
//             </div>
//           )}

//           {cartItems.map((item) => (
//             <Row key={item.id}>
//               <img
//                 alt=""
//                 className="cart-img bg-warning border-0 border-bottom rounded rounded-3"
//               >
//                 {item.image}
//               </img>
//               <i className="fs-4">{item.name}</i>
//               <Button onClick={() => onAdd(item)}>+</Button>
//               {/* implement onRemove below instead of onAdd */}
//               <Button onClick={() => onAdd(item)}>-</Button>
//             </Row>
//           ))}
//         </div>/*}

//       </CartProvider>
//     </div>
//   );
// }}

export const Cart = () => {
  const {
    setItems,
    isEmpty,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();


  // this code below starts a page from the top
  useEffect(() => window.scroll(0, 0), []);

  
  const { products } = productData;
  setItems(products);

  if (isEmpty)
    return (
      <div>
        <Header />
        <div className="m-3">
          <Link to="/" className="text-decoration-none d-flex mt-5">
            <ArrowLeft className="mx-2" />
            <h6>Back</h6>
          </Link>
          <h1 className=" cart-with-0 text-muted ">Your Cart Is Empty</h1>
        </div>
      </div>
    );

  return (
    <div>
      <Header />

      <Container>
        <Row>
          <Link to="/" className="text-decoration-none d-flex mt-5">
            <ArrowLeft className="mx-2" />
            <h6>Back</h6>
          </Link>
          <Col>
            <h5>Cart : {totalUniqueItems}</h5>

            <table
              className="table table-light table-hover m-0"
            >
              <tbody>
            {products.map((product) => {
              return (
                    <tr key={product.id} >
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="cart-img"
                        />
                      </td>
                      <td as="h4">{product.name}</td>
                      <td as="h4">{product.price}</td>
                      <td as="h4"> Shipping {product.shipPrice}</td>
                      <td as="h4">Quantity: {product.quantity} </td>
                      <td>
                        <Button
                          className="ms-2"
                          variant="primary"
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <Button
                          className="ms-2"
                          variant="primary"
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Button
                          className="ms-2"
                          variant="danger"
                          onClick={() => removeItem(product.id)}
                        >
                          Remove Item
                        </Button>
                      </td>
                    </tr>
              );
            })}
            </tbody>
            </table>

            <div className="ms-auto">Total Price: $ {cartTotal} </div>
            <div className="col-auto">
              <Button variant="danger" onClick={() => emptyCart()}>
                Empty Cart
              </Button>
              <Button variant="primary">Checkout</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
