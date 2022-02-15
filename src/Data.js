import React, { Component } from "react";
import AddData from "./AddData";
import firebase from "./firebase";
import DataList from "./DataList";
import Modal from "react-modal/lib/components/Modal";

class Data extends Component {
	state = {
		users: [],
		name: "",
		lastname: "",
		phone: "",
		gender: "",
		email: "",
		address: "",
		city: "",
		modalIsOpen: false,
	};

	componentDidMount() {
		firebase.get("/users.json").then((response) => {
			const fetchedUsers = [];

			for (let key in response.data) {
				fetchedUsers.push({
					...response.data[key],
					id: key,
				});
			}

			this.setState({
				users: fetchedUsers,
			});
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const Data = {
			name: this.state.name,
			lastname: this.state.lastname,
			phone: this.state.phone,
			gender: this.state.gender,
			email: this.state.email,
			address: this.state.address,
			city: this.state.city,
		};

		firebase.post("./users.json", Data).then((response) => {
			console.log(response);

			const users = [...this.state.users, { ...Data, id: response.data.name }];

			this.setState({
				users: users,
				name: "",
				lastname: "",
				phone: "",
				gender: "",
				email: "",
				address: "",
				city: "",
			});
		});
	};

	handleModalOpen = (id) => {
		const user = this.state.users.find((user) => user.id === id);

		this.setState({
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			phone: user.phone,
			gender: user.gender,
			address: user.address,
			city: user.city,
			id: user.id,
			modalIsOpen: true,
		});
	};

	handleModalClose = () => {
		this.setState({
			modalIsOpen: false,
		});
	};

	render() {
		const {
			users,
			name,
			lastname,
			phone,
			gender,
			email,
			address,
			city,
			modalIsOpen,
		} = this.state;
		return (
			<div className="container">
				<AddData
					name={name}
					lastname={lastname}
					phone={phone}
					gender={gender}
					email={email}
					address={address}
					city={city}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<DataList
					users={users}
					modalIsOpen={modalIsOpen}
					handleModalOpen={this.handleModalOpen}
					handleModalClose={this.handleModalClose}
				/>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => this.handleModalClose()}
					style={{
						overlay: {
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.2)",
						},
						content: {
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							background: "#fff",
							width: "500px",
							height: "250px",

							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "10px",
							marginBottom: "50px",
							borderRadius: "5px",
						},
					}}
				>
					<span>
						{name} {lastname}
					</span>
					<span>{phone}</span>
					<span>{gender}</span>
					<span>{email}</span>
					<span>{city}</span>
					<span>{address}</span>
				</Modal>
			</div>
		);
	}
}

export default Data;
