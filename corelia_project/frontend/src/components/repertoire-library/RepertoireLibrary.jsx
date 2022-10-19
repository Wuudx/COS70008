import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import FilterBar from '../filter-bar/FilterBar';
import SideFilters from './SideFilters';
import RepertoireContent from './RepertoireContent';
import React from 'react';
import { useState, useEffect } from 'react';
import useSearchQuery from '../../hooks/useSearchQuery';
import useRemoveSearchQuery from '../../hooks/useRemoveSearchQuery';
import { useLocation } from 'react-router-dom';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import { getComposers } from '../../api/composers';

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
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('letter');
    const page_size = 96;
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [fetchURL, setFetchURL] = useState(
        'http://localhost:8000/api/compositions?limit=' + page_size
    );

    const [compositions, setCompositions] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [filters, setFilters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    const [composers, composersLoading, composersError] = useFetchOnPageLoad(
        () => getComposers('http://localhost:8000/api/composers')
    );

    console.log(composers);

    async function fetchCompositions(url) {
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
        if (searchQuery) {
            fetchCompositions(
                'http://localhost:8000/api/compositions/' + searchQuery
            );

            setSelectedFilter(null);
        }
    }, [searchQuery]);

    useEffect(() => {
        setCompositions([]);
        searchParams.delete('letter');
        if (selectedFilter === 'All') {
            fetchCompositions(
                'http://localhost:8000/api/compositions?limit=' + page_size
            );
        } else if (selectedFilter) {
            fetchCompositions(
                'http://localhost:8000/api/compositions?limit=0' +
                    '&composer_id=' +
                    selectedFilter
            );
        }
        console.log(searchQuery);
        console.log(selectedFilter);
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
