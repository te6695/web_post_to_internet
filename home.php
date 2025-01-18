<?php
// Backend for processing login and signup forms
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($action === 'login') {
        // Example: Authenticate user (dummy logic)
        if ($username === 'dbu' && $password === 'p@ssw0rd2525') {
            echo 'Login successful';
        } else {
            echo 'Invalid credentials';
        }
    } elseif ($action === 'signup') {
        // Example: Create a new user (dummy logic)
        echo 'Signup successful for user: ' . $username;
    }}
?>