import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";

const FeaturedComposerContainer = styled.div`
    display: flex;
    gap: 1em;
`;

// Props passed through using object destructuring.
const FeaturedComposer = ({ featuredComposer }) => {
    return (
        <FeaturedComposerContainer>
            <RoundedImage src={featuredComposer.image} alt="Composer Picture" />
            <p>
                <Link to={`/composers/${featuredComposer.name}`}>
                    {featuredComposer.name}
                </Link>
                <br /> {featuredComposer.description}
            </p>
        </FeaturedComposerContainer>
    );
};

export default FeaturedComposer;
