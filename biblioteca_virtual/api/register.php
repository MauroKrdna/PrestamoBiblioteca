<?php
header("Content-Type: application/json");
include("db.php");

$data = json_decode(file_get_contents("php://input"), true);

$name     = $data['name'];
$email    = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$phone    = $data['phone'];
$role     = 'usuario';  // por defecto

$sql = "INSERT INTO usuarios (nombre, correo, contrasena, celular, rol)<?php
header("Content-Type: application/json");
include("db.php");

$data = json_decode(file_get_contents("php://input"), true);

$name     = trim($data['name']);
$email    = trim($data['email']);
$password = trim($data['password']);
$phone    = trim($data['phone']);
$role     = 'usuario';  // Rol por defecto

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit(json_encode(["status" => "error", "message" => "Correo inválido"]));
}

// Verificar si el correo ya existe en la base de datos
$sql_check = "SELECT id FROM usuarios WHERE correo = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
  exit(json_encode(["status" => "error", "message" => "El correo ya está registrado"]));
}

// Hashear la contraseña
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (nombre, correo, contrasena, celular, rol) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $hashed_password, $phone, $role);

if ($stmt->execute()) {
  echo json_encode(["status" => "success", "message" => "Usuario registrado"]);
} else {
  echo json_encode(["status" => "error", "message" => "Error al registrar"]);
}
?>
        VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $password, $phone, $role);

if ($stmt->execute()) {
  echo json_encode(["status" => "success", "message" => "Usuario registrado"]);
} else {
  echo json_encode(["status" => "error", "message" => "Error al registrar"]);
}
