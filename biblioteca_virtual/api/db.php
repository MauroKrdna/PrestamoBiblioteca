<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);

// Configurar UTF-8 para evitar errores con acentos
mysqli_set_charset($conn, "utf8");

if ($conn->connect_error) {
  exit(json_encode([
    "status" => "error",
    "message" => "Error de conexión: " . $conn->connect_error
  ]));
}
?>