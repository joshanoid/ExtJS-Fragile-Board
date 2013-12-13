<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class user_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function login($u, $p){
		$this->db->where(array(
			'usr_username' => $u,
			'usr_password' => $p
		));

		$qry = $this->db->get('users');
		$res = $qry->row_array();

		if(!empty($res)){
			$usersess = array(
				'id'	 	=> $res['usr_id'],
				'username'	=> $res['usr_username'],
				'firstname'	=> $res['usr_first_name'],
				'lastname'	=> $res['usr_last_name'],
				'email'		=> $res['usr_email'],
			);

			$this->session->set_userdata('user', $usersess);
			return $usersess;
		}else{
			return false;
		}
	}

}