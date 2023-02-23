import {
    Box,
    Typography
} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{
            height: '5vh', borderTop: 'solid 2px',
            backgroundColor: '#424242', color: 'white', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
        }}>
            <Typography>
                Copyright @ Ecommerce RM private ltd
            </Typography>
        </Box>
    )
}

export default Footer;