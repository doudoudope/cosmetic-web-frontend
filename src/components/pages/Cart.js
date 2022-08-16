import React, { useState, useEffect } from "react";
import Layout from "../pageComponents/Layout";
import { getCart } from "../pageComponents/cartCRUD";
import Card from "../pageComponents/Card";
import Checkout from "../pageComponents/Checkout";


const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

     
  useEffect(() => {
    setItems(getCart());
  }, [run]);



    const showItems = items => {
        return (
            <div className="col-12">
                <h2 className="mb-4" style={{paddingTop:57}}>Your cart has {`${items.length}`} items</h2>
                <hr />
                <div className="row">
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
                </div>
            </div>
        );
    };

    const noItemsMessage = () => (
        <div>
        <h2 style={{paddingTop:50}}>
            You have nothing in the cart yet <br /> 
        </h2>
        
        <br/>
        </div>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Check out your cart items or continue shopping"
            className="container-fluid"
        >
            <div >
                <div  style={{paddingLeft:50}}>
                    <div >
                    {items.length > 0 ? showItems(items) : noItemsMessage()}
                    </div>
                </div>

                <div style={{paddingLeft:50}}>
                    <h2 className="mb-4" >Your cart summary</h2>
                    <hr />
                    <br/>
                    <Checkout products={items} />
                    <br/>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
