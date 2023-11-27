<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Access form data sent from frontend
$regFirstName = $_POST['regFirstName'];
$regLastName = $_POST['regLastName'];
$regEmail = $_POST['regEmail'];
$regStreetBrgy = $_POST['regStreetBrgy'];
$regCity = $_POST['regCity'];
$regPostalCode = $_POST['regPostalCode'];
$regContactNum = $_POST['regContactNum'];
$regVerificationCode = $_POST['regVerificationCode'];
$regUsername = $_POST['regUsername'];
$regPassword1 = $_POST['regPassword1'];
$regPassword2 = $_POST['regPassword2'];

// Now you can use $regFirstName and $regLastName in your PHP logic
// Perform database operations, validations, etc. using these variables

// For example, echoing the received data back to the frontend
echo json_encode([
    'regFirstName' => $regFirstName,
    'regLastName' => $regLastName,
    'regEmail' => $regEmail,
    'regStreetBrgy' => $regStreetBrgy,
    'regCity' => $regCity,
    'regPostalCode' => $regPostalCode,
    'regContactNum' => $regContactNum,
    'regVerificationCode' => $regVerificationCode,
    'regUsername' => $regUsername,
    'regPassword1' => $regPassword1,
    'regPassword2' => $regPassword2
]);
exit;
?>
