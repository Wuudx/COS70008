export const screenTypes = {
    mobile: "mobile",
    tablet: "tablet",
    smallLaptop: "smallLaptop",
    desktop: "desktop",
};

const MOBILE = 480;
const TABLET = 768;
const SMALL_LAPTOP = 1024;

export function getScreenType(windowWidth) {
    if (windowWidth <= MOBILE) {
        return screenTypes.mobile;
    } else if (MOBILE < windowWidth && windowWidth <= TABLET) {
        return screenTypes.tablet;
    } else if (TABLET < windowWidth && windowWidth <= SMALL_LAPTOP) {
        return screenTypes.smallLaptop;
    } else {
        return screenTypes.desktop;
    }
}
