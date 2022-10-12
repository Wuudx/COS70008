import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import About from './components/about/About';
import Login from './components/account/Login';
import BackToTopButton from './components/back-to-top-button/BackToTopButton';
import Blog from './components/blog/Blog';
import ComposerProfile from './components/composer-profile/ComposerProfile';
import ContactUsForm from './components/contact-corelia/ContactUsForm';
import DiscoverComposers from './components/discover-composers/DiscoverComposers';
import Footer from './components/footer/Footer';
import Comments from './components/forum/comment/Comments';
import Forum from './components/forum/Forum';
import Home from './components/home/Home';
import JoinCorelia from './components/join-corelia/JoinCorelia';
import Navbar from './components/navbar/Navbar';
import CompositionInformation from './components/repertoire-library/composition/CompositionInformation';
import RepertoireLibrary from './components/repertoire-library/RepertoireLibrary';
import SearchBar from './components/searchbar/SearchBar';
import { AuthProvider } from './context/context';

// Important so that footer sticks to bottom of page!
const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppDiv>
                    <Navbar />
                    <SearchBar />
                    <BackToTopButton />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/discover-composers'
                            element={<DiscoverComposers />}
                        />
                        <Route path='/about' element={<About />} />
                        <Route
                            path='/discover-composers/:composerId/'
                            element={<ComposerProfile />}
                        >
                            <Route path='about' element={<ComposerProfile />} />
                            <Route
                                path='biography'
                                element={<ComposerProfile />}
                            />
                            <Route
                                path='compositions'
                                element={<ComposerProfile />}
                            />
                        </Route>
                        <Route
                            path='/discover-composer/:composerName/about/'
                            element={<ComposerProfile />}
                        />
                        <Route
                            path='/discover-composers/search'
                            element={
                                <>
                                    <DiscoverComposers />
                                    {/* <SearchResultsContainer /> */}
                                </>
                            }
                        />
                        <Route
                            path='/repertoire-library'
                            element={<RepertoireLibrary />}
                        />
                        <Route
                            path='/repertoire-library/:compositionId/'
                            element={<CompositionInformation />}
                        />
                        <Route path='/forum' element={<Forum />} />
                        <Route
                            path='/forum/post/:postId/comments'
                            element={<Comments />}
                        />
                        <Route path='/contact-us' element={<ContactUsForm />} />
                        <Route path='/join-corelia' element={<JoinCorelia />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                    <Footer />
                </AppDiv>
            </Router>
        </AuthProvider>
    );
}

export default App;
