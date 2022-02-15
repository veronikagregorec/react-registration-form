import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DisplayData = ({
	user,
	modalIsOpen,
	handleModalOpen,
	handleModalClose,
}) => {
	return (
		<>
			<div className="divStyle">
				<div className="display">
					<span>
						{user.name} {user.lastname}
					</span>
					<span>{user.gender}</span>
					<span>{user.email}</span>

					<button
						className="btn-details"
						onClick={() => handleModalOpen(user.id)}
					>
						Details
					</button>
				</div>
			</div>
		</>
	);
};

export default DisplayData;
