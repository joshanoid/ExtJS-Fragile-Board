<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class lane_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function get_lanes($pid){
		$this->db->where('l_project_id', $pid);
		$this->db->select('l_id as id, l_parent_id as parent_id, l_name as name, l_limit as xlimit, l_order as xorder');
		$qry = $this->db->get('lanes');
		return $qry->result_array();
	}

	public function add_project($data){
		$ins = array();
		foreach ($data as $key => $value) {
			$ins['p_'.$key] = $value;
		}

		$this->db->insert('projects', $ins);
		$data->id = $this->db->insert_id();
		return $data;
	}

	public function update_project($data){
		$pid = $data->id;
		$tmp = $data;

		unset($tmp->id);

		$upd = array();
		foreach ($tmp as $key => $value) {
			$upd['p_'.$key] = $value;
		}

		$this->db->where('p_id', $pid);
		$this->db->update('projects', $upd);
		return $data;
	}

	public function delete_project($pid){
		return $this->db->delete('projects', array('p_id' => $pid));
	}
}