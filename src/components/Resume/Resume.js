import React from 'react';
import './Resume.css';
import Experience from '../Experience';

let Resume = () => {
    return (
      <div className="Resume">
        <div className="header">
            <h2 className="header-text">Experience.</h2><span className="divider"></span>
        </div>
        <Experience image="bloomberg.png" title="Software Engineer"
        org={['Bloomberg', 'http://bloomberg.com']} dates="Sept 2018 - Present"
        location="New York, NY" tags={['c++', 'python']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'/>
        <Experience image="datadog.png" title="Solutions Engineer"
        org={['Datadog', 'http://datadoghq.com']} dates="Jan 2018 - June 2018"
        location="New York, NY" tags={['python', 'javascript']} description=''/>
        <Experience image="bi.png" title="Front End Engineering Intern"
        org={['Business Insider', 'http://businessinsider.com']} dates="June 2017 - Aug 2017"
        location="New York, NY" tags={['javascript', 'php', 'angularjs']} description=''/>
        <Experience image="yale.png" title="Undergraduate Learning Assistant"
        org={['Yale University', 'http://yale.edu']} dates="Sept 2016 - Dec 2016"
        location="New Haven, CT" tags={['c']} description=''/>
        <Experience image="socrob.png" title="Research Intern"
        org={['Yale Social Robotics Lab', 'http://scazlab.yale.edu']} dates="June 2016 - Aug 2017"
        location="New Haven, CT" tags={['python', 'opencv']} description=''/>
        <div className="header">
            <h2>Education.</h2><span className="divider"></span>
        </div>
        <Experience image="yale.png" title="Bachelor of Science (B.S.), Computer Science"
        org={['Yale University', 'http://yale.edu']} dates="Aug 2013 - May 2017"
        location="New Haven, CT" tags={['c', 'java', 'javascript']} description=''/>
        <div className="resume-download"><i class="fas fa-file-download"></i> Download Resume</div>
      </div>
    );
}

export default Resume;