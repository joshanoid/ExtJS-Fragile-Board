<!DOCTYPE html>
<html>
<head>
	<title>FragileBoard</title>
	<base href="http://fragile.joshlocal.hu" />
	<link rel="stylesheet" type="text/css" href="js/extjs/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<script type="text/javascript">
		<?php $user = $this->session->userdata('user'); ?>
		if(typeof Fragile === 'undefined') Fragile = {app: {loggedIn: <?php echo empty($user) ? 'false' : 'true' ?>}}; else Fragile.app.loggedIn = <?php echo empty($user) ? 'false' : 'true' ?>;
	</script>
    <script type="text/javascript" src="js/extjs/ext-dev.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
</body>
</html>