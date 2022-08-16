import React from "react";
import Layout from "../components/pageComponents/Layout";
import { isAuthenticated } from "../Routes/apiAuth";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Dashboard = () => {
    
    const {
        user: { name, email }
    } = isAuthenticated();

    const userLinks = () => {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Header>User Links</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><Link className="nav-link" to='/cart'>My Cart</Link></ListGroup.Item>        
            </ListGroup>
          </Card>
            
        )
    }

    const userInfo = () => {
        return (
            
            <Card style={{ width: '18rem' }}>
            
            <Card.Header>Registered User Information</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>UserName: {name}</ListGroup.Item>
              <ListGroup.Item>Email: {email}</ListGroup.Item>
            </ListGroup>
          </Card>
        )
    }



    return (
        <Layout 
            title="User Dashboard" 
            description= {`Hello Dear ${name}`}
            className="container-fluid" 
        >
        <div className="row" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
            <div className="col-3" style={{width:500, margin:20,display:'flex',justifyContent:'center',alignItem:'center'}}>
                {userLinks()}
            </div>

            <div className="col-9" style={{width:500, margin:20,display:'flex',justifyContent:'center',alignItem:'center'}}>
                {userInfo()}
                
            </div>
        </div>

        </Layout>
    ); 
}

export default Dashboard;