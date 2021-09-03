<?php


    /**
     * só um get aleatorio pra testar se a interação com banco e js ta funcionando direito
     */

$op = $_GET["op"];
    switch ($op) {
        case 'read':
            echo fnRead();
        default:
            break;
    }

    /*/
     * lê dados do bd
     */
    function fnRead(){
        $connection = connect();
        $sql = "SELECT * FROM USUARIO";
        $result = mysqli_query($connection, $sql);
        $json = generateJson($result);
        disconnect($connection);
        return $json;
    }

    /**
     * gera o json
     */
    function generateJson($result){
        $json = "";
        while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $id_usuario = isset($line["id_usuario"]) ? $line["id_usuario"] : null;
            $nome = isset($line["nome"]) ? $line["nome"] : null;
            $email = isset($line["email"]) ? $line["email"] : null;
            $senha = isset($line["senha"]) ? $line["senha"] : null;


            $json .= "{\"id_usuario\":\"".$id_usuario."\",
                    \"nome\":\"".$nome."\", 
                    \"email\":\"".$email."\", 
                    \"senha\":\"".$senha."\"
                     },";
        }
        $json = substr($json, 0, strlen($json) - 1);
        $json = "[" . $json. "]";
        return $json;
    }

    /**
     * conecta no banco de dados mySQL
     */
    function connect(){
        $connection = mysqli_connect("db", "squad5", "squad5");
        mysqli_select_db($connection, "squad5");
        return $connection;
    }

    /**
     * desconecta do banco de dados mySQL
     */
    function disconnect($connection){
        mysqli_close($connection);
    }
?>