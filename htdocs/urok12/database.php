<?php

class database {

	protected $config;

	protected $table = '';

	public function __construct($config){
		$this->config = $config;
		$this->connect();

	}

	protected function connect(){
		$this->connection = new mysqli(
			$this->config['host'],
			$this->config['user'],
			$this->config['password'],
			$this->config['databaseName'],
		);

		if ($this->connection->connect_errno > 0){
			die('Loi ket noi den co so du lieu');
		}
	}

	public function table($tableName){
		$this->table = $tableName;
		return $this;
	}

	public function delete($rowId){
		$sql = "DELETE FROM $this->table WHERE id = ?";
		$statement = $this->connection->prepare($sql);
		$statement->bind_param('i', $rowId);

		return $statement->execute();
	}


	public function getAll(){
		$sql = "SELECT * FROM $this->table";
		$statement = $this->connection->prepare($sql);

		$statement->execute();

		$data = $statement->get_result();

		$finalData = [];
		while ( $row = $data->fetch_object() ){
			$finalData[] = $row;
		}

		return $finalData;
	}

	public function getLimit(){
		// lay 1 so dong, vd 10 dong
	}

	public function getRow($rowId){
		// Lay ra 1 dong nhat dinh
	}

	public function update($where, $updateData){
		
	}
}



?>