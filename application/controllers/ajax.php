<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ajax extends CI_Controller {

	public function __construct(){
		parent::__construct();
		header('Content-type: application/json');
	}

	public function index(){ echo json_encode(array('test_ajax' => true)); }

	public function login(){
		$uname = $this->input->post('uname', true);
		$pass  = $this->input->post('password', true);
		$this->load->model('user_model');

		$logged_in = $this->user_model->login($uname, $pass);

		echo json_encode(array(
			'success' 	=> $logged_in !== FALSE,
			'msg'		=> $logged_in !== FALSE ? "" : "Invalid username and/or password",
			'user'		=> $logged_in
		));
	}

	public function logout(){
		$this->session->unset_userdata('user');	

		echo json_encode(array(
			'success' 	=> true
		));
	}

	public function project($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('project_model');

		switch ($operation) {
			case 'create': {
				$data = json_decode($post['data']);
				$response['projects'] = $this->project_model->add_project($data);
				break;
			}
			case 'update': {
				$data = json_decode($post['data']);
				$response['projects'] = $this->project_model->update_project($data);
				break;
			}
			case 'destroy': {
				$data = json_decode($post['data']);
				$this->project_model->delete_project($data->id);
				break;
			}
			case 'read': {}
			default:{
				$res = $this->project_model->get_projects($get['page'], $get['start'], $get['limit']);
				$response['projects'] = $res;
				break;
			}
		}


		echo json_encode($response);
	}

	public function lane($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('lane_model');

		switch ($operation) {
			case 'create': {
				// $data = json_decode($post['data']);
				// $response['projects'] = $this->project_model->add_project($data);
				break;
			}
			case 'update': {
				// $data = json_decode($post['data']);
				// $response['projects'] = $this->project_model->update_project($data);
				break;
			}
			case 'destroy': {
				// $data = json_decode($post['data']);
				// $this->project_model->delete_project($data->id);
				break;
			}
			case 'read': {}
			default:{
				$res = $this->lane_model->get_lanes($get['projectId']);
				$response['lanes'] = $res;
				break;
			}
		}


		echo json_encode($response);
	}

	public function card($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('card_model');

		switch ($operation) {
			case 'switchlane': {
				$this->card_model->switch_lane($post['cid'], $post['lid']);
				break;
			}
			case 'read_setting': {
				$response['setting'] = $this->card_model->get_settings($get['id']);
				break;
			}
		}

		echo json_encode($response);
	}

	public function cardtype($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('card_model');

		switch ($operation) {
			case 'create': {}
			case 'update': {}
			case 'destroy': {}
			case 'read': {}
			default:{
				$res = $this->card_model->get_types();
				$response['types'] = $res;
				break;
			}
		}

		echo json_encode($response);
	}

	public function cardstatus($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('card_model');

		switch ($operation) {
			case 'create': {}
			case 'update': {}
			case 'destroy': {}
			case 'read': {}
			default:{
				$res = $this->card_model->get_statuses();
				$response['statuses'] = $res;
				break;
			}
		}

		echo json_encode($response);
	}

	public function cardpriority($operation){
		$get = $this->input->get();
		$post = $this->input->post();
		$response = array('success' => true);
		$this->load->model('card_model');

		switch ($operation) {
			case 'create': {}
			case 'update': {}
			case 'destroy': {}
			case 'read': {}
			default:{
				$res = $this->card_model->get_priorities();
				$response['priorities'] = $res;
				break;
			}
		}

		echo json_encode($response);
	}
}