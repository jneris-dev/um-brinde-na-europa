import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Login } from "./components/Login"
import { Register } from "./components/Register"

function App() {

	return (
		<div className="App">
			<Banner />
			<Register />
			<About />
			<Footer />
		</div>
	)
}

export default App
