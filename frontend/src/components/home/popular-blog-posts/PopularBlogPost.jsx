import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";

const PopularBlogPostFlexContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 30%;
    flex-shrink: 0;
`;

const PopularBlogPost = ({ popularBlogPost }) => {
    return (
        <PopularBlogPostFlexContainer>
            <RoundedImage
                src={popularBlogPost.profilePicture}
                alt="Profile Picture"
            />
            <Link to={`/blogs/${popularBlogPost.title}/`}>
                <p>{popularBlogPost.preview}</p>
            </Link>
        </PopularBlogPostFlexContainer>
    );
};

export default PopularBlogPost;
