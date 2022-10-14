import React from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem 3rem 1rem;
    width: 70%;
    height: 100%;
    align-self: center;
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const H1 = styled.h1`
    font-family: "Lato-Bold";
    font-size: 2em;
    margin-bottom: 1rem;
`;

const H2 = styled.h2`
    font-family: "Lato-Bold";
    font-size: 1.5em;
    margin-bottom: 1rem;
`;

const P = styled.p`
    font-family: "Lato-Regular";
    font-size: 1em;
    margin-bottom: 1rem;
    align-self: flex-start;
`;

const About = () => {
    return (
        <Container>
            <H1>Welcome to the Corelia Project!</H1>
            <P>We are an initiative that spotlights women composers</P>
            <H2>What are we trying to achieve?</H2>
            <P>
                Historically, women's voices have been grossly underrepresented
                in classical music. Despite lot of progress, there is still a
                very long road ahead. Currently, most core clarinet repertoire
                lists do not feature a single work written by a woman, despite
                the countless exceptional pieces that exist!
            </P>
            <P>
                Here at the Corelia Project, we believe that visibility and
                accessibility are the first steps to driving change. Through the
                promotion of women composers and their works, we aim to
                encourage shifts in concert programming, and inspire musicians
                to diversify their own repertoire. With the click of a few
                buttons, clarinetists can discover and be inspired to play new
                pieces, creating a ripple effect over time.
            </P>
            <H2>Corelia Project Founder</H2>
            <P>
                The Corelia Project was founded by Magdalenna Krstevska, an
                Australian clarinetist, currently based in London. A highly
                experienced performer, Magdalenna has performed extensively on
                major stages throughout Australia and across Europe as an
                orchestral clarinetist, chamber musician and as a soloist in
                national competitions. Her training includes the Melbourne
                Conservatorium of Music, the Australian National Academy of
                Music and the Sydney Symphony Fellowship Program. She is
                currently completing the Master of Performance at the Royal
                College of Music, London. She is a Wilkins-Mackerras Award
                Holder, supported by the Henry Wood Accommodation Trust and a
                Drake Calleja Trust Scholar.
            </P>
        </Container>
    );
};

export default About;
