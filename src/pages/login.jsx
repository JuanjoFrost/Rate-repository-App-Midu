import react from "react";
import { Text, View , TextInput, Button, StyleSheet} from "react-native";
import StyledTextInput from "../components/StyledTextInput";
//formik
import { Formik, useField } from "formik";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/validation";

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 15,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12
    }
});

/**Formik crea un contexto que envuelve el formulario y puedes utilizar los input
los cuadros de textos de una manera mucho más fácil
1.-Tenemos que decirle los valores iniciales del formulario*/
 
const initialValues ={
    email: '',
    password: ''
}

/**2.- Extraemos el nombre del campo y el resto de ellos */

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error ={meta.error}
                value={field.value}
                onChangeText={ value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

/** 3.- validación FORMIK
const validate = values => {
    const errors = {}
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,4}$/;

    if (!values.email) {
        errors.email = 'Email is required';
    }else if(!emailRegex.test(values.email)){
        errors.email = 'Invalid email address';
    }
    console.log(errors);
    return errors;
}*/

/*Validation YUP*/



export default function LogInPage(){
    return <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({handleSubmit}) => {
            return ( 
            <View style={styles.form}>
                <FormikInputValue 
                    placeholder='E-mal'
                    name='email'
                    />
                 <FormikInputValue
                    placeholder='Password' 
                    name = 'password'
                    secureTextEntry
                    />
                <Button onPress={handleSubmit} title="log in"/>
            </View>
            )
        }}
    </Formik>
}