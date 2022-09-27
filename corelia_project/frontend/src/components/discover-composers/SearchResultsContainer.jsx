import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import SearchResults from "./SearchResults";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 ${stylingConstants.sizes.leftRightMargin};
    justify-content: center;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const SearchResultsContainer = () => {
    // To be loaded from api.
    const [composers, setComposers] = useState([
        {
            id: 1,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 2,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 3,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 4,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 5,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 6,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 7,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 8,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 9,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 10,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 11,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 12,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 13,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 14,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 15,
            firstName: "Samantha",
            lastName: "Smith",
            numCompositions: 35,
            picture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
    ]);

    return (
        <FlexContainer>
            <SearchResults composers={composers} />
        </FlexContainer>
    );
};

export default SearchResultsContainer;
