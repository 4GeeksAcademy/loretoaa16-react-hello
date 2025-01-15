import React from "react"; // 1. Import React
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle

// 2. Create your first component with PascalCase name
const Home = () => {
	// 3. Code JS

	// 4. Return only one HTML component
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

// 5. Export my component
export default Home;

//In the file where i want to show my component
// 6 . I import my component