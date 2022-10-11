import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1rem;
`;

const About = () => {
    return (
        <Container>
            <h1>Welcome to the Corelia Project!</h1>
            <p>We are an initiative that spotlights women composers</p>
            <h2>What are we trying to achieve?</h2>
            <p>
                Historically, women's voices have been grossly underrepresented
                in classical music. Despite lot of progress, there is still a
                very long road ahead. Currently, most core clarinet repertoire
                lists do not feature a single work written by a woman, despite
                the countless exceptional pieces that exist!
            </p>
            <p>
                Here at the Corelia Project, we believe that visibility and
                accessibility are the first steps to driving change. Through the
                promotion of women composers and their works, we aim to
                encourage shifts in concert programming, and inspire musicians
                to diversify their own repertoire. With the click of a few
                buttons, clarinetists can discover and be inspired to play new
                pieces, creating a ripple effect over time.
            </p>
            <h2>Corelia Project Founder</h2>
            <p>
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
            </p>
        </Container>
    );
};

export default About;
