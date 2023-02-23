import { styled, Button } from "@mui/material";

const NavigationLink = styled(Button)({
    color: 'white',
    "&:hover": {
        color: 'black'
    }
});

export default NavigationLink;