import './App.css'
import Navbar from './components/navbar/Navbar'
import TdContainer from './components/containers/TdContainer'
import PropContainer from './components/containers/PropContainer'
import ActionContainer from './components/containers/ActionContainer'
import PropDescription from './components/PropDescription'
import Terminal from './components/Terminal'
import SearchBar from './components/navbar/SearchBar'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<div className='row'>
					<div className='col-12 d-sm-none'>
						<SearchBar />
					</div>
					<TdContainer />
					<div className='col-12 col-sm-3'>
						<PropContainer />
						<ActionContainer />
					</div>

					<div className='col col-sm-6 d-none d-sm-block'>
						<div className='row'>
							<PropDescription />
							<Terminal />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
