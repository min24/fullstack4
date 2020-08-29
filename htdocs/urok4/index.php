<?php


$age = (string) 30;
$name="nguyan";

echo gettype($age);
echo gettype($name);


const VERSION = '2.1.8';
const PI = 3.14;
const TYPE_ADMIN = 1;
const TYPE_USER  = 2;

$person = new stdClass;
$person->name = 'nguyen';
$person->age = 30;

header('content-type: application/json');

$jsonContent = json_encode($person);

echo $jsonContent;

?>