<?php
	session_start();

	$_SESSION['password'] = $_POST['password'];
	$_SESSION['login'] = $_POST['login'];
	
	echo $_SESSION['password'];
	
	echo $_SESSION['login'];


?>