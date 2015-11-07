<?php

session_start();

if(empty($_SESSION["activememberid"])){
	echo "login or join";
}else{
	echo "logout";
}

?>