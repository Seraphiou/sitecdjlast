<?php
    $host_name  = "db554796264.db.1and1.com";
    $database   = "db554796264";
    $user_name  = "dbo554796264";
    $password   = "cdjicc2016";
	$mysqli = new mysqli($host_name,$user_name,$password,$database); 

	if($mysqli->connect_error)
	{
	    die("$mysqli->connect_errno: $mysqli->connect_error");
	}

?>

