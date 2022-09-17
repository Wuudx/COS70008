import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Ul from "../../../shared-styled-components/NavUl";

const INSTAGRAM_URL = "https://www.instagram.com/coreliaproject/?hl=en";
const FACEBOOK_URL = "https://www.facebook.com/coreliaproject/";

// TODO: Find LinkedIn url.

const SocialMediaNav = () => {
    function navigateToSocialMedia(url) {
        window.open(url, "_blank").focus();
    }

    return (
        <nav>
            <Ul gap="5px">
                <li>
                    <BsInstagram
                        onClick={() => navigateToSocialMedia(INSTAGRAM_URL)}
                        style={{ verticalAlign: "bottom", cursor: "pointer" }}
                        color="white"
                    />
                </li>
                <li>
                    <BsFacebook
                        onClick={() => navigateToSocialMedia(FACEBOOK_URL)}
                        style={{ verticalAlign: "bottom", cursor: "pointer" }}
                        color="white"
                    />
                </li>
                <li>
                    <BsLinkedin
                        style={{ verticalAlign: "bottom", cursor: "pointer" }}
                        color="white"
                    />
                </li>
            </Ul>
        </nav>
    );
};

export default SocialMediaNav;
