import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class AddData extends Component {
	render() {
		const {
			name,
			address,
			city,
			lastname,
			phone,
			gender,
			email,
			handleChange,
			handleSubmit,
		} = this.props;
		return (
			<div className="background">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<h2>Registration Form</h2>

					<Col>
						<label>Name</label>
						<input
							autoFocus
							name="name"
							type="text"
							required
							value={name}
							onChange={handleChange}
						/>
					</Col>

					<Col>
						<label>Lastname</label>
						<input
							name="lastname"
							type="text"
							required
							value={lastname}
							onChange={handleChange}
						/>
					</Col>

					<Col>
						<label>Phone Number</label>
						<input
							name="phone"
							type="text"
							required
							value={phone}
							onChange={handleChange}
						/>
					</Col>

					<Col>
						<label>Gender</label>
						<select name="gender" value={gender} onChange={handleChange}>
							<option value="" disabled selected>
								Select gender
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</Col>

					<Col>
						<label>Email</label>
						<input
							name="email"
							type="text"
							required
							value={email}
							onChange={handleChange}
						/>
					</Col>

					<Col>
						<label>City</label>
						<select name="city" value={city} onChange={handleChange}>
							<option value="" disabled selected>
								Select city
							</option>
							<option value="Milano">Milano</option>
							<option value="London">London</option>
							<option value="New York">New York</option>
							<option value="Liverpool">Liverpool</option>
						</select>
					</Col>

					<label>Address</label>
					<input
						name="address"
						type="text"
						required
						value={address}
						onChange={handleChange}
					/>
					<div className="btn-flex">
						<input type="submit" value="Submit" className="btnSubmit" />
					</div>
				</form>
			</div>
		);
	}
}

export default AddData;
