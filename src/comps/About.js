import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <h1 className='text-3xl abouth1'>Where to find me</h1>
            <div className='buttons'>
                <a className='findme-links' target="_blank" href='http://uxairabbas.herokuapp.com/'>
                    <i style={{ fontSize: '2.5rem' }} className="fa fa-user"></i>
                </a>

                <a className='findme-links' target="_blank" href='https://github.com/uxairishere'>
                    <i style={{ fontSize: '2.5rem' }} className="fa fa-github"></i>
                </a>
                <a className='findme-links' target="_blank" href='https://www.instagram.com/uxair_abbass/'>
                    <i style={{ fontSize: '2.5rem' }} className="fa fa-instagram"></i>
                </a>
                <a className='findme-links' target="_blank" href='https://www.linkedin.com/in/uzairabbas1999/'>
                    <i style={{ fontSize: '2.5rem' }} className="fa fa-linkedin"></i>
                </a>
            </div>
            <p className='p-4'>
                This project is made using React, Firbase and Tailwind class.<br />
            </p>
            <a href='https://github.com/uxairishere/react-firebase-gallery'
                target="_blank"
                style={{ textDecoration: 'none' }}>
                <code>Project's github repository</code>
            </a>
        </div>
    )
}

export default About