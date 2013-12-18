<!DOCTYPE html>
<html>
<head>
	<title>FragileBoard</title>
	<base href="<?php echo base_url(); ?>" />
	<link rel="stylesheet" type="text/css" href="js/extjs/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link rel="stylesheet" type="text/css" href="fonts/pictos/pictos.css"/>
	<script type="text/javascript" src="js/extjs/ext-dev.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript">
		<?php $user = $this->session->userdata('user'); ?>
		Ext.define("Fragile.settings", {
		    singleton: true,
		    loggedIn: <?php echo empty($user) ? 'false' : json_encode($user) ?>,
		    originalRoute: location.hash
		});
	</script>
</head>
<body>
</body>
</html>