import { render } from "@testing-library/react";
import React, { StrictMode } from "react";
import { ReactDOM } from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';


function App() {
    return (

        <>
            <div className="card">
                <Avatar />
            </div>

            <div className="data">
                <Info />


                <SkillList />
            </div>



        </>
    );
}


function Avatar() {
    return (<><p1>hello</p1>  </>);
}

function Info() {
    return (<></>);
}

function SkillList() {
    return (<></>);
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);