import { useSelector } from 'react-redux';
import {
    ProductCardMedia,
    ProductsCard,
    ProductCardContent,
    ProductCardActions,
    ProductTypography
} from 'pages/products/style';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import ProductDetails from 'pages/products/components/ProductDetails/index';
import Button from 'components/ui-kit/Button';


const ProductCard = ({ id }) => {
    const product = useSelector((state) => state.products);
    const myProduct = product.data[id - 1];

    const [openProductDialog, setOpenProductDialog] = useState(false);
    const handleOrderDialogue = () => {
        setOpenProductDialog(!openProductDialog);
    }
    return (
        <>
            <ProductsCard>
                <ProductCardMedia
                    component="img"
                    image={myProduct['image']} />
                <ProductCardContent sx={{ textAlign: 'center' }}>
                    <ProductTypography>{myProduct['title']}</ProductTypography>
                </ProductCardContent>
                <ProductCardActions>
                    <ProductTypography>Rs: {myProduct['price']}</ProductTypography>
                    <Button content={'View Details'} endIcon={<ArrowForwardIos />} handleFunction={handleOrderDialogue} />
                    <ProductDetails open={openProductDialog} handleDialogue={handleOrderDialogue} id={id} />
                </ProductCardActions>
            </ProductsCard>
        </>
    );
}

export default ProductCard;