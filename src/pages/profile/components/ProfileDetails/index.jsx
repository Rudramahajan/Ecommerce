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
import { editProfile } from 'redux-thunk/redux/profile/ProfileSlice';

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';


const ProfileDetails = ({ my_key }) => {
    const dispatch = useDispatch();
    const ProfileDetail = useSelector((state) => state.profile);
    const [editField, setEditField] = useState(true);
    const [Field, setField] = useState(ProfileDetail[my_key]);

    const handleEdit = () => {
        setEditField(!editField);
        dispatch(editProfile({ my_key, Field }));
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