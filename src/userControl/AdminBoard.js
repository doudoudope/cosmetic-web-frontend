import React from "react";
import Layout from "../components/pageComponents/Layout";
import { isAuthenticated } from "../Routes/apiAuth";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const AdminDashboard = () => {
    const {
        user: { name, email }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header>Admin Links</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <Link className="nav-link" to="/create/category">
                Create Brand
            </Link>
              </ListGroup.Item>
              <ListGroup.Item>
              <Link className="nav-link" to="/create/product">
                Create Product
            </Link>
            </ListGroup.Item> 
            <ListGroup.Item>
            <Link className="nav-link" to="/admin/products">
                Manage Products
            </Link>
            </ListGroup.Item> 
            </ListGroup>
          </Card>
        );
    };

    const adminInfo = () => {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header>Admin Information</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>UserName: {name}</ListGroup.Item>
              <ListGroup.Item>Email: {email}</ListGroup.Item>
            </ListGroup>
          </Card>
        );
    };

    return (
        <Layout
            title="Admin Dashboard"
            description={`Hello Dear ${name}!`}
            className="container-fluid"
        >
            <div className="row" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                <div className="col-3" style={{width:500, margin:20,display:'flex',justifyContent:'center',alignItem:'center'}}>{adminLinks()}</div>
                <div className="col-9" style={{width:500, margin:20,display:'flex',justifyContent:'center',alignItem:'center'}}>{adminInfo()}</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;