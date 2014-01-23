<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class card_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function switch_lane($cid, $lid){
		$this->db->where('c_id', $cid);
		$this->db->update('cards', array('c_lane_id' => $lid));

		$this->add_history('Lane change', "Card #{$cid} moved to lane #{$lid}", 'Transitions');
	}

	public function add_history($event, $details, $type = 'Updates'){
		$user = $this->session->userdata('user');
		if(!$user) return;

		return $this->db->insert('card_history', array(
			'ch_type' 	=> $type,
			'ch_event'	=> $event,
			'ch_author'	=> $user['id'],
			'ch_details'=> $details,
			'ch_date'	=> date('Y-m-d H:i:s', time())
		));
	}

	public function get_types(){
		$this->db->select('ct_id as id, ct_name as name');
		$qry = $this->db->get('card_types');
		return $qry->result_array();
	}
	
	public function get_settings($cid){
		$fields = array('id', 'title', 'description', 'type_id', 'status_id', 'priority_id', 'color');
		$select = array();
		foreach ($fields as $f) $select[] = "c_{$f} as {$f}"; 

		$this->db->select(implode(",", $select));
		$this->db->where('c_id', $cid);
		$qry = $this->db->get('cards');
		return $qry->row_array();
	}
}