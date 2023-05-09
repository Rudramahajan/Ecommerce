import {
    TextField,
    Button,
    Grid
} from '@mui/material'

import {
    useSelector,
    useDispatch
} from 'react-redux';

import { useState } from "react";
import { editProfile, setProfile } from 'redux-thunk/redux/profile/ProfileSlice';

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'network/firebase/firebaseConfig';


const ProfileDetails = ({ my_key,getProfile,value }) => {
    const dispatch = useDispatch();
    const ProfileDetail = useSelector((state) => state.profile);
    const [editField, setEditField] = useState(true);
    const [Field, setField] = useState(value);
    const token = useSelector((state) => state.profile.firebaseToken);
    console.log(Field);
    const handleEdit =async () => {
        setEditField(!editField);
        let tempdart = [];
        tempdart = await getDoc(doc(db, 'users', token));
        let myProfile = tempdart.data().profile;
        myProfile[my_key] = Field;
        console.log(Field,' ',my_key);
        await updateDoc(doc(db, 'users', token), {
            profile : myProfile
        });
    //    getProfile();
    }

    return (
        <>
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
                <TextField
                    id="outlined-read-only-input"
                    label={my_key}
                    value={Field}
                    onChange={(e) => setField(e.target.value)}
                    InputProps={{
                        readOnly: editField,
                    }}
                />
                {editField === true ?
                    <Button onClick={handleEdit}><EditIcon /></Button> :
                    <Button onClick={handleEdit}><DoneIcon /></Button>
                }
            </Grid>
        </>
    )
}

export default ProfileDetails;