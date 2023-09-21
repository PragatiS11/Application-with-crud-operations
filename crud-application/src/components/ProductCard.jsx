import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ProductCard = ({id,image,name,brand,price,gender,category}) => {
  return (
    <StyledCard>
       <StyledImage   style = {{ width: "330px" , height: "200px"}}src={image} alt="image"/>
       <StyledTitle>{name}</StyledTitle>
       <StyledInfo>
       <StyledPrice>Price: {price}</StyledPrice> 
       <StyledBrand>Brand: {brand}</StyledBrand>
       <StyledCategory>Category: {category}</StyledCategory>
       <StyledGender>Gender: {gender}</StyledGender>
       </StyledInfo>
       <StyledButton>
         <Link style ={{textDecoration: "none" , color: 'white'}} to = {`/edit/${id}`}>Edit</Link>
       </StyledButton>
    </StyledCard>
  )
}


const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const StyledTitle = styled.h3`
  margin: 10px 0;
  font-size: 20px;
`;

const StyledInfo = styled.div`
  margin-bottom: 10px;
`;

const StyledPrice = styled.p`
  font-size: 16px;
`;

const StyledBrand = styled.h3`
  font-size: 16px;
  margin: 5px 0;
`;

const StyledCategory = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const StyledGender = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const StyledButton = styled.button`
  background-color: #a4caf2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

export default ProductCard
