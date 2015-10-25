<?php

include_once('config.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$name = $request->name;
$firstname =$request->firstname;
$email = $request->email;
$postalAddress = $request->postalAddress;
$postalCode = $request->postalCode;
$city = $request->city;
$country = $request->country;
$iccMember = $request->iccMember;
$campus = $request->campus;
$birthday = $request->birthday;
$phoneNumber = $request->phoneNumber;


$mysqli->set_charset("utf8");

$query = "INSERT INTO `db554796264`.`inscription`(`NAME`, `FIRSTNAME`, `BIRTHDAY`, `IS_FROM_ICC`, `ICC_CAMPUS`, `EMAIL_ADDRESS`, `PHONE_NUMBER`, `POSTAL_ADDRESS`, `POSTAL_CODE`, `CITY`) VALUES (?,?,?,?,?,?,?,?,?,?)";
$stmt = $mysqli->stmt_init();

if(!$stmt->prepare($query)) {
   print "Failed to prepare statement\n";
}
else {
	$stmt->bind_param("sssissssss", $name, $firstname, $birthday, $iccMember, $campus, $email, $phoneNumber, $postalAddress, $postalCode, $city);
}

$stmt->execute();



$nrows = $stmt->affected_rows;
if (!$nrows || $nrows==-1) {
echo "Nothing has been updated";
echo "An error occured : ".$nrows->error ;
echo "An error occured : ".$stmt->error ;
}
else {
echo $nrows." row has been updated.";
}

$stmt->close();
$mysqli->close();
?>