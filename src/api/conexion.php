<?php

// DATOS DE CONEXION A LA BASE DE DATOS
function conexion() {
  $conexion = mysqli_connect("localhost", "root", "", "encuestas");
  
  return $conexion;
}

?>