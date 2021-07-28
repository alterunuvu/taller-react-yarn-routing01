import "./header.scss";
import { AccountCircle } from "@material-ui/icons";
import { Logo } from "../Logo";
import { TopBar } from "../TopBar";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="App-header">
        <Link to="/"><Logo/></Link>
      <div className="top-bar">
        <TopBar/>
        <Link to="/login"><AccountCircle /></Link>
      </div>
    </header>
  );
};
