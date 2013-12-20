<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class lane_model extends CI_Model {

	public function __construct(){
		parent::__construct();
	}

	public function get_lanes($pid){
		$this->db->where('l_project_id', $pid);
		$this->db->select('l_id as id, l_parent_id as parent_id, l_name as name, l_limit as xlimit, l_order as xorder');
		$qry = $this->db->get('lanes');

		//fields: ['id', 'user_name', 'title', 'color']

		$cardsql = "SELECT 
						c.`c_id` as id, 
						CONCAT(u.`usr_first_name`, ', ', u.`usr_last_name`) as user_name, 
						c.`c_title` as title, 
						c.`c_color` as color,
						c.`c_lane_id` as lane_id
					FROM `lanes` l 
					JOIN `cards` c ON l.`l_id` = c.`c_lane_id`
					JOIN `users` u ON c.`c_user_id` = u.`usr_id`
					WHERE l.`l_project_id` = $pid";

		$cardqry = $this->db->query($cardsql);
		$cards = $cardqry->result_array();

		$lanes_tmp = $qry->result_array();
		$lanes = array();
		foreach ($lanes_tmp as $key => $value){ 
			$lanes[$value['id']] = $value;
			$lanes[$value['id']]['cards'] = array();
		}
		
		//Add cards to lanes
		foreach ($cards as $key => $value) {
			$lanes[ $value['lane_id'] ]['cards'][] = $value;
		}

		return array_values($lanes);
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