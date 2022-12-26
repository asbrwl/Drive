import React from "react";
//import Dash from "./cardash.PNG";
import Dash1 from "./cardash1.png";

//return an image that sticks to the bottom of the page
const DashImage = () => {
    return (
        <img
        src={Dash1
        }
        alt="Dash"
        style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "80%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
        />
    );
};

export default DashImage;