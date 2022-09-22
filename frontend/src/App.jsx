import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BackToTopButton from "./components/back-to-top-button/BackToTopButton";
import Blog from "./components/blog/Blog";
import ContactUsForm from "./components/contact-corelia/ContactUsForm";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import RepertoireLibrary from "./components/repertoire-library/RepertoireLibrary";
import SearchBar from "./components/searchbar/SearchBar";

// Important so that footer sticks to bottom of page!
const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function App() {
    return (
        <Router>
            <AppDiv>
                <Navbar />
                <SearchBar />
                <BackToTopButton />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Note that there is no route for search parameter (e.g: "/discover-composers/?q=:query/") 
                    because react router does not support this. It the aforementioned link as "/discover-composers/" */}
                    <Route
                        path="/repertoire-library"
                        element={<RepertoireLibrary />}
                    />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact-us" element={<ContactUsForm />} />
                </Routes>
                <Footer />
            </AppDiv>
        </Router>
    );
}

export default App;
