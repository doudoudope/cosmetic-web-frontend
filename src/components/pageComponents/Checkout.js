import React from "react";
import { isAuthenticated } from "../../Routes/apiAuth";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Checkout = ({ products }) => {
    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            
            <Button variant="info">Checkout</Button>
        ) : (
            <Link to="/signin">
                <Button variant="info">Sign in to checkout</Button>{' '}
            
            </Link>
        );
    };

    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            <br/>
            {showCheckout()}
        </div>
    );
};

export default Checkout;
