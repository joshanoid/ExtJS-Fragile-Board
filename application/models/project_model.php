<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class project_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function get_projects($p, $s, $l){
		$this->db->select('p_id as id, p_name as name');
		$qry = $this->db->get('projects', $l, $s);
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