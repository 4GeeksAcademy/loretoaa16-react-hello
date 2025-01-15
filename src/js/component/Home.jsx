import React from "react"; // 1. Import React
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle
import NavBar from "./Navbar.jsx"; // component with export default
import { Footer } from "./Footer.jsx"; //component with export const
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
// 2. Create your first component with PascalCase name
const Home = () => {
	// 3. Code JS

	// 4. Return only one HTML component
	return (
		<div className="text-center">
			<NavBar/>
			<h1 className="text-center mt-5">{'hola'}</h1>
			<Jumbotron/>
			<Alert/>
			<Spinner/>
			{/*<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>*/}
			<Footer/>
		</div>
	);
};

// 5. Export my component
export default Home;

//In the file where i want to show my component
// 6 . I import my component
// 7. Start using it