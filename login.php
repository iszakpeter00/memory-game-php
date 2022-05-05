<?php
    include_once ('header.php');
?>

        <section class="signup">

            

            <form action="includes/login.inc.php" method="POST">
                <h2>Login</h2>
                <input type="text" name="uid" placeholder="Username or e-mail">
                <input type="password" name="pwd" placeholder="Password">
                <button type="submit" name="submit">Login</button>
            </form>

        </section>

        <?php
            if(isset($_GET['error'])) {
                if($_GET['error'] == 'emptyinput') {
                    echo '<p class="error">Please fill in all fields!</p>';
                }
                else if($_GET['error'] == 'wronglogin') {
                    echo '<p class="error">Incorrect login information!</p>';
                }
            }
        ?>

<?php
    include_once 'footer.php';
?>