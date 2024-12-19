import React from "react"; 
import List from "./List";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center list-group ms-5">
			<List/>
		</div>
	);
};

export default Home;
