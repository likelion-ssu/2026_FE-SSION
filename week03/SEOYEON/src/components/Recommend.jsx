function Recommend(props) {
    return (
        <div className="right-bottom-detail">
            <img src={props.image} alt={props.username} />
            <div className="right-bottom-detail-ex">
                <span>{props.username}</span>
                <span className="txt">{props.followInfo}</span>
            </div>
            <span className="txt">팔로우</span>
        </div>
    );
}

export default Recommend;