import React, { useState, useEffect } from "react";
import Layout from "../pageComponents/Layout";
import { getProducts } from "../../Routes/apiCore";
import Image from 'react-bootstrap/Image';
import logo from '../BrandsPics/logo_transparent.png';
import Card from "../pageComponents/Card";
import Search from "../pageComponents/SearchBox";
import Brands from "../pageComponents/Brands.jsx";
import "../../style.css"
import "../css/Home.css"
const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts("sold").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };
    useEffect(() => {
        
        loadProductsBySell();
    }, []);

    return (
        <><Layout
            title="Pink Pacific cosmetic shop"
            description="Be gorgeous inside out"
            className="container-fluid"
        >
            <Search />
            <Brands/>
            <div className="empty"></div>
            <hr/>
            <h2 className="bestSeller mb-4">Best Sellers</h2>
        
            
            <div className="row">
                {productsBySell.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>
        </Layout>
        
        <div class="container buttombar" style={{padding:0,margin:0}} >
                <div class="photo_words">
                    <div class="photo">
                    <Image className="header_image" src={logo} alt="Logo" />
                    </div>
                    <div class="words">
                        <table>
                            <tr>
                                <h2>Contact Info:</h2>

                            </tr>
                            <tr>
                                <td>Email Address:</td>
                                <td>pinkpacific5610@gmail.com</td>
                            </tr>
                            
                            <tr>
                                <td>Phone Number:</td>
                                <td>604-788-9152</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </div></>
    );
};

export default Home;
