import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import FilterBar from '../filter-bar/FilterBar';
import SideFilters from './SideFilters';
import RepertoireContent from './RepertoireContent';

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

const Padding = styled.div`
    height: 10px;
    width: ${stylingConstants.sizes.sideFilterWidth};
`;

const RepertoireLibrary = () => {
    return (
        <FlexContainer>
            <FilterBar initialSearchType={'Artist'} />
            <ContentContainer>
                <SideFilters />
                <RepertoireContent />
                <Padding />
            </ContentContainer>
        </FlexContainer>
    );
};

export default RepertoireLibrary;
