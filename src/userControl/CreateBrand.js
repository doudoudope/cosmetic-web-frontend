import React, { useState } from "react";
import Layout from "../components/pageComponents/Layout";
import { isAuthenticated } from "../Routes/apiAuth";
import { Link } from "react-router-dom";
import { createCategory } from "../Routes/apiAdmin";

const AddCategory = () => {
    const [brand_name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    const handleChange = e => {
        setError("");
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        // make request to api to create category
        //send user._id, token, { name } to apiAdmin
        createCategory(user._id, token, { brand_name }).then(data => {
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={brand_name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-primary">Add Brand</button>
        </form>
    );

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{brand_name} is Added</h3>;
        }
    };

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">Brand already exist</h3>;
        }
    };

    const goBack = () => (
        <div className="mt-3">
            <Link to="/admin/dashboard" className="text-warning">
            <button color="yellow">Back to Dashboard</button>
                
            </Link>
        </div>
    );

    return (
        <Layout
            title="Add a new brand"
            description={`Hello Dear ${user.name}, do you want to add a new brand?`}
        >
            <div className="row" style={{paddingTop:50}}>
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;