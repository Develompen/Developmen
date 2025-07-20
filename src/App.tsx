import ContactPanel from "./pages/Contact/index";
import About from "./Widgets/Main/About";
import Experience from "./Widgets/Main/Experience";
import Portfolio from "./Widgets/Main/Portfolio";
import Services from "./Widgets/Main/Services";
import NavBar from "./Widgets/NavBar/NavBar";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useEffect } from 'react';


const App = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setActive(true);
		}, 4000); 
		return () => clearTimeout(timer); 
	}, []);
	const [active, setActive] = useState<boolean>(false);
	if (!active) {
		return<LoadingPage/>
	}	
	
	return (
		<>
			<NavBar/>
			<About/>
			<Experience/>
			<Services/>
			<Portfolio/>
			<ContactPanel/>
		</>
	)
}

export default App;