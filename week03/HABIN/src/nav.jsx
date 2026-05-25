function Nav({name, img}) {
    return(
        <div className="w-12 m-[4px 0px] p-3">
            <img src = {img} alt = {name} />
        </div>
    );
}

export default Nav;