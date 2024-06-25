import {Link} from 'react-router-dom'
import './index.css'
import { FaOpencart } from "react-icons/fa";
const Navbar=()=>(
    <header className="header">
        <Link to="/"><img src="https://marketplace.canva.com/EAFzjXx_i5w/1/0/1600w/canva-blue-illustrative-e-commerce-online-shop-logo-fZejT2DpGCw.jpg" alt="logo" className='logo'/></Link>
        <Link to='/cart'>
            <FaOpencart fontSize={25}/>
        </Link>
    </header>
)
export default Navbar