import React from "react";
import About from "../../components/Sidebar/home/about";

const Experience = () => {
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
    ]

    return (
        <>
            <div className="container-fluid">
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
    )
}

const Education = () => {
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
            <div className="container-fluid">
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

const Skills = () => {
    const listProgrammingLanguagesAndTools = [
        "HTML5", "CSS3", "Javascript", "React", "Node.js", "Python", "Django", "Ember"
    ]

    console.log(listProgrammingLanguagesAndTools);

    return (
        <>
            <div className="container-fluid">
                <h2>Skills</h2>
                <br></br><br></br>
                <h4>Programming Languages & Tools</h4>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            {listProgrammingLanguagesAndTools?.map((v, i) =>
                                !(i % 2) &&
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {" "}
                                    {v}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            {listProgrammingLanguagesAndTools?.map((v, i) =>
                                !((i - 1) % 2) &&
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {" "}
                                    {v}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

const Interests = () => {
    return (
        <>
            <div className="container-fluid">
                <h2>Interests</h2>
                <br></br><br></br>
                <p>Apart from being a web developer. I enjoy most of my time being outdoors. In the winter, I am avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                <p>When forced indoors, I folow a nuber of sci-fi and fantasy genre movies and television shows. I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
            </div>
        </>
    )
}

const Awards = () => {
    const listAwards = [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005"
    ]

    return (
        <>
            <div className="container-fluid">
                <h2>AWARDS & CERTIFICATION</h2>
                <ul>
                    {listAwards?.map((awards) =>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BDBF3F" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
                            </svg>
                            {" "}
                            {awards}
                        </li>)}
                </ul>
            </div>
        </>
    )
}


class HomePortfolio extends React.Component {
    state = {
        isButtonEnable: true,
    };

    setButtonStatus = () => {
        this.setState({ isButtonEnable: true });
    };

    render() {
        return (
            <div>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interests />
                <Awards />
            </div>
        );
    }
}

export default HomePortfolio;