
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <span className="Header_Name">ProtoTube</span>
            <input type="text" placeholder="Search"  className="Header_Search"/>
            <div className="Header_Container">
                <a href="/" className="Header_Container_Link">ENG</a>
            </div>
            <div className="Header_Container">
                <a href="/" className="Header_Container_Link">upload</a>
            </div>
            <div className="Header_Container">
                <a href="/" className="Header_Container_Link">Change<br/>Theme</a>
                </div>
            <div className="Header_Container">
                <a href="/" className="Header_Container_Link">Sing In</a>
            </div>
            <div className="Header_Container">
                <a href="/" className="Header_Container_Link">Register</a>
            </div>
        </div>
    );
}

export default Header;