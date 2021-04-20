import Link from 'next/link'
import Layout from  '../components/Layout'
import {skills, experiences, projects} from '../profile'

//console.log(experiences)

const Index = () => (

<Layout >

    {/**Header Card */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="roberto-rodriguez.jpeg" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1>Roberto Rodriguez</h1>
                        <h3>FullStack Developer</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia laudantium suscipit culpa? Aut, ab? Dolorum blanditiis possimus quibusdam aliquid ducimus quo molestias alias aperiam. Quasi perferendis rem et ducimus!
                        </p>
                        <a href="#!">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/** Second section */}
    <div className="row py-2">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Skills</h1>
                    {
                        skills.map(({skill, percentage}, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress">
                                    <div 
                                        className="progress-bar" 
                                        role="progressbar" 
                                        style={{width: `${percentage}%`}}>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Experience</h1>
                    <ul>
                        {
                            experiences.map(({title, from, to, description}, i) => (
                                    <li key= {i}>
                                    <h3>{title}</h3>
                                    <h5>{from}-{to}</h5>
                                    <p>
                                        {description}
                                    </p>
                                    </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/**Porfolio */}
    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">Porfolio</h1>
                    </div>
                    {
                        projects.map(({name, description, imagen}, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                        <img src={`/${imagen}`} alt="" className="card-img-top"/>
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <a href="#!"> Know more</a>
                                    </div>
                                </div>
                         </div>

                        ))
                    }

                </div>
                <div className="text-center mt-4">
                    <Link href="/portfolio">
                        <a className="btn btn-outline-light"> More Proyects</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
</Layout>

    )

export default Index;