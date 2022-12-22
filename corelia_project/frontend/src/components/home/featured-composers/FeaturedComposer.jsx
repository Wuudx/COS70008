import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";

const Container = styled.div`
    display: flex;
    gap: 1em;
`;

const H4 = styled.h4`
    display: inline;
    margin: 0px;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

// Props passed through using object destructuring.
const FeaturedComposer = ({ featuredComposer }) => {
    let yearOfDeathElement;
    if (featuredComposer.death !== 0) {
        yearOfDeathElement = (
            <>
                <H4>Year of Death:</H4>
                {featuredComposer.death}
            </>
        );
    } else {
        yearOfDeathElement == "";
    }

    return (
        <Container>
            <RoundedImage
                src={featuredComposer.image}
                alt="Composer Picture"
                width="175px"
                height="175px"
            />
            <FlexContainer>
                <Link to={`/discover-composers/${featuredComposer.id}`}>
                    {`${featuredComposer.firstName} ${featuredComposer.lastName}`}
                </Link>
                <H4>Year of Birth:</H4> {featuredComposer.birth}
                {yearOfDeathElement}
                <H4>Nationality: </H4>
                {featuredComposer.nationality_name}
            </FlexContainer>
        </Container>
    );
};

export default FeaturedComposer;
