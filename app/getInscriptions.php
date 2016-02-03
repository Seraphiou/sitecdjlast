<?php

	include_once('config.php');
	$mysqli->set_charset("utf8");
	if($_SESSION['connected']==true){
		if ($result = $mysqli->query("Select * from `db554796264`.`inscription`")) {

		    while($row = $result->fetch_array(MYSQL_ASSOC)) {
		        $myArray[] = $row;
		    }
		    echo json_encode($myArray);
		}
	}
	    
    /* Libère le résultat */
    $result->close();
?>