import { loginService } from "network/services/auth.service";
import { setToken } from "utils/commonservices/localstorageservices";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "network/firebase/firebaseConfig";

const useLoginForm = ({ openFailedLoginAlert, setOpenFailedLoginAlert }) => {

    const navigate = useNavigate();

    const { handleSubmit, values, handleChange, errors, handleBlur, touched } = useFormik({
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
                .required('Required')
        }),
        onSubmit: async ({ email, password }) => {
            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                setToken(res.user.accessToken);
                console.log(res.user.accessToken);
                navigate('/home');
            } catch (err) {
                setOpenFailedLoginAlert(true);
                console.log(err);
            }

            console.log("tushar");
            console.log(email, ' ', password)
            // const auth = loginService(email, password);
            // if (auth) {
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

export default useLoginForm;
