import React from "react";
import ReactDOM from "react-dom/client";


//React component
const Heading = () => (
    <h1 className="head" tabIndex="6">
        Namaste React using JSX 🚀
    </h1>
);

//React element
const Heading2 = (
    <h1 className="head" tabIndex="6">
        Namaste React using JSX 🚀
    </h1>
);


//React functional component
const HeadingComponent = () =>  (
    <div id="container">
        <h1 className="heading">Namaste React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);