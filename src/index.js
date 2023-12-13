import { render } from "@testing-library/react";
import React, { StrictMode } from "react";
import { ReactDOM } from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';



const skills = [

    {
        skill: "HTML + CSS",
        level: "advance",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
]
function App() {
    return (

        <>
            <div className="card">
                <Avatar />

                <div className="data">
                    <Intro />

                    <SkillList />
                </div>

            </div>



        </>
    );
}


function Avatar() {
    return (<>
        <img className="avatar" src="R.jpg" />


    </>);
}

function Intro() {
    return (<>
        <h1>Monkey D Luffy</h1>
        <p>
            Full-stack web developer and teacher at Udemy. When not coding or
            preparing a course, I like to play board games, to cook (and eat), or to
            just enjoy the Portuguese sun at the beach.
        </p>
    </>);
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (<Skill skill={skill.skill} color={skill.color} level={skill.level} />)

            )}

        </div>


    );
}

function Skill({ skill, level, color }) { //Destructuring Props:
    return (<>
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>

        </div>
    </>);
    //These properties are passed as props when the Skill component is used.
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);