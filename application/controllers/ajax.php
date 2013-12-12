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
			'success' 	=> $logged_in,
			'msg'		=> $logged_in ? "" : "Invalid username and/or password"
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
}