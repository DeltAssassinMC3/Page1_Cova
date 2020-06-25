
<?php

header('Content-Type: text/html; charset=UTF-8');

if(isset($_POST['email'])) {

$email_to = "ventas@covalu.com";
$email_subject = "Contacto desde el sitio web";

if(!isset($_POST['name']) ||
!isset($_POST['email']) ||
!isset($_POST['tel']) ||
!isset($_POST['category']) ||
!isset($_POST['message'])) {

echo "<script type='text/javascript'>alert('Ocurrió un error y el formulario no ha sido enviado. Por favor, vuelva atrás y verifique la información ingresada');</script>"; 
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['name'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Telefono: " . $_POST['tel'] . "\n";
$email_message .= "Categoria: " . $_POST['category'] . "\n";
$email_message .= "Comentarios: " . $_POST['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
mail($email_to, $email_subject, $email_message, $headers);

echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='http://covalu.com';</script>";
}
?>
