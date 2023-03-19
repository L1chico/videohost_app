import "./LeftSideMenu.css";

function LeftSideMenu () {
    return (
        <div className="LeftSideMenu">
            <a href="/" className="LeftSideMenu_Main">Main</a>
            <a href="/subscriptions" className="LeftSideMenu_Subscriptions">Subscr<br/>iptions</a>
            <a href="/catalog" className="LeftSideMenu_Catalog">Catalog</a>
        </div>
    );
}

export default LeftSideMenu;