import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap/Container";
import BsForm from "react-bootstrap/Form";
import Input from "./Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";

const initialValues = { email: "", password: "" };


const LoginForm = () => {
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
        //Important pour que la page ne rafraichisse pas
        event.preventDefault();
        //On fait notre logique au submit ici
        console.log(values);
    }

    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange
        >
            <Form as={BsForm} noValidate>
            <Input id="email" label="Email" type="email" />
            <Input id="password" label="Password" type="password" />
            <Button type="submit">Connexion</Button>
            </Form>
        </Formik>
    );
};

export default LoginForm;