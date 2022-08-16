import React, { useState, useEffect } from 'react';
import Layout from '../pageComponents/Layout';
import { read, listRelated } from '../../Routes/apiCore';
import Card from '../pageComponents/Card';

const SingleProduct = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <Layout
            title={product && product.name}
            description="Please check out the product below and its related products"
            className="container-fluid"
        >
            <div >
                <div >
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>

                <div className="col-12" style={{padding:15}}>
                    <h4 className="mb-4">Related products</h4>
                    <div className="row">
                    {relatedProduct.map((p, i) => (
                        
                            <Card key={i} product={p} />
                        
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SingleProduct;