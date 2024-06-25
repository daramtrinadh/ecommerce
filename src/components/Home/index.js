import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar'
import Product from '../Product'

import './index.css'

const apiConstraints = {
    initial: 'initial',
    loading: 'loading',
    success: 'success',
    failed: 'failed',
};
const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];
const Home = () => {
    const [apiStatus, setStatus] = useState({
        status: apiConstraints.initial,
        data: null,
        errorMsg: null,
    });
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        const fetchProducts = async () => {
            setStatus((prevStatus) => ({
                ...prevStatus,
                status: apiConstraints.loading,
                data: null,
                errorMsg: null,
            }));

            const url = selectedCategory === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${selectedCategory}`;
            const options = {
                method: 'GET',
            };

            try {
                const fetchedResult = await fetch(url, options);
                const data = await fetchedResult.json();
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    status: apiConstraints.success,
                    data: data,
                    errorMsg: null,
                }));
            } catch (error) {
                console.log(error);
                setStatus((prevStatus) => ({
                    ...prevStatus,
                    status: apiConstraints.failed,
                    data: null,
                    errorMsg: error.message,
                }));
            }
        };
        fetchProducts();
    }, [selectedCategory]);

    const renderSuccess = () => (
        <div>
            <ul className='products-list'>
                {apiStatus.data.map((product) => (
                    <Product key={product.id} product={product}/>
                                 
                ))}
            </ul>
        </div>
    );

    const renderFailed = () => (
        <div>
            <h1>Failed</h1>
            <p>{apiStatus.errorMsg}</p>
        </div>
    );

    const renderLoading = () => (
        <div className="loader">
            <div data-glitch="Loading..." className="glitch">Loading...</div>
        </div>
    );

    const renderProducts = () => {
        const { status } = apiStatus;
        switch (status) {
            case apiConstraints.success:
                return renderSuccess();
            case apiConstraints.failed:
                return renderFailed();
            case apiConstraints.loading:
                return renderLoading();
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar/>
            <div className="categories">
                {categories.map((category) => (
                <button
                    key={category}
                    className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category.toUpperCase()}
                </button>
                ))}
            </div>
            {renderProducts()}
        </>
    );
};

export default Home;
