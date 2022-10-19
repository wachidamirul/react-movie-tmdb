import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/:category/search/:keyword" element={<Catalog />} />
					<Route path="/:category/:id" element={<Detail />} />
					<Route path="/:category" element={<Catalog />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
