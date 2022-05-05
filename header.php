<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harry Pawter Memory Game</title>
    <link rel="stylesheet" href="src/style.css" type="text/css">
</head>

<body>

    <nav>
        <div class="bar">
            <ul>

                <?php
                    if(isset($_SESSION['useruid'])) {
                        echo '<li><a href="home.php">Home</a></li>';
                        echo '<li><a href="includes/logout.inc.php">Logout</a></li>';
                        echo '<li class="user">' . $_SESSION['useruid'] . '</li>';
                    }
                    else {
                        echo '<li><a href="signup.php">Register</a></li>';
                        echo '<li><a href="login.php">Login</a></li>';
                    }
                ?>

            </ul>
            <div class="title">
                <h1>Harry Pawter Memory Game</h1>
            </div>
        </div>
        
    </nav>