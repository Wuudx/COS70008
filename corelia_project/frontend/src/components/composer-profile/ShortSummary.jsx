import React from "react";

const ShortSummary = ({ name, nationality, yearOfBirth, yearOfDeath }) => {
    let content;
    if (yearOfDeath) {
        content = `${name} is a ${nationality} composer. They were born on ${yearOfBirth} and passed away on ${yearOfDeath}.`;
    } else {
        content = `${name} is from ${nationality} composer and was born on ${yearOfBirth}`;
    }

    return <div>{content}</div>;
};
export default ShortSummary;
