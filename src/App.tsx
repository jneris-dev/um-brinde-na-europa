import { useState } from "react"

import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

function App() {
	const [outletNavigation, setOutletNavigation] = useState('login');

	return (
		<div className="App">
			<Banner outlet={setOutletNavigation} />
			<div id="outlet">
				{outletNavigation === 'login' ?
					<Login />
					: outletNavigation === 'cadastre-se' &&
					<Register />
				}
			</div>
			<About />
			<Footer />
		</div>
	)
}

export default App
