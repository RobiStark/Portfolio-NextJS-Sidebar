import Link from 'next/link';
import Sidevar from './Sidebar';
import {useState} from 'react';
import {BsCloudDownload} from 'react-icons/bs';

const Navbar = () => {

  const [showSidebar, setshowSidebar] = useState(false);

  return(

    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <Link href="/">
          <a className="navbar-brand"> Portfolio</a>
        </Link>
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setshowSidebar(!showSidebar)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link href="/">
                <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
              <Link  href="/github">
              <a className="nav-link">Github</a>
              </Link>
            
          </li>
          <li className="nav-item">
            <Link href="/blog">
                <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
                <a className="nav-link">Contact</a>
            </Link>
          </li>
          <li>
                    <Link  href="/about">
                        <a className="nav-link">CV</a>
                    </Link>
                    <BsCloudDownload color="white" fontSize="1.5em"/>
          </li>
          
        </ul>
      </div>
    </div>
    </nav>
    <Sidevar show={showSidebar}/>
    </>
    )
}

export default Navbar;