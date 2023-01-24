import LoginCSS from './Login.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const validateLoginForm = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .required("Required field")
});



const LoginForm = (props) => {

    const onSubmit = (values, {setSubmitting, setStatus}) => {
        props.login(values.email, values.password, values.rememberMe, setStatus)
        setSubmitting(false)
    }

    return (<div className={LoginCSS.form_wrapper}>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={validateLoginForm}
            validateOnBlur
            validationSchema={validationSchemaLoginForm}
            onSubmit={onSubmit}
        >

            {({errors, touched, status, isValid}) => (<Form>
                <div>
                <span className={((errors.email && touched.email) || status) ? LoginCSS.error_form : null}>
                    <Field name="email" type="email" placeholder="E-mail"/>
                </span>
                    <ErrorMessage name="email" component="span" className={LoginCSS.error_message}/>
                </div>

                <div>
                <span className={((errors.password && touched.password) || status) ? LoginCSS.error_form : null}>
                    <Field name="password" type="Password" placeholder="password"/>
                </span>
                    <ErrorMessage name="password" component="span" className={LoginCSS.error_message}/>
                </div>


                <div>
                    <Field name="rememberMe" type="checkbox"/>
                    <label htmlFor={'rememberMe'}> remember me </label>
                </div>

                <div className={LoginCSS.status}>
                    {status}
                </div>

                <div>
                    <button type="submit"
                            disabled={(errors.email || errors.password)}>Submit
                    </button>
                </div>

            </Form>)}

        </Formik>

    </div>)

}

export default LoginForm