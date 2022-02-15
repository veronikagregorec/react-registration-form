import React from "react";
import DisplayData from "./DisplayData";

const DataList = ({
	users,
	modalIsOpen,
	handleModalOpen,
	handleModalClose,
}) => {
	return (
		<div>
			<h2
				className="display"
				style={{ marginTop: "40px", marginBottom: "40px" }}
			></h2>
			{users.map((user) => (
				<DisplayData
					user={user}
					key={user.id}
					modalIsOpen={modalIsOpen}
					handleModalOpen={handleModalOpen}
					handleModalClose={handleModalClose}
				/>
			))}
		</div>
	);
};

export default DataList;
