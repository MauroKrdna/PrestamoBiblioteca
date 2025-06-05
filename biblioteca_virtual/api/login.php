<?php
header("Content-Type: application/json");
include("db.php");

$data = json_decode(file_get_contents("php://input"), true);
$email    = trim($data['email']);
$password = trim($data['password']);

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit(json_encode(["status" => "error", "message" => "Correo inválido"]));
}

// Buscar el usuario
$sql = "SELECT * FROM usuarios WHERE correo = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
  $user = $result->fetch_assoc();

  // Verificar la contraseña
  if (password_verify($password, $user['contrasena'])) {
    echo json_encode([
      "status" => "success",
      "name"   => $user['nombre'],
      "email"  => $user['correo'],
      "role"   => $user['rol']
    ]);
  } else {
    echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Usuario no encontrado"]);
}
?>