<?php
session_start();
extract($_POST);



$conn = new mysqli("localhost", "root", NULL, "registration");
$quer = "SELECT * FROM users WHERE Email='$email' and Password='$password'";
$res = $conn->query($quer);


if ($res->num_rows > 0) {
   $id=$email;
    $_SESSION['id'] =$id;
    echo "success";
}

else

{
    echo "Invalid";
}


?>
