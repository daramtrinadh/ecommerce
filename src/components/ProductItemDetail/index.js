import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

const apiConstraints = {
  initial: "initial",
  loading: "loading",
  success: "success",
  failed: "failed",
};

const ProductItemDetail = () => {
  const { id } = useParams();
  const [apiStatus, setStatus] = useState({
    status: apiConstraints.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      setStatus({
        status: apiConstraints.loading,
        data: null,
        errorMsg: null,
      });

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setStatus({
          status: apiConstraints.success,
          data: data,
          errorMsg: null,
        });
      } catch (err) {
        setStatus({
          status: apiConstraints.failed,
          data: null,
          errorMsg: err.message,
        });
      }
    };
    fetchProduct();
  }, [id]);

  const renderSuccess = () => (
    <div className='product-detail'>
      <img
        src={apiStatus.data.image}
        alt={apiStatus.data.title}
        className='product-detail-image'
      />
      <div className='product-detail-info'>
        <h1>{apiStatus.data.title}</h1>
        <p className='product-detail-price'>
          ${apiStatus.data.price.toFixed(2)}
        </p>
        <p className='product-detail-description'>
          {apiStatus.data.description}
        </p>
        <p className='product-detail-category'>
          Category: {apiStatus.data.category}
        </p>
        <div className='product-detail-rating'>
          <span>Rating: {apiStatus.data.rating.rate}</span>
          <span>({apiStatus.data.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );

  const renderFailed = () => (
    <div>
      <h1>Failed</h1>
      <p>{apiStatus.errorMsg}</p>
    </div>
  );

  const renderLoading = () => (
    <div className='loader'>
      <div data-glitch='Loading...' className='glitch'>
        Loading...
      </div>
    </div>
  );

  const renderProductDetail = () => {
    switch (apiStatus.status) {
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
      <Navbar />
      {renderProductDetail()}
    </>
  );
};

export default ProductItemDetail;
