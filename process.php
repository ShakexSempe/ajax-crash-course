<?php 
echo 'processing...';

// check for a GET variable
if(isset($_GET['name'])) {
    echo 'GET: Your name is '. $_GET['name'];
}