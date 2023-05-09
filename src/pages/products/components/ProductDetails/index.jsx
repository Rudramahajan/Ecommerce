import {
    Dialog,
    DialogTitle,
    Rating
} from '@mui/material';

import {
    ProductTitleTypography,
    ProductDialogActions,
    ProductCardMedia,
    ProductTypography,
    ProductDialogContent
} from 'pages/products/components/ProductDetails/style';

import { useSelector } from 'react-redux';
import CartButton from 'pages/products/components/ProductDetails/CartButtom/index';

const ProductDetails = ({ open, handleDialogue, id }) => {
    const productsList = useSelector((state) => state.products);
    const product = productsList.data[id - 1];
    return (
        <>
            <Dialog
                open={open}
                onClose={() => handleDialogue()}>
                <DialogTitle>
                    <ProductCardMedia
                        component="img"
                        image={product['image']} />
                </DialogTitle>
                <ProductDialogContent>
                    <ProductTitleTypography>{product['title']}</ProductTitleTypography>
                    <ProductTypography><ProductTitleTypography>Category</ProductTitleTypography> : {product['category']}</ProductTypography>
                    <ProductTypography><ProductTitleTypography>Description</ProductTitleTypography> : {product['description']}</ProductTypography>
                    <ProductTypography>Rating : <Rating name="read-only" value={product['rating']['rate']} readOnly /></ProductTypography>
                    <ProductTypography><ProductTitleTypography>Rs</ProductTitleTypography> : {product['price']}</ProductTypography>
                </ProductDialogContent>
                <ProductDialogActions>
                    <CartButton id={id} handleDialogue={handleDialogue} />
                </ProductDialogActions>

            </Dialog>
        </>
    )
}

export default ProductDetails;