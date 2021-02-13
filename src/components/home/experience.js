import React from "react";
import './experience.css';
import './homeComponent.css';

class Experience extends React.Component {

    render() {

    const listExperience = [
        {
            title: "Github Campus Expert",
            institution: "Github",
            date: "August 2018 - Present",
            description: "Responsible for building the on campus community with the support of GitHub."
        },

        {
            title: "Opensource Developer Intern",
            institution: "Fossasia",
            date: "June 2019 - Present",
            description: "Contributing to Fossasia's open event server and frontend as an intern. Resolver numerous bugs and added new features to the everyday platform."
        },

        {
            title: "Software Developer Intern",
            institution: "Hasura",
            date: "December 2018 - January 2019",
            description: "Worked on Hassura's GraphQL engine and added new features in it."
        },
    ];
    
    return (
        <>
            <div className="container-fluid" id="Experience">
                <h2>Experience</h2>
                <br></br><br></br>
                {listExperience.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3 className="experienceTitle">{v.title}</h3>
                            <h4>{v.institution}</h4>
                            <p>{v.description}</p>
                        </div>

                        <div className="col-4">
                            <p className="experienceDate">{v.date}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
    }
}

export default Experience;