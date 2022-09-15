import React, { useEffect, useState } from "react";
import BsForm from "react-bootstrap/Form";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useEmailPasswordSignin from "../hooks/useEmailPasswordSignin";
import useGoogleSignin from "../hooks/useGoogleSignin";
import { useDispatch } from "react-redux";
import { updateWholeUser } from "../store/authSlice";

const initialValues = { email: "", name: "", password: "" };
const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const pwMatchError = "Entrez un mot de passe valide";
const requiredFieldError = "Ce champs est requis";
const valideEmailError = "Entrez une adresse email valide";

const LoginForm = () => {
    const signinWithEmailAndPassword = useEmailPasswordSignin();
    const signinWithGoogle = useGoogleSignin();
    const dispatch = useDispatch();

    //On crée un état qui contiendra un objet. Cet objet sera les valeurs initiales de notre formulaire
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    });

    const onChange = (newValue, id) => {
        //On crée notre fonction onChange qui sera passée à chacun de nos inputs
        setFormData({
            ...formData,
            [id]: newValue,
        });
    };

    const onSubmit = (values) => {
        signinWithEmailAndPassword(values.email, values.password);
        dispatch(updateWholeUser(values));
        //Important pour que la page ne rafraichisse pas
        //event.preventDefault();
        //On fait notre logique au submit ici
        //console.log(values);
    }

    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange
        validationSchema={Yup.object({
            email: Yup.string()
                .required(requiredFieldError)
                .email(valideEmailError),
            password: Yup.string()
                .required(requiredFieldError)
                .matches(regex, pwMatchError),
        })}
        >
            <Form as={BsForm} noValidate>
                <Input id="email" label="Email" type="email" />
                <Input id="name" label="Name" />
                <Input id="password" label="Password" type="password" 
                        autoComplete="current-password" />
                
                <Button onClick={signinWithEmailAndPassword} type="button" variant="primary">Connexion</Button>
                <br />
                <Button onClick={signinWithGoogle} type="button" variant="danger">Me connecter avec Google</Button>
            </Form>
        </Formik>
    );
};

export default LoginForm;