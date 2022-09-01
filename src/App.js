import React from "react";
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./About/About";
import Contacts from "./Contacts/Contacts";


class App extends React.Component {
    render() {
        return (
            <div className="site">
              <Header />
              <div className="container">
                <main>
                    <BrowserRouter>
                        <Routes>
                          <Route exact path="/" element={<Rate />} />
                          <Route exact path="/about" element={<About />} />
                          <Route exact path="/contacts" element={<Contacts />} />
                        </Routes>
                    </BrowserRouter>
                </main>
              </div>
              <div className="container" id="cookie_info">
                <div className="site-content">
                  <div className="well">На нашем сайте мы используем cookie.&nbsp;
                    <button className="btn btn-primary btn-sm">OK</button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}

export default App;
