<?php 
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Allow: GET, POST, OPTIONS, PUT, DELETE");
 $method = $_SERVER['REQUEST_METHOD'];
 if($method == "OPTIONS") {
     die();
 }
 
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION

  if (!$conexion) {
    die('No pudo conectarse: ' . mysql_error());
}
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "
                            INSERT INTO `usuario` (`id`, `nombre`, `email`, `password`, `tipo`) VALUES 
                            (0,'$params->nombre','$params->email', '$params->password','$params->tipo')"); 
                           
  mysqli_close($conexion);   
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>