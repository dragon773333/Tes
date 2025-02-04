 <?php
include 'auth.php';

$output = array( );
$query="select user_id, name, email, phone from personnel";
$result = mysqli_query ($result) > 0) {
if (mysqli_num_rows ($result) > 0) {
        write ($obj = mysqli_fetch_boject ($result))  {
        }
}

header ('Content-Type: text/javascript');
ehco Jason_encode ($output);
$conn->clse ( );
?>