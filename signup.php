<?php
    include_once ('header.php');
?>

        <section class="signup">

            

            <form action="includes/signup.inc.php" method="POST">
                <h2>Register</h2>
                <input type="text" name="name" placeholder="Full name">
                <input type="text" name="email" placeholder="E-mail">
                <input type="text" name="uid" placeholder="Username">
                <input type="password" name="pwd" placeholder="Password">
                <input type="password" name="pwdrepeat" placeholder="Repeat password">
                <button type="submit" name="submit">Register</button>
            </form>

        </section>

        <?php
            if(isset($_GET['error'])) {
                if($_GET['error'] == 'emptyinput') {
                    echo '<p class="error">Please fill in all fields!</p>';
                }
                else if($_GET['error'] == 'invaliduid') {
                    echo '<p class="error">Please enter a valid username!</p>';
                }
                else if($_GET['error'] == 'invalidemail') {
                    echo '<p class="error">Please enter a valid email!</p>';
                }
                else if($_GET['error'] == 'passwordsdontmatch') {
                    echo '<p class="error">Passwords do not match!</p>';
                }
                else if($_GET['error'] == 'usernametaken') {
                    echo '<p class="error">Username or email already taken!</p>';
                }
                else if($_GET['error'] == 'stmtfailed') {
                    echo '<p class="error">Unknown error, try again!</p>';
                }
                else echo '<p class="success">Registration successful!</p>';
            }
            
        ?>
<?php
    include_once 'footer.php';
?>