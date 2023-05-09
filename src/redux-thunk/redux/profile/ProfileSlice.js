import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        First_Name: '',
        Last_Name: '',
        User_Name: '',
        Email: '',
        Phone: '',
        Address: '',
        firebaseToken: null
    },
    reducers: {
        addFirebaseToken: (state,action) => {
            state.firebaseToken = action.payload.token;
        },
        setProfile: (state, action) => {
            state = action.payload.value;
            return state;
        }
    }
});

export const { addFirebaseToken,setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;