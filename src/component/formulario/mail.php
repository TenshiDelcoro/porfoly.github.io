<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

$nombre = $_POST['nombre'];
$pais = $_POST['pais'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$comentario = $_POST['comentario'];

var_dump($nombre)
$rta=mail('ezedelcoro@gmail.com.ar', "Mensaje desde la 
web: $telefono", $comentario);

var_dump($rta);
if( empty(trim($nombre)) ) $nombre = 'anonimo';


$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $nombre $apellido / $email</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;



$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre $apellido <$email> \r\n";
$headers.= "To: Sitio web <ezedelcoro@gmail.com.ar> \r\n";



$rta = mail('ezedelcoro@gmail.com.ar', "Mensaje web: $comentario", $body, $headers );


header("Location: gracias.html" );
