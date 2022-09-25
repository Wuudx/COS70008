const colours = {
    blue1: "#7BA2D5",
    blue2: "#427BBF",
    blue1Percent50: "rgb(123, 162, 213, 50%)",
    blue1Percent80: "rgb(123, 162, 213, 80%)",
    blue1Percent100: "rgb(123, 162, 213, 100%)",
    blue2Percent10: "rgb(66, 123, 191, 10%)",
    blue2Percent30: "rgb(66, 123, 191, 30%)",
    blue2Percent50: "rgb(66, 123, 191, 50%)",
    blue2Percent80: "rgb(66, 123, 191, 50%)",
    blue2Percent100: "rgb(66, 123, 191, 80%)",
};

const fonts = {
    logoAndHeadlines: "Sabon Lt Pro",
    headlineFont: "Besley",
    subHeadingsAndBody: "Lato",
    searchBar: "Lato-regular",
};

// TODO: Seperate this array to make it more net. For example, seperate sizes into blogs page, contact us page etc...
const sizes = {
    // Please make sure that padding of body in index.css is same as this variable to ensure that all content stays
    // under navbar!!
    navbarHeight: "100px",
    searchBarHeight: "70px",
    searchInputHeight: "40px",
    searchButtonIconWidth: "50px",
    gapFromFooterToEndOfContent: "30px",
    leftRightMargin: "10px",
    containerBorderRadius: "0.5em",
    sideFilterWidth: "200px",
};

const stylingConstants = {
    colours: colours,
    fonts: fonts,
    sizes: sizes,
};

export default stylingConstants;
