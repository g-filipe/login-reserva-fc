<?php
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