import React from "react";
import './education.css';
import './homeComponent.css'

class Education extends React.Component {
    
    render() {
    
    const listEducation = [
        {
            campus: "LoremIpsum Institute of Information Technology",
            degree: "Bachelor of Tehnology",
            date: "September 2010 - July 2013",
            description: "12.34"
        },

        {
            campus: "LoremIpsum Institute of Information Technology",
            degree: "Master of Technology",
            date: "January 2015 - December 2016",
            description: "10.11"
        },
    ]

    return (
        <>
            <div className="container-fluid" id="Education">
                <h2>Education</h2>
                <br></br><br></br>
                {listEducation.map((v) =>
                    <div className="row">
                        <div className="col-8">
                            <h3>{v.campus}</h3>
                            <h4>{v.degree}</h4>
                            <br></br>
                            <p>{v.description}</p>
                            <br></br>
                        </div>
                        <div className="col-4">
                            <p className="educationDate">{v.date}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
}

export default Education;