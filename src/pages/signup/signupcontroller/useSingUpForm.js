import { loginService } from "network/services/auth.service";
import { setToken } from "utils/commonservices/localstorageservices";
import { useNavigate } from "react-router-dom";


import { useFormik } from "formik";
import * as Yup from 'yup';
import { auth } from "network/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "network/firebase/firebaseConfig";
import { addFirebaseToken, editProfile } from "redux-thunk/redux/profile/ProfileSlice";
import { useDispatch } from "react-redux";



const useSingUpForm = ({ signupSuccess, setSignupSuccess,setOpenFailedLoginAlert }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { handleSubmit, values, handleChange, errors, handleBlur, touched, resetForm } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .min(13, 'Must be 13 characters or less')
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 charater and more')
                .required('Required'),
        }),
        onSubmit: async ({ email, password }) => {
            try{

                const res = await createUserWithEmailAndPassword(auth, email, password);
                console.log(res);
                setSignupSuccess(true);
                const docRef = await addDoc(collection(db, "users"), {
                    email,
                    password,
                    cart: [],
                    order: [],
                    profile: {
                        First_Name: '',
                        Last_Name: '',
                        User_Name: '',
                        Email: '',
                        Phone: '',
                        Address: '',
                        firebaseToken: null
                    }
                });
                console.log(docRef.id);
                dispatch(addFirebaseToken({ token: docRef.id }));
                let tempdart = await getDoc(doc(db, 'users', docRef.id));
                let myProfile = tempdart.data().profile;
                myProfile.firebaseToken = docRef.id;
                await updateDoc(doc(db, 'users', docRef.id), {
                    profile : myProfile
                });
                resetForm();
            }
            catch(err){
                setOpenFailedLoginAlert(true);
            }
            // const auth = loginService(email, password);
            // if (auth) {
            //     setToken();
            //     navigate('/home');
            // } else {
            //    setOpenFailedLoginAlert(!openFailedLoginAlert);
            // }
        },
    });

    return {
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched
    }

}

export default useSingUpForm;
