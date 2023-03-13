import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  // const [show, setShow] = useState(false);
  const data = [
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-storage-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663790290238",
      productName: "iPhone 14 pro max",
      memory: "512 GB",
      price: "169900",
      colour: "Deep Purple",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-storage-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290205",
      productName: "iPhone 14 pro",
      memory: "512 GB",
      price: "139900",
      colour: "Deep Purple",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660691647109",
      productName: "iPhone 14",
      memory: "512 GB",
      price: "109900",
      colour: "Blue",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660691793956",
      productName: "iPhone 14 Plus",
      memory: "512 GB",
      price: "119900",
      colour: "Blue",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656720518797",
      productName: "iPhone 13",
      memory: "512 GB",
      price: "99900",
      colour: "Red",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656720725187",
      productName: "iPhone 13 Mini",
      memory: "512 GB",
      price: "94900",
      colour: "Red",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662149977576",
      productName: "iPhone 12",
      memory: "512 GB",
      price: "74900",
      colour: "Blue",
    },
    {
      productImages:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-storage-select-202207-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655312146269",
      productName: "iPhone SE",
      memory: "256 GB",
      price: "64900",
      colour: "Red",
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              iPlanet
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">iPlanet</h1>
            <p class="lead fw-normal text-white-50 mb-0">Premium Reseller</p>
          </div>
        </div>
      </header>

      <div className="cart-value">
        <Badge bg="success">CART {count}</Badge>
      </div>

      <div className="card-container">
        {data.map((product, index) => 
          <Cards
            index={index}
            product={product}
            setCount={setCount}
            count={count}
          />
        )}
      </div>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Mohamed Salman Faris <span>2023</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Cards({product, index, setCount, count}) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(!show);
    setCount(count + 1);
  }
  function removeFromCart() {
    setShow(!show);
    setCount(count - 1);
  }
  return (
    
      <Card key={index} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.productImages} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>{product.memory}</Card.Text>
          <Card.Text>
            <span>&#8377;</span>
            {product.price}
          </Card.Text>
          <Card.Text>{product.colour}</Card.Text>

          {!show ? (
            <Button variant="primary" onClick={addToCart}>
              Add to Cart
            </Button>
          ) : (
            ""
          )}

          {show ? (
            <Button variant="danger" onClick={removeFromCart}>
              Remove Cart
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    
  );
}
