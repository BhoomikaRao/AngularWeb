<?php

extract($_POST);

$quer = "INSERT INTO users (USN,Name,Email, Password) VALUES('$usn','$username','$email', '$password')";

$conn = new mysqli("localhost", "root", NULL, "registration");

$res = $conn->query($quer);


//$res = mysqli_query($conn, $quer);
if ($res) {
    # code...
    echo "Success";

} else {
    # code...
    echo "Invalid";
}
?>
