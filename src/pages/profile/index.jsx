import {
    Paper,
    Grid
} from '@mui/material';

import { ProfileCardMedia } from './style';
import { useSelector } from 'react-redux';

import ProfileDetails from 'pages/profile/components/ProfileDetails/index';
import image from 'assets/images/profileImage.jpg'

const Profile = () => {
    const myProfile = useSelector((state) => state.profile);
    const keys = Object.keys(myProfile);
    return (
        <>
            <ProfileCardMedia image={image} container={Paper} />

            <Grid sx={{ marginTop: '4vh' }} container spacing={6}>
                {
                    keys.map((my_key) => {
                        return (
                            <ProfileDetails my_key={my_key} />
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Profile;