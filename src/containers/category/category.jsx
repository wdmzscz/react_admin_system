import React, { Component } from "react";
import { Card, Button, message, Table, Modal, Form, Input } from "antd";
import { reqCategoryList, addCategoryList } from "../../api";
import { PAGE_SIZE } from "../../config";

export default class Category extends Component {
	state = {
		Category: [],
		isModalVisible: false,
		operType: "",
	};

	formRef = React.createRef();

	showAddModal = () => {
		this.setState({
			operType: "Add Category",
			isModalVisible: true,
		});
	};

	showEditModal = () => {
		this.setState({
			operType: "Edit Category",
			isModalVisible: true,
		});
	};

	toAdd = async (values) => {
		let result = await addCategoryList(values);
		const { status, data } = result.data;

		if (status === 0) {
			message.success("So Fucking awesome!!!!!");
			let Category = [...this.state.Category];
			Category.unshift(data);
			this.setState({ Category });
			this.setState({ isModalVisible: false });
			if (this.formRef.current) this.formRef.current.resetFields();
		}
		if (status === 1) {
			message.error("fail");
		}
	};

	handleOk = () => {
		this.formRef.current
			.validateFields()
			.then((values) => {
				this.toAdd(values);
			})
			.catch((error) => {
				message.warning("wrong!!!", 2);
				return;
			});
	};

	handleCancel = () => {
		this.setState({ isModalVisible: false });
		if (this.formRef.current) this.formRef.current.resetFields();
	};
	getCategoryList = async () => {
		let result = await reqCategoryList();
		let { status, msg, data } = result;
		if (status === 200) {
			this.setState({ Category: data.data.reverse() });
		} else {
			message.error(msg, 1);
		}
	};

	componentDidMount() {
		this.getCategoryList();
	}

	render() {
		const dataSource = this.state.Category;
		let { operType, isModalVisible } = this.state;

		const columns = [
			{
				title: "Category",
				dataIndex: "name",
				key: "name",
			},
			{
				title: "Action",
				dataIndex: "age",
				key: "age",
				render: () => {
					return (
						<Button type="primary" onClick={this.showEditModal}>
							Edit Category
						</Button>
					);
				},
				width: "25%",
				align: "center",
			},
		];
		return (
			<div>
				<Card
					title="Default size card"
					extra={
						<Button type="primary" onClick={this.showAddModal}>
							Add
						</Button>
					}
				>
					<Table
						dataSource={dataSource}
						columns={columns}
						bordered
						rowKey="_id"
						pagination={{ pageSize: PAGE_SIZE }}
					/>
				</Card>
				<Modal
					title={operType}
					visible={isModalVisible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<div>
						<Form ref={this.formRef} name="basic">
							<Form.Item
								name="categoryName"
								rules={[
									{
										required: true,
										message: operType,
									},
								]}
							>
								<Input placeholder="Please type in the Category name" />
							</Form.Item>
						</Form>
					</div>
				</Modal>
			</div>
		);
	}
}
