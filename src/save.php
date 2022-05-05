<?php 

    if(isset($_POST['name'])) 
    {
        $name = $_POST['name'];
        $time = $_POST['time'];

        $conn = mysqli_connect('localhost', 'root', '', 'memory-game');

        $sql = "INSERT INTO highscores (`name`, `time`) VALUES ('$name', '$time')";

        $result = mysqli_query($conn, $sql);

        if($result) {
            echo '<p>You have successfully submitted your score!</p>';
        }

    }

?>