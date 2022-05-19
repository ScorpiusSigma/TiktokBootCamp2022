import {Link} from "react-router-dom";

function Navigation() {
    return (
        <ul className="navigation">
            <li><Link to = "/">play hangman</Link></li>
            <li><Link to = "/bot-screen">
                tired of thinking? click here to let a bot play for you!
                </Link></li>
        </ul>
    )
}

export default Navigation;