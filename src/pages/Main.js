import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//import '../components/css/style.css';

function Main(){
    return (
        <div class='container'>
          <NavBar />
          <main className="px-5 text-center">
              <h1>Cover your page.</h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                                  Download, edit the text, and add your own fullscreen background photo to
                                  make it your own.
              </p>
              <p className="lead">
                  <a href="none" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
              </p>
          </main>
          <Footer />
        </div>
      );
}
export default Main;