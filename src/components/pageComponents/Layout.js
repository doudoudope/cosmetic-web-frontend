import React from "react";
import Menu from "../pageComponents/Navbar";
import "../css/Layout.css";
import "../../style.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
       <Menu />
        <div className="layout">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;