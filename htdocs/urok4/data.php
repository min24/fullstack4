<?php

$students =[];

$student = new stdClass;
$student->name= 'Bui Van Nguyen';
$student->age = 30;

$students[] = $student;

$student = new stdClass;
$student->name= 'Nguyen Cao Anh';
$student->age = 23;

$students[] = $student;

$student = new stdClass;
$student->name= 'Dao Van Tung';
$student->age = 25;

$students[] = $student;


header('Access-Control-Allow-Origin: *');
header('content-type: application/json');

sleep(2);
echo json_encode($students);

?>