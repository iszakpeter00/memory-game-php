<?php
    include_once ('header.php');
?>

    <div class="container">
        
        <h2>Results</h2>

        <table>
            <tr>
                <th class="place">#</th>
                <th class="data">Name</th>
                <th class="data">Time</th>
            </tr>
            <?php
                $conn = mysqli_connect("localhost", "root", "", "memory-game");
                $sql = "SELECT * FROM highscores ORDER BY time ASC";
                $result = mysqli_query($conn, $sql);
                $i=1;

                if($result->num_rows > 0) 
                {
                    while($row = $result->fetch_assoc()) 
                    {
                        echo "<tr><td>" . $i . ".</td><td>" . $row["name"] . "</td><td>" . $row["time"] . " s</td></tr>";
                        $i++;
                    }
                }
            ?>
        </table>
    </div>

<?php
    include_once 'footer.php';
?>