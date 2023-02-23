import { Box, styled, TextField, Card } from '@mui/material';

export const LoginField = styled(TextField)({
    marginBottom: '3vh'
});



export const LoginCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
});

export const LoginBox = styled(Box)({
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
});


