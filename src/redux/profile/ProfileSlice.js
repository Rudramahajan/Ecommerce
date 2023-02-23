import { createSlice } from '@reduxjs/toolkit';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        First_Name: 'Rudra',
        Last_Name: 'Mahajan',
        User_Name: 'rm_2001',
        Email: 'rudra@gmail.com',
        Phone: '7723813756',
        Address: '534,Alok Nagar,Indore'
    },
    reducers: {
        editProfile: (state, action) => {
            state[action.payload.my_key] = action.payload.Field;
        }
    }
});

export const { editProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;