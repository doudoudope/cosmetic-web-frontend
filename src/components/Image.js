import React from "react";
import { API } from "../config";
import './css/Image.css';

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            
        />
    </div>
);

export default ShowImage;