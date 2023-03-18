import "./LeftSideMenu.css";

function LeftSideMenu () {
    return (
        <div className="LeftSideMenu">
            <button className="LeftSideMenu_Main">Main</button>
            <button className="LeftSideMenu_Subscriptions">Subscr<br/>iptions</button>
            <button className="LeftSideMenu_Catalog">Catalog</button>
        </div>
    );
}

export default LeftSideMenu;