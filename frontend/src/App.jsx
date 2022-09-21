import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DiscoverComposers from "./components/discover-composers/DiscoverComposers";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchbar/SearchBar";
import RepertoireLibrary from "./components/repertoire-library/RepertoireLibrary";

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
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Note that there is no route for search parameter (e.g: "/discover-composers/?q=:query/") 
                    because react router does not support this. It the aforementioned link as "/discover-composers/" */}
                    <Route
                        path="/discover-composers/"
                        element={<DiscoverComposers />}
                    />
                    <Route
                        path="/repertoire-library"
                        element={<RepertoireLibrary />}
                    />
                </Routes>
                <Footer />
            </AppDiv>
        </Router>
    );
}

export default App;
