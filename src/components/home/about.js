import React from "react";

class About extends React.Component {
    render() {
    
    return (
        <>
            <div className="container-fluid">
                <div className="aboutHeader">
                    <h1>Lorem</h1>
                    <h1 className="headerRight">Ipsum</h1>
                </div>
                <div className="aboutHeader">
                    <h3>+62-0123456789-</h3>
                    <h3 className="headerRight">loremipsum@gmail.com</h3>
                </div>
                <br></br>
                <p>I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publiclab and many other projects. My tech stack includes Python and Javascript. Python for server side and scripting and Javascript for the frontend. I use Django framework for the server side development and React for the frontend development. I have also worked with GraphQL. I am a GitHub Campus Expert at my institute where I am responsible for building on campus community. I am the lead organiser of Hack In The North Hackathon and the cofounder of Pragma Conference held at IIIT Allahabad.</p>
                <br></br>
                {/* Linkedin logo here */}
                {/* GitHub logo here */}
            </div>
        </>
    );
    }
}

export default About;