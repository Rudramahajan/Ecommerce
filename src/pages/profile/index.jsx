import {
    Paper,
    Grid
} from '@mui/material';

import { ProfileCardMedia } from './style';
import { useDispatch, useSelector } from 'react-redux';

import ProfileDetails from 'pages/profile/components/ProfileDetails/index';
import image from 'assets/images/profileImage.jpg'
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'network/firebase/firebaseConfig';
import { setProfile } from 'redux-thunk/redux/profile/ProfileSlice';
import { MoonLoader } from "react-spinners";
import { LoaderBox } from 'pages/products/style'
const Profile = () => {
    const [myProfile, setMyProfile] = usestate(null);
    console.log(myProfile, 'redux profile');
    const newKeys = Object.keys(myProfile);
    const keys = newKeys.filter((item) => item !== 'firebaseToken');
    const token = useSelector((state) => state.profile.firebaseToken);
    const getProfile = async () => {
        let tempdart = [];
        tempdart = await getDoc(doc(db, 'users', token));
        const newProfile = tempdart.data().profile;
        console.log('this is new profile', newProfile);
        setMyProfile(newProfile)
    }
    useEffect(() => {
        getProfile();
    }, []);
    return (
        <>
            {myProfile === null ? (
                <LoaderBox>
                    <MoonLoader
                        color="#36d7b7"
                        size={100}
                    />
                </LoaderBox>
            ) : (
                <>
            <ProfileCardMedia image={image} container={Paper} />

            <Grid sx={{ marginTop: '4vh' }} container spacing={6}>
                {
                    keys.map((my_key) => {
                        console.log(my_key,' ',myProfile[my_key]);
                        return (
                            <ProfileDetails my_key={my_key} getProfile={getProfile} value={myProfile[my_key]} />
                        )
                    })
                }
            </Grid>
            </>
            )
            }
        </>
    )
}

export default Profile;