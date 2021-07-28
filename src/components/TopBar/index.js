import { Link } from 'react-router-dom';
import './topbar.scss';

export const TopBar = () => {
     return (
         <div className="topbar">
             <Link to="/"><span>Home</span></Link>
             <Link to="/login"><span>Login</span></Link>
             <Link to="/register"><span>Register</span></Link>
             <Link to="/about"><span>About us</span></Link>
             <Link to="/contact"><span>Contact</span></Link>
         </div>
     );
};