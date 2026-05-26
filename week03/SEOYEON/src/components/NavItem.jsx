function NavItem(props) {
    return (
        <div className="navigation">
            <i className={props.icon}></i>
            <span>{props.menu}</span>
        </div>
    );
}

export default NavItem;
