<?php

require_once "../actions/db_connect.php";

$resultado = query("SELECT * FROM produtos");
$produtos = [];

while($row = mysqli_fetch_assoc($resultado)){
    $produtos[] = $row;
}

// print_r($produtos);

header("Access-Control-Allow-Origin:*");
$json = json_encode($produtos);

echo $json;
?>