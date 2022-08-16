import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from '../Image';
import { addItem, updateItem, removeItem } from './cartCRUD';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../css/Card.css";
const Cards = ({
product,
showViewProductButton = true,
showAddToCartButton = true,
cartUpdate = false,
showRemoveProductButton = false,
setRun = f => f,
run = undefined
// changeCartSize
}) => {
const [redirect, setRedirect] = useState(false);
const [count, setCount] = useState(product.count);

const showViewButton = showViewProductButton => {
return (
  showViewProductButton && (
    <Link to={`/product/${product._id}`} className="mr-2">
       <Button variant="success">View item</Button>

    </Link>
  )
);
};
const addToCart = () => {
// console.log('added');
addItem(product, setRedirect(true));
};

const shouldRedirect = redirect => {
if (redirect) {
  return <Redirect to="/cart" />;
}
};

const showAddToCartBtn = showAddToCartButton => {
return (
  showAddToCartButton && (
    
    <Button variant="warning"onClick={addToCart}>Add to cart</Button>
  )
);
};

const showStock = quantity => {
return quantity > 0 ? (
  <span className="badge badge-outline-primary badge-pill">In Stock </span>
) : (
  <span className="badge badge-outline-primary badge-pill">Out of Stock </span>
);
};

const handleChange = productId => event => {
setRun(!run); // run useEffect in parent Cart
setCount(event.target.value < 1 ? 1 : event.target.value);
if (event.target.value >= 1) {
  updateItem(productId, event.target.value);
}
};

const showCartUpdateOptions = cartUpdate => {
return (
  cartUpdate && (
    <div>
      <br/>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Quantity</span>
        </div>
        <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
      </div>
    </div>
  )
);
};
const showRemoveButton = showRemoveProductButton => {
return (
  showRemoveProductButton && (
    <Button variant="danger"
      onClick={() => {
        removeItem(product._id);
        setRun(!run); 
      }}
    >
      Remove item
    </Button>
  )
);
};
return (
  <Card style={{ width: '17rem' }}>
      <ShowImage item={product} url="product" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        {shouldRedirect(redirect)}
        <ListGroup variant="flush">
        <ListGroup.Item>{product.description.substring(0, 150)}</ListGroup.Item>
        <ListGroup.Item className='black-1'>$ {product.price}</ListGroup.Item>
      </ListGroup>
      {showStock(product.quantity)}
    <br />
    <br />
    {showViewButton(showViewProductButton)}

    {showAddToCartBtn(showAddToCartButton)}

    {showRemoveButton(showRemoveProductButton)}
    
    {showCartUpdateOptions(cartUpdate)}
      </Card.Body>
    </Card>

);
};

export default Cards;