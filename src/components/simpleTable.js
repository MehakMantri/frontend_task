import React from "react";
import { Table, Button } from "antd";

const SimpleTable = ({ dataSource = [], handleEditUser, handleDeleteUser }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
        <Button type="link" style={{ backgroundColor: 'blue', color: 'white', marginRight: 8}} onClick={() => handleEditUser(record)}>Edit</Button>
        <Button type="link" style={{ backgroundColor: 'red', color: 'white'}} onClick={() => handleDeleteUser(record.id)}>Delete</Button>
      </span>
      ),
    },
  ];

  return (
    <div>
      {dataSource.length ? (
        <Table dataSource={dataSource} columns={columns} rowKey="id" style={{ width: '60%' }}/>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
