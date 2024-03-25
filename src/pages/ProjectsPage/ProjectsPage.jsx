import './ProjectsPage.css'

import * as Icon from 'react-bootstrap-icons'

const ProjectsPage = () => {

    return (
        <section className='ProjectsPage'>
            <article className='project-article mb-2'>
                <a target='_blank' href="https://mentalia.netlify.app/">
                    <div className='d-flex align-items-center'>
                        <h3 className='me-2'>Mentalia</h3>
                        <Icon.BoxArrowUpRight />
                    </div>
                </a>
                <p>
                    Given the issue of access to mental health care in Spain we have created an innovative mental wellness initiative with emotional tracking, psychologist access, and community platform in a 2-week sprint. Collaborative work with developers and UX/UI designers.</p>
                <p>- Stack: React | Bootstrap | Express | NodeJs | MongoDB</p>
            </article>

            <article className='project-article mb-2'>
                <a target='_blank' href="https://urbanuncover.netlify.app/">
                    <div className='d-flex align-items-center'>
                        <h3 className='me-2'>Urban Uncover</h3>
                        <Icon.BoxArrowUpRight />
                    </div>
                </a>
                <p>Web interface for multiple tourist destinations where users can discover activities and places to explore. Made in a 1-week sprint.
                </p>
                <p>- Stack: React | Bootstrap | Express | NodeJs | MongoDB</p>
            </article>

            <article className='project-article'>
                <h3 className='me-2'>Space Invaders</h3>

                <p>Homage to the classic game Space Invaders using JavaScript and Object-Oriented Programming (OOP) principles.
                </p>
                <p>- Stack: Vanilla Javascript </p>
            </article>
        </section>
    )
}

export default ProjectsPage