import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Products/action';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const ProductList = () => {

    const [searchParams] = useSearchParams();
    const [page , setPage ] = useState(1);
    const [limit] = useState(4);
    const dispatch = useDispatch();
    const products = useSelector((store)=> store.productReducer.products);
    const totalPages = Math.ceil(15/limit);

    let obj = {
        params:{
           category: searchParams.getAll("category"),
           gender: searchParams.getAll("gender"),
           _sort : searchParams.get("order") && "price",
           _order: searchParams.get("order"),
          //  _limit : limit,
          //  _page : page
        },
    }

    useEffect(()=> {

     dispatch(getProducts(obj))
     
    },[searchParams , totalPages, page])
    



  return (
    <div>
    <DIV>
      {
        products.length >0 && products.map((el)=> 
        <ProductCard key={el.id} {...el}/>
     ) }
    </DIV>
    <StyledPagination>
      {
        new Array(totalPages).fill(0).map((_ , i)=> (
          <PageButton key = {i+1} onClick={()=> setPage(i+1)}>{i + 1}</PageButton>
        ))
      }
    </StyledPagination>

    </div>

  )
}

const DIV = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    
`

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#007bff" : "#f7f7f7")};
    color: ${(props) => (props.active ? "#fff" : "#333")};
  }
`;


export default ProductList
