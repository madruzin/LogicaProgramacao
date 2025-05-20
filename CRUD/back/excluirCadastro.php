<?php

if(isset($_POST['ID'])){
    include("../conexap/conexao.php");

    $id = $_POST ['ID'];


    //prepara a consulta SQL para excluir o cadastro
    $sql ="DELETE FROM usuario WHERE ID= ?";
    $stmt = $conn->prepare($sql);

    if($stmt) {
        $stmt->bind_param("i",$id);
        //executa a query
        $stmt->execute();

        //Redirecionar o usuário
        Header("location: verificarCadastro.php");
        $stmt->close();
    } else{
        else{
            echo "<div class='mensagem erro'>Erro na consulta </div>";
    }

    $conn->close();

}


/>