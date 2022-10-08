import React from "React";
import { getCompositionsByComposerId } from "../../api/compositions";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import Composition from "./Composition";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const Compositions = ({ composerId }) => {
    const { data, isLoading, error } = useFetchOnPageLoad(() =>
        getCompositionsByComposerId(composerId)
    );

    let content;
    if (isLoading) {
        content = <FlexContainer>Loading...</FlexContainer>;
    } else if (error) {
        content = <FlexContainer>{error.message}</FlexContainer>;
    } else if (data.count && data.count > 0) {
        content = (
            <FlexContainer>
                {data.results.map((composition) => (
                    <Composition
                        key={composition.id}
                        composition={composition}
                    />
                ))}
            </FlexContainer>
        );
    }

    return content;
};

export default Compositions;
