import React from "react";

const ShortSummary = ({ name, nationality, yearOfBirth, yearOfDeath }) => {
    let content;
    if (yearOfDeath) {
        content = `${name} is a ${nationality} composer. They were born in ${yearOfBirth} and passed away in ${yearOfDeath}.`;
    } else {
        content = `${name} is a ${nationality} composer and was born in ${yearOfBirth}`;
    }

    return <div>{content}</div>;
};
export default ShortSummary;
