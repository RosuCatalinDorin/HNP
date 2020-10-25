<?php
/**
 * Created by PhpStorm.
 * User: Paul.Sas
 * Date: 01/09/2017
 * Time: 7:08 PM
 */

require_once('config.php');
session_start();

$hadde = array(
    'Content-Type: application/json'
);

$url =  HNP_API;
$content = json_encode(array("username"=>USERNAME,"password"=>PASSWOERD));

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER,
    array("Content-type: application/json"));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $content);

$json_response = curl_exec($curl);

$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

$response = json_decode($json_response, true);

setcookie("HNP", $response['token'] , time() + (86400 * 30), "/");


