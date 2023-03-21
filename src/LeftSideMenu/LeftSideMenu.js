import "./LeftSideMenu.css";

function LeftSideMenu () {
    return (
        <div className="LeftSideMenu">
            <div className="LeftSideMenu_Container">
                <a href="/" className="LeftSideMenu_Container_link">Main</a>
            </div>
            <div className="LeftSideMenu_Container">
                <a href="/subscriptions" className="LeftSideMenu_Container_link">Subscr<br/>iptions</a>
            </div>
            <div className="LeftSideMenu_Container">
                <a href="/catalog" className="LeftSideMenu_Container_link">Catalog</a>
            </div>
        </div>
    );
}

export default LeftSideMenu;