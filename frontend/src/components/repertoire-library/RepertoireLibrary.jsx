import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterBar from "../filter-bar/FilterBar";
import SideFilters from "./SideFilters";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 80%;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const Padding = styled.div`
    height: 10px;
    width: ${stylingConstants.sizes.sideFilterWidth};
`;

const RepertoireLibrary = () => {
    return (
        <FlexContainer>
            <FilterBar initialSearchType={"Artist"} />
            <ContentContainer>
                <SideFilters />
                <Content>
                    <h1>Repertoire Library</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Porro excepturi dolore nulla in exercitationem
                        voluptatibus modi, tenetur ducimus provident, dicta
                        deleniti, distinctio officiis dolorem animi nesciunt qui
                        debitis voluptatum quo.
                    </p>
                </Content>
                <Padding />
            </ContentContainer>
        </FlexContainer>
    );
};

export default RepertoireLibrary;
