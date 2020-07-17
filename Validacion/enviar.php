<!--<?php 
$nombre = $_POST['nombr'];
$apellido = $_POST['apellid'];
$email = $_POST['emai'];
$telefono = $_POST['telefon'];
$mensaje = $_POST['mensaj'];


$contenido = "Enviado por: " . $nombre . " " . $apellido . ", \r\n";
$contenido .= "E-mail: " . $email . ", \r\n";
$contenido .= "Teléfono: " . $telefono . ", \r\n";
$contenido .= "Mensaje: " . $mensaje . ", \r\n";

$para = 'mailEjemplo@gmail.com';
$asunto ='Mail enviado desde tu sitio web';

mail($para,$asunto,$contenido);

header("Location: ../index.html");
?>


<?php 
$nombre = $_POST['nombr'];
$apellido = $_POST['apellid'];
$email = $_POST['emai'];
$telefono = $_POST['telefon'];
$mensaje = $_POST['mensaj'];


$contenido = "Enviado por: " . $nombre . " " . $apellido . ", \r\n";
$contenido .= "E-mail: " . $email . ", \r\n";
$contenido .= "Teléfono: " . $telefono . ", \r\n";
$contenido .= "Mensaje: " . $mensaje . ", \r\n";

$para = "tongarnr79@gmail.com";
$asunto ="Mail enviado desde tu sitio web";

$mail= mail($para,$asunto,$contenido);
mail($para,$asunto,$contenido);

echo'<script type="text/javascript">
    alert("Gracias por comunicarte, tu mensaje sera respondido a la brevedad");
    window.location.href="../contacto.html";
    </script>';

?>



