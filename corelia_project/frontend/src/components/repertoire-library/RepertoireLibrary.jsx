import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import FilterBar from '../filter-bar/FilterBar';
import SideFilters from './SideFilters';
import RepertoireContent from './RepertoireContent';
import React from 'react';
import { useState, useEffect } from 'react';

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
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

const Padding = styled.div`
    height: 10px;
    min-width: ${stylingConstants.sizes.sideFilterWidth};
`;

const RepertoireLibrary = () => {
    const page_size = 24;
    const [fetchURL, setFetchURL] = useState(
        'http://localhost:8000/api/compositions?limit=' + page_size
    );
    const [compositions, setCompositions] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState([]);

    const getUniqueComposers = (compositions) => {
        const composers = new Set();
        compositions.forEach((composition) => {
            composers.add(
                JSON.stringify({
                    id: composition.composer_id,
                    composer: composition.composer,
                })
            );
        });
        return Array.from(composers);
    };

    useEffect(() => {
        setFilters(getUniqueComposers(compositions));
    }, [compositions]);

    async function fetchCompositions() {
        try {
            let response = await fetch(fetchURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
                return;
            }

            let data = await response.json();

            if (!data) {
                throw new Error('No data returned');
                return;
            }

            setFetchURL(data.next);
            setCompositions([...compositions, ...data.results]);
            setHasMore(data.next !== null);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCompositions();
    }, []);

    const handleLoadMore = () => {
        fetchCompositions();
    };

    return (
        <FlexContainer>
            <FilterBar initialSearchType={'Artist'} />
            <ContentContainer>
                <SideFilters filters={filters} />
                <RepertoireContent
                    compositions={compositions}
                    handleLoadMore={handleLoadMore}
                    hasMore={hasMore}
                />
                <Padding />
            </ContentContainer>
        </FlexContainer>
    );
};

export default RepertoireLibrary;
