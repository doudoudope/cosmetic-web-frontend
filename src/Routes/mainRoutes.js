import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../userControl/Signup';
import Signin from '../userControl/Signin';
import Home from '../components/pages/Home';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../userControl/UserBoard';
import AdminRoute from './AdminRoute';
import AdminDashboard from '../userControl/AdminBoard';
import AddCategory from '../userControl/CreateBrand';
import AddProduct from '../userControl/CreateProduct';
import Shop from '../components/pages/Explore';
import Product from '../components/pages/SingleProduct';
import Cart from '../components/pages/Cart';
import ManageProducts from '../userControl/ManageProducts';
import UpdateProduct from '../userControl/UpdateProduct';
import UpdateCategory from '../userControl/UpdateBrand';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoute path="/admin/products" exact component={ManageProducts} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;