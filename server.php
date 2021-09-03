<?php

    /**
     * gets basicos
     */

$op = $_GET["op"];
    switch ($op) {
        case 'getUsuario':
            echo getUsuario();
            break;
        case 'getAgendamentos':
            echo getAgendamentos();
            break;
        case 'getCalendario':
            echo getCalendario();
            break;
        default:
            break;
    }

    /*/
     * entrega os dados (sem senha) do usuario
     */
    function getUsuario(){
        $email = $_GET["email"];
        $connection = connect();
        $sql = "SELECT * FROM USUARIO WHERE USUARIO.email = '$email'";
        $result = mysqli_query($connection, $sql);
        $json = jsonUsuario($result);
        disconnect($connection);
        return $json;
    }


    /*/
     * entrega os dados de agendamento de um usuario
     */
    function getAgendamentos() {
        $id_usuario = $_GET["id"];
        $connection = connect();
        $sql = "SELECT * FROM AGENDA WHERE AGENDA.id_usuario = '$id_usuario'";
        $result = mysqli_query($connection, $sql);
        $json = jsonAgendamentos($result);
        disconnect($connection);
        return $json;
    }

    /*/
     * entrega os dados de agendamento de um mes por escritorio para montar calendario
     */
    function getCalendario() {
        $escritorio = $_GET["escritorio"];
        $mes = $_GET["mes"];
        $ano = $_GET["ano"];
        $connection = connect();
        $sql = "SELECT * FROM AGENDA WHERE mes = '$mes' AND ano='$ano' AND escritorio='$escritorio'";
        $result = mysqli_query($connection, $sql);
        $json = jsonAgendamentos($result);
        disconnect($connection);
        return $json;
    }

    /**
     * gera json dados usuario
     */
    function jsonUsuario($result){
        $json = "";
        while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $id_usuario = isset($line["id_usuario"]) ? $line["id_usuario"] : null;
            $nome = isset($line["nome"]) ? $line["nome"] : null;
            $email = isset($line["email"]) ? $line["email"] : null;
            $isAdmin = isset($line["isAdmin"]) ? $line["isAdmin"] : null;

            $json .= "{\"id_usuario\":\"".$id_usuario."\",
                    \"nome\":\"".$nome."\", 
                    \"email\":\"".$email."\", 
                    \"isAdmin\":\"".$isAdmin."\"
                     },";
        }
        $json = substr($json, 0, strlen($json) - 1);
        $json = "[" . $json. "]";
        return $json;
    }

    /**
     * gera json com dados de agendamentos
     */
    function jsonAgendamentos($result){
        $json = "";
        while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $id_reserva = isset($line["id_reserva"]) ? $line["id_reserva"] : null;
            $id_usuario = isset($line["id_usuario"]) ? $line["id_usuario"] : null;
            $escritorio = isset($line["escritorio"]) ? $line["escritorio"] : null;
            $dia = isset($line["dia"]) ? $line["dia"] : null;
            $mes = isset($line["mes"]) ? $line["mes"] : null;
            $ano = isset($line["ano"]) ? $line["ano"] : null;
            $mesa = isset($line["mesa"]) ? $line["mesa"] : null;
            $confirmado = isset($line["confirmado"]) ? $line["confirmado"] : null;

            $json .= "{\"id_reserva\":\"".$id_reserva."\",
                    \"id_usuario\":\"".$id_usuario."\", 
                    \"escritorio\":\"".$escritorio."\", 
                    \"dia\":\"".$dia."\",
                    \"mes\":\"".$mes."\",
                    \"ano\":\"".$ano."\",
                    \"mesa\":\"".$mesa."\",
                    \"confirmado\":\"".$confirmado."\"
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
        mysqli_set_charset($connection, "utf8mb4");
        return $connection;
    }

    /**
     * desconecta do banco de dados mySQL
     */
    function disconnect($connection){
        mysqli_close($connection);
    }
?>