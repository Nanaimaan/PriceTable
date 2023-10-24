import React from 'react';
import { useContext, useEffect } from 'react';
import { productContext } from '../../context/ProductContextProvider';
import Product from './Product';
import Grid from '@mui/material/Grid';

const Products = () => {
    const {getProducts, products} = useContext(productContext);

    useEffect(()=> {
        getProducts()
    },[])
  
    return (
        <div>
         <Grid sx={{ display:"flex", flexGrow: 1 }} container spacing={5} justifyContent="center" >
       
  
           {
            products.map((product)=>(
                
            <Grid item xs={12}> 
            <Product product={product}/> 
            </Grid>
            ))
           } 

        </Grid>

        </div>
    );
};

export default Products;