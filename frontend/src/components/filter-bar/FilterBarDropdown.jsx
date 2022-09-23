import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import { useState } from "react";

const Ul = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    list-style: none;
    margin: 0px;
    padding: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 1em;
    font-family: ${stylingConstants.fonts.searchBar};
    color: white;
    background-color: ${stylingConstants.colours.blue1Percent100};

    div {
        cursor: pointer;
        width: 100%;
        padding: 5px 30px;
    }

    div:hover {
        background-color: ${stylingConstants.colours.blue2Percent100};
    }

    div:active {
        background-color: ${stylingConstants.colours.blue2Percent100};
    }
`;

const FilterBarDropdown = ({ isOpen, handleSearchFilterClick }) => {
    if (!isOpen) {
        return "";
    }

    const [searchTypes, setSearchType] = useState([
        {
            name: "All", 
            value: "all" 
        },
        {
            name: "Artist",
            value: "artist"
        },
        {
            name: "A-Z",
            value: "aToZ"
        },
        {
            name: "Instrument",
            value: "instrument"
        }
    ]);

    return (
        <Ul>
            {searchTypes.map((item) => (
                <div key={item.value} onClick={() => handleSearchFilterClick(item.name)}>{item.name}</div>
            ))}
        </Ul>
    );

    {/* content = (<p>test</p>); */}

    // if (dropdownName === "Explore Repertoire") {
    // content = (
    //     <Ul>
    //         <li>
    //             <Link to="/watch-listen">Watch / Listen</Link>
    //         </li>
    //         <li>
    //             <Link to="/repertoire-library">Repertoire Library</Link>
    //         </li>
    //     </Ul>
    // );
    // } else if (dropdownName === "Get Involved") {
    //     content = (
    //         <Ul>
    //             <li>
    //                 <Link to="/join-corelia/">Join Corelia</Link>
    //             </li>
    //             <li>
    //                 <Link to="/contact-us/">Contact</Link>
    //             </li>
    //         </Ul>
    //     );
    // }

    return content;
};

export default FilterBarDropdown;