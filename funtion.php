<?php
include 'config.php';

function getArticles() {
    global $conn;
    $sql = "SELECT * FROM articles";
    $result = $conn->query($sql);
    return $result;
}

// Add more functions for create, update, delete
?>