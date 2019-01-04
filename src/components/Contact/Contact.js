import React from 'react';
import './Contact.css';
import ScrollReveal from 'scrollreveal';
import { revealOptions } from '../../util';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.nodes = [];
    }

    componentDidMount() {
        ScrollReveal().reveal(this.nodes, revealOptions);
    }

    componentWillUnmount() {
        ScrollReveal().clean(this.nodes);
    }
    
    render() {
        return (
            <div className="Contact">
                <h1 ref={node => this.nodes.push(node)} className="contact-header">Get In Touch.</h1>
                <a ref={node => this.nodes.push(node)} href="mailto:adisamalik@gmail.com" className="contact-link">
                    <i className="far fa-envelope"></i> adisamalik@gmail.com
                </a>
                <a ref={node => this.nodes.push(node)} href="http://linkedin.com/in/adisamalik" className="contact-link">
                    <i className="fab fa-linkedin-in"></i> linkedin.com/in/adisamalik
                </a>
                <a ref={node => this.nodes.push(node)} href="http://github.com/amalik12" className="contact-link">
                    <i className="fab fa-github"></i> github.com/amalik12
                </a>
                <a ref={node => this.nodes.push(node)} href="#" className="contact-link">
                    <i className="fas fa-file-pdf"></i> Download Resume
                </a>
            </div>
        );
    }
}

export default Contact;