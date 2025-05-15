<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>verificarCadastro</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
<header>
        <nav>
            <ul>
                <li><a href="../index.php">Início</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="">Listas Usuários</a></li>
            </ul>
        </nav>
    </header>

    <main> 
        <section id="containerSection">
            <form action="verificarCadastro.php" method="post">
            <input type="email" placeholder="informe seu e-mail" name="email" id="email">
            <input type="submit" value="Buscar">
    </form>
</section>
<section>

    <?php
        //verificar se o campo e-mail está preenchido

        if(isset($_POST["email"])){
            //exibir as informaçõespassadas pelo form
           //echo var_dump($_POST);
        
            //Salva o e-mail enviado
            $email =$_POST["email"];

            //Recebe as informações de conexão com  DB banco de dados
            include("../conexao/conexao.php");

            //Consultando ao banco de dados 
            $sql ="SELECT * FROM usuarios WHERE email= ?";
            
            //Preparar a conexão junto da consulta
            $stmt = $conn->prepare($sql);
        
            //Validando se a conexão foi feita com sucesso
            if($stmt){
                //Troca a informação de e-mail pela ? no $sql
                $stmt->bind_param("s",$email);
                //Executa o Comando
                $stmt->execute();
                //Salva o resultado da consulta 
                $resultado = $stmt->get_result();
                
                if ($resultado->num_rows >0){
                    echo "ELE EXISTE";
                    //Armazenar as informações dele
                    $row = $resultado->fetch_assoc();
                    echo var_dump($row);
                }else{ 
                    echo "ELE NÃO EXISTE";
                }
            }
        } 
    ?>  


</section>



    </main>
</body>
</html>