import React,{useState,useEffect}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Careers from './Careers';
import Employees from './Employees';
import Faq from './Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service1';
import "../src/App.css"
import Policy from "./components/Policy"
import CombinedNav from './components/CombinedNav';
import PageNotFound from './components/PageNotFound'
import Terms from './components/Terms';

function MainLayout({ children }) {
  return (
    <>
      <CombinedNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function MinimalLayout({ children }) {
  return <main>{children}</main>;
}

function App() {
  
  return (
    <div >
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/Home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Service />
            </MainLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Employees />
            </MainLayout>
          }
        />
        <Route
          path="/faqs"
          element={
            <MainLayout>
              <Faq />
            </MainLayout>
          }
        />
        <Route
          path="/contactus"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <MainLayout>
              <Policy />
            </MainLayout>
          }
        />
        <Route
          path="/termsandconditions"
          element={
            <MainLayout>
              <Terms />
            </MainLayout>
          }
        />

        <Route
          path="*"
          element={
            <MinimalLayout>
              <PageNotFound />
            </MinimalLayout>
          }
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
