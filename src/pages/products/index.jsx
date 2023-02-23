import { useEffect } from "react";
import { fetchProducts } from "redux/product/productsSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { MoonLoader } from 'react-spinners'
import { LoaderBox } from 'pages/products/style'

import ProductCard from "pages/products/components/ProductCard/index";

const ProductsList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const product_id = products.data.map((element) => {
        return element.id;
    });
    return (
        <>
            <div style={{ marginBottom: '3vh' }}>
                {products.loading === true ?
                    (
                        <LoaderBox>
                            <MoonLoader
                                color="#36d7b7"
                                size={100}
                            />
                        </LoaderBox>
                    )
                    :
                    (
                        <Grid container spacing={6}>
                            {product_id.map((id) => {
                                return (
                                    <Grid key={id} item md={4} sm={6} xs={12}>
                                        <ProductCard key={id} id={id} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                }
            </div>
        </>
    )

};

export default ProductsList;