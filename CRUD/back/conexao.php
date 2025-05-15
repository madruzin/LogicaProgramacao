<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "faculdade";

// Criando conexão

$conn = new mysqli($serverName, $userName, $password, $dbName)

//validação de conexão

if ($conn->connect_error){
    echo "Conexão Falhou";
} else {
    echo "Conexão feita com sucesso";
}

?>