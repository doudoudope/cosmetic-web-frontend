import React, { useState, useEffect } from "react";
import Layout from "../components/pageComponents/Layout";
import { isAuthenticated } from "../Routes/apiAuth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../Routes/apiAdmin";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const deleteProducts = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);
    const goBack = () => (
        <div>
            <Link to="/admin/dashboard" className="text-warning">
            <button color="yellow">Back to Dashboard</button>        
            </Link>
        </div>
    );
    return (
        <Layout
            title="Manage your Products"
            description="Please update or delete products"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gitcenter" style={{marginTop: 50, textAlign:'center'}}>
                        Total {products.length} products
                    </h2>
                    
                    <ul className="list-group">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>
                                <Link to={`/admin/product/update/${p._id}`}>
                                    <span className="badge badge-success">
                                        Update
                                    </span>
                                </Link>
                                <span
                                    onClick={() => deleteProducts(p._id)}
                                    className="badge badge-danger "
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
            <div>
            {goBack()}
            <br/>
            </div>
        </Layout>
    );
};

export default ManageProducts;