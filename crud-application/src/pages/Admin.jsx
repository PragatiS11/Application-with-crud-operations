import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postProduct } from "../redux/Products/action";

const initialState = {
  image: "",
  price: 0,
  brand: "",
  name: "",
  category: "",
  gender: "",
};
const Admin = () => {
  const [product, setProduct] = useState(initialState);
   const dispatch = useDispatch()


  const handleChange = (e) => {
    const { value, name } = e.target;
    //  console.log(name , value);
    setProduct((prev) => {
      return { ...prev, [name]: name==="price" ? +value : value };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(product)
    dispatch(postProduct(product))
  };

  return (
    <StyledAdmin>
      <h1>Add Products</h1>
      <form onSubmit={handlesubmit}>
        <StyledInput
          type="text"
          placeholder="Image"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <StyledInput
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          placeholder="Brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          placeholder="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <StyledSelect
          name="category"
          onChange={handleChange}
          value={product.category}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Shoes</option>
        </StyledSelect>
        <StyledSelect name="gender" onChange={handleChange} value={product.gender}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </StyledSelect>
        <StyledButton type="submit">Add Product</StyledButton>
      </form>
    </StyledAdmin>
  );
};

const StyledAdmin = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  height: 40px;
  font-size: 16px;
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledSelect = styled.select`
  height: 40px;
  font-size: 16px;
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  width: 50%;
  height: 40px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Admin;
