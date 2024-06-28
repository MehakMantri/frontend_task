import React, { useState } from "react";
import { Row, Col, Button, Modal, message } from "antd";
import SimpleTable from "./SimpleTable";
import InputHandler from "./InputHandler";

const MainComponent = () => {
  const [users, setUsers] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (values) => {
    const newUser = {
      id: users.length + 1,
      ...values,
    };
    setUsers([...users, newUser]);
    message.success("User added successfully!");
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
    message.success("User deleted successfully!");
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditModalVisible(true);
  };

  const handleEditSubmit = (values) => {
    setUsers(users.map((user) => (user.id === editingUser.id ? { ...user, ...values } : user)));
    setIsEditModalVisible(false);
    setEditingUser(null);
    message.success("User updated successfully!");
  };

  return (
    <div style={{ padding: 24 }}>
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <InputHandler onSubmit={handleAddUser} />
          </div>
        </Col>
      </Row>
      
      <Row justify="center" gutter={16}>
        <Col span={12}>
          <SimpleTable
            dataSource={users}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
          />
        </Col>
      </Row>

      <Modal
        title="Edit User"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        <InputHandler
          onSubmit={handleEditSubmit}
          editMode={true}
          initialData={editingUser}
        />
      </Modal>
    </div>
  );
};

export default MainComponent;
