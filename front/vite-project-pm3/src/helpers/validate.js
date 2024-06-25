const validate = (datos) => {
    const errors = {}
    const regEx = /\w+@+[gmail]\w+\.+[a-z]/;


    // if(!regEx.test(datos.email)){
    //     console.log("estoy fallando");
    //     errors.email = "Dirección de correo invalida"
    // }else{
    //     errors.email = ""
    // }
    return errors;
}

export default validate;