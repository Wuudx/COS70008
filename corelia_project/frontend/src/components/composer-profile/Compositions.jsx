import React from "React";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { getCompositionsByComposerId } from "../../api/compositions";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import stylingConstants from "../../utils/styling";
import Composition from "./Composition";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const Compositions = ({ composerId }) => {
    const [data, isLoading, error] = useFetchOnPageLoad(() =>
        getCompositionsByComposerId(composerId)
    );

    let content;
    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        toast.error("Could not fetch compositions! Please try again later");
    } else if ("count" in data && data.count > 0) {
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
    } else if ("count" in data && data.count === 0) {
        content = <p>There are no compositions available.</p>;
    }

    return content;
};

export default Compositions;
