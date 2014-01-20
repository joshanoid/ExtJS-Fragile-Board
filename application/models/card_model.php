<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class card_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function switch_lane($cid, $lid){
		$this->db->where('c_id', $cid);
		$this->db->update('cards', array('c_lane_id' => $lid));
	}
}