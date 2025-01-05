import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)
const parent = React.createElement("p", {id:"parent"}, "this is para" );
const parent1 = React.createElement("div", {id:"parent"}, React.createElement("p", {}, "para1"),React.createElement("p", {}, "para2") );


// JSX (transpiled befor it reaches the JS) - PARCEL - BABEL

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// React Element
const heading = (
    <h1>
        This is heading
    </h1>  
);

// React functional component - javascript function which returns some peice of JSX code or react element is called functional component
const Title = () => (
    <h1>Learning React</h1>
)

const title = (
    <h1>Learning React</h1>
)

// Component Composition - component inside another component is called component composition 
const Description = () => (
    <>
    <Title/>
    <h1>Component composition</h1>
    <p> Component inside another component is called component composition</p>
    </>
)

//How to use {} - we can insert any kind of JS in b/w parantasis
// component inside component 
const JsxComponentEx1 = () => (
    <>
        <Title/>        {/*1 way*/ }        
        <Title></Title> {/*2 way*/ }
        {Title()}       {/*3 way*/ }
        <p> component inside component </p>
    </>
)

// component inside element 

const JsxComponentEx2 = () => (
    <>
        {title}
        <p>Component inside element</p>
    </>
)

// elememt inside component
const JsxElementEx3 = (
    <>
        <JsxComponentEx2/>
        <p>Element inside component</p>
    </>
)

const Header = () => (
    <nav className="nav">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Flogo_5149019&psig=AOvVaw21YIC2EWyNUuvOrpWqgHU0&ust=1736180439573000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNi9_aj-3ooDFQAAAAAdAAAAABAE" className="logo"/>
        <input type="search" placeholder="Search.." className="search-bar"></input>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AUser_icon_2.svg&psig=AOvVaw2f6N7nm6_i4ciMHaiOPXtj&ust=1736180949799000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjcp5yA34oDFQAAAAAdAAAAABAE" className="user-icon"/>
    </nav>
)

const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>This is heading1</h1>);
root.render(<Header/>)