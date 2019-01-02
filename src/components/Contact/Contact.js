import React from 'react';
import './Contact.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
}

let Contact = (props) => {
    return (
        <div className="Contact">
            <h1 className="contact-header" style={{color: props.color}}>Get In Touch.</h1>
            <a href="mailto:adisamalik@gmail.com" className="contact-link" style={{color: props.color}}>
                <i className="far fa-envelope"></i> adisamalik@gmail.com
            </a>
            <a href="http://linkedin.com/in/adisamalik" className="contact-link" style={{color: props.color}}>
                <i className="fab fa-linkedin-in"></i> linkedin.com/in/adisamalik
            </a>
            <a href="http://github.com/amalik12" className="contact-link" style={{color: props.color}}>
                <i className="fab fa-github"></i> github.com/amalik12
            </a>
            <a href="#" className="contact-link" style={{color: props.color}}>
                <i className="fas fa-file-pdf"></i> Download Resume
            </a>
        </div>
    );
}

export default connect(mapStateToProps)(Contact);