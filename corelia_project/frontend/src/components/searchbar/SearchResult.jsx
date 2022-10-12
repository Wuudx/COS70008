import React from 'react';
import styled from 'styled-components';
import CompositionResult from './CompositionResult';
import ComposerResult from './ComposerResult';
import PublisherResult from './PublisherResult';
import { BiChevronRight } from 'react-icons/bi';
import stylingConstants from '../../utils/styling';
import { useNavigate } from 'react-router-dom';

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const ResultHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 6px;
    font-family: 'Lato-Bold';
    font-size: 1em;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: ${stylingConstants.colours.blue1Percent100};
    }
`;

const ResultContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: baseline;
    width: 100%;
    padding: 5px 20px;

    & > * {
        margin-right: 10px;
    }

    & > *:last-child {
        margin-right: 0;
    }

    & > *:hover {
        color: ${stylingConstants.colours.blue2Percent100};
    }
`;

const SearchResult = ({ result, searchQuery }) => {
    const navigate = useNavigate();

    let heading;
    let headingNavigatePath;
    let content;

    if (result.results.length > 0) {
        if (result.type === 'compositions') {
            heading = 'Compositions with Title';
            headingNavigatePath = '/repertoire-library?letter=';
            content = result.results
                .slice(0, 3)
                .map((composition, index) => (
                    <CompositionResult key={index} composition={composition} />
                ));
        } else if (result.type === 'composers') {
            heading = 'Popular Composers';
            headingNavigatePath = '/discover-composers?letter=';
            content = result.results
                .slice(0, 3)
                .map((composer, index) => (
                    <ComposerResult key={index} composer={composer} />
                ));
        } else if (result.type === 'publishers') {
            heading = 'Publishers';
            headingNavigatePath = '/discover-composers?letter=';
            content = result.results
                .slice(0, 3)
                .map((publisher, index) => (
                    <PublisherResult key={index} publisher={publisher} />
                ));
        } else {
            heading = null;
            content = null;
        }
    } else {
        heading = null;
        content = null;
    }

    const handleHeadingClick = () => {
        navigate(
            headingNavigatePath +
                searchQuery.charAt(0).toUpperCase() +
                searchQuery.slice(1)
        );
    };

    return (
        <ResultContainer>
            <ResultHeading onClick={handleHeadingClick}>
                {heading}
                <BiChevronRight size='1.5em' />
            </ResultHeading>
            <ResultContents>{content}</ResultContents>
        </ResultContainer>
    );
};
export default SearchResult;
