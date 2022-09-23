import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";
import React from "react";

const Container = styled.div`
    display: flex;
    gap: 1em;
`;

// Props passed through using object destructuring.
const FeaturedComposer = ({ featuredComposer }) => {
    return (
        <Container>
            <RoundedImage src={featuredComposer.image} alt="Composer Picture" />
            <p>
                <Link to={`/composers/${featuredComposer.name}`}>
                    {featuredComposer.name}
                </Link>
                <br /> {featuredComposer.description}
            </p>
        </Container>
    );
};

export default FeaturedComposer;
