import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../src/components/store/index";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route render={props => (
                    <>
                        <Header {...props}/>
                        <Routes/>
                        <Footer/>
                    </>
                )}/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;