import React from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/';

let Projects = () => {
    return (
        <div className="Projects">
            <ProjectItem large={true} title="Groop" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
            tags={['react', 'mongodb', 'nodejs', 'redis']}
            github="https://github.com/amalik12/groop" image="groop.gif"/>
            <ProjectItem right={true} large={true} title="Draftnet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
            tags={['django', 'tensorflow', 'angularjs']}
            github="https://github.com/viking-sudo-rm/draftnet/" image="draftnet.png"/>
            <ProjectItem large={true} title="Dining Plus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
            tags={['android', 'java', 'sqlite']}
            github="https://github.com/amalik12/dining_plus" image="diningplus.png"/>
        </div>
    );
}

export default Projects;