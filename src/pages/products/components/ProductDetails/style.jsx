import { styled, Typography, CardMedia, DialogActions, DialogContent } from "@mui/material";

export const ProductTypography = styled(Typography)({
    fontSize: '15px',
    marginBottom: '1.5vh',
    textAlign: 'left',
});

export const ProductTitleTypography = styled(Typography)({
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    display: 'inline'
});


export const ProductCardMedia = styled(CardMedia)({
    height: '20vh',
    width: '100%',
    objectFit: 'scale-down'
});

export const ProductDialogActions = styled(DialogActions)({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2vh'
});

export const ProductDialogContent = styled(DialogContent)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
});