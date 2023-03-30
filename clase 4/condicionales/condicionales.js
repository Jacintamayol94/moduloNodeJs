let perfil = " ";

if( perfil == " " ){
    console.log("Debe especificar el perfil del usuraio");
}else if( perfil == "asistente" ){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}else if( perfil == "invitado" ){
    console.log("Usted sólo tiene permiso de consultar datos");
}else{
    console.log("Debe especificar un perfil válido");
}
