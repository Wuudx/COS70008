import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RoundedImage from '../../../shared-styled-components/RoundedImage';
import React from 'react';

const Container = styled.div`
    display: flex;
    gap: 1em;
`;

// Props passed through using object destructuring.
const FeaturedComposer = ({ featuredComposer }) => {
    return (
        <Container>
            <RoundedImage src={featuredComposer.image} alt='Composer Picture' />
            <div>
                <Link
                    to={`/discover-composers/${
                        featuredComposer.id
                    }`}
                >
                    {featuredComposer.firstName +
                        ' ' +
                        featuredComposer.lastName}
                </Link>
                <br />
                <br />
                Year of Birth: {featuredComposer.birth}
                <br />
                {featuredComposer.death != 0 && (
                    <p>Year of Death: {featuredComposer.death}</p>
                )}
                <br />
                Nationality: {featuredComposer.nationality_detail}
            </div>
        </Container>
    );
};

export default FeaturedComposer;
