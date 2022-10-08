import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import FilterBar from '../filter-bar/FilterBar';
import SideFilters from './SideFilters';
import RepertoireContent from './RepertoireContent';
import React from 'react';
import { useState, useEffect } from 'react';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import { getCompositionsWithUrl } from '../../api/compositions';

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
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [fetchURL, setFetchURL] = useState(
        'http://localhost:8000/api/compositions?limit=' + page_size
    );

    const [compositions, setCompositions] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUniqueComposers = (compositions) => {
        const composers = new Set();
        compositions.forEach((composition) => {
            composers.add(
                JSON.stringify({
                    id: composition.composer_id,
                    first_name: composition.first_name,
                    last_name: composition.last_name,
                })
            );
        });
        return Array.from(composers);
    };

    useEffect(() => {
        setFilters(getUniqueComposers(compositions));
    }, [compositions]);

    async function fetchCompositions(url) {
        console.log(url);
        try {
            setIsLoading(true);
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            let data = await response.json();

            data.next ? setFetchURL(data.next) : null;
            data.next ? setHasMore(data.next !== null) : setHasMore(false);
            if (data.results) {
                setCompositions([...compositions, ...data.results]);
            } else {
                setCompositions(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (selectedFilter === 'All') {
            fetchCompositions('http://localhost:8000/api/compositions');
        } else {
            fetchCompositions(
                'http://localhost:8000/api/compositions?limit=0' +
                    '&composer_id=' +
                    selectedFilter
            );
        }
    }, [selectedFilter]);

    const handleLoadMore = () => {
        fetchCompositions(fetchURL);
    };

    return (
        <FlexContainer>
            <FilterBar initialSearchType={'Artist'} />
            <ContentContainer>
                <SideFilters
                    filters={filters}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
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
