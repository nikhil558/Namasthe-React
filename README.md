# learning react 

# Parcel features at a glance:
- Hot Module Replacement (HMR)
- File Watcher Algorithm - C++
- Bundling
- Minify Code
- Cleaning our code
- Dev and production build
- Super fast build algorithm
- Image Optimization
- Caching while development
- Compression
- Compatible with older browser versions
- Https on dev
- Image Optimization
- Port No
- Consistency Hashing Algorithm
- Zero Config
- Tree Shaking

* React functional component - javascript function which returns some peice of JSX code or react element is called functional component

* Component Composition - component inside another component is called component composition 

# ...Important Info...

## React.createElement => ReactElement - JS Object => HTMLElement(render)
const parent = React.createElement("p", {id:"parent"}, "this is para" );
const parent1 = React.createElement("div", {id:"parent"}, React.createElement("p", {}, "para1"),React.createElement("p", {}, "para2") );


# JSX (transpiled befor it reaches the JS) - PARCEL - BABEL

## JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
### React Element
const heading = (
    <h1>
        This is heading
    </h1>  
);

# React functional component - javascript function which returns some peice of JSX code or react element is called functional component
const Title = () => (
    <h1>Learning React</h1>
)

# Component Composition - component inside another component is called component composition 
const Description = () => (
    <>
    <Title/>
    <h1>Component composition</h1>
    <p> Component inside another component is called component composition</p>
    </>
)

# How to use {} - we can insert any kind of JS in b/w parantasis
## component inside component 
const JsxComponentEx1 = () => (
    <>
        <Title/>        {/*1 way*/ }        
        <Title></Title> {/*2 way*/ }
        {Title()}       {/*3 way*/ }
        <p> component inside component </p>
    </>
)

## component inside element 

const JsxComponentEx2 = () => (
    <>
        {title}
        <p>Component inside element</p>
    </>
)

## elememt inside component
const JsxElementEx3 = (
    <>
        <JsxComponentEx2/>
        <p>Element inside component</p>
    </>
) 