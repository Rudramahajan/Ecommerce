import { Button } from "@mui/material";

const CustomButton = ({ content,endIcon=null,handleFunction}) => {
    return (
        <>
            <Button sx={{
                color: '#424242',
                "&:hover": {
                    backgroundColor: '#424242',
                    color: 'white'
                }
            }} onClick={handleFunction} endIcon={endIcon}>
                {content}
            </Button>
        </>
    )
}

export default CustomButton;