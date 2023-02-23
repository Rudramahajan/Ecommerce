import {
    CardMedia,
    styled,
    Card,
    CardActions,
    CardContent,
    Typography,
    Box
} from "@mui/material";

export const ProductsCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ProductCardContent = styled(CardContent)({
    width: '20vw'
})

export const ProductCardMedia = styled(CardMedia)({
    height: '20vh',
    width: '100%',
    objectFit: 'scale-down'
});

export const ProductCardActions = styled(CardActions)({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2vh'
});

export const ProductTypography = styled(Typography)({
    fontSize: '15px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export const LoaderBox = styled(Box)({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})