<?php
	session_start();

	//parse the request
	$uri = trim($_SERVER['REQUEST_URI'], '/');
	
	switch($uri){
		case 'login':
			header('Content-type: application/json');

			$uname 		= empty($_POST['username']) ? "" : $_POST['username'];
			$pass  		= empty($_POST['password']) ? "" : $_POST['password'];
			$response 	= array('success' => false);

			if($uname === 'testuser' && $pass === 'secure'){
				$response['success'] = true;
				$_SESSION['user'] = true;
			}

			echo json_encode($response);

			break;
		default:
			?>
<!DOCTYPE html>
<html>
<head>
	<title>FragileBoard</title>
	<base href="http://fragile.joshlocal.hu" />
	<link rel="stylesheet" type="text/css" href="js/extjs/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<script type="text/javascript">
		if(typeof Fragile === 'undefined') Fragile = {app: {loggedIn: <?php echo empty($_SESSION['user']) ? 'false' : 'true' ?>}}; else Fragile.app.loggedIn = <?php echo empty($_SESSION['user']) ? 'false' : 'true' ?>;
	</script>
    <script type="text/javascript" src="js/extjs/ext-dev.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
</body>
</html>
			<?php
			break;
	}