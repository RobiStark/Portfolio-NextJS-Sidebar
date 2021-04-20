import Image from 'next/image';
import Link from 'next/link';
import {BsPersonLinesFill} from 'react-icons/bs';
import {RiArticleFill} from 'react-icons/ri';
import {VscGithub} from 'react-icons/vsc';
import {GrMail} from 'react-icons/gr';
import {BsCloudDownload} from 'react-icons/bs';


const Sidebar = ({show}) => {
    
    return(
        <div className={show ? 'sidenav active' : 'sidenav' }>

            <div className="logo">
            <Image src="/logo.png" alt="Logo" width = {30} height={30} />
            </div> 
            <ul>
            
                <li>
                    <BsPersonLinesFill color="white" fontSize="1.5em"/>
                    <Link  href="/">
                        <a className="nav-link">About</a>
                    </Link>
                </li>
                <li><VscGithub color="white" fontSize="1.5em"/>
                    <Link  href="/github">
                        <a className="nav-link">Github</a>
                    </Link>
                </li>
                <li><RiArticleFill color="white" fontSize="1.5em"/>
                    <Link  href="/blog">
                        <a className="nav-link">Blog</a>
                    </Link>
                </li>
                <li><GrMail color="white" fontSize="1.5em"/>
                    <Link  href="/">
                        <a className="nav-link">Contact</a>
                    </Link>
                </li>
                <li><BsCloudDownload color="white" fontSize="1.5em"/>
                    <Link  href="#">
                        <a className="nav-link">CV</a>
                    </Link>
                </li>
                
                
            </ul>
        </div>
    )
}

export default Sidebar;