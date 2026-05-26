export default function RecommendUser({ profileImg, id, subText, buttonText }) {
    return (
        <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-2">
                <img src={profileImg} alt="profileImg" className="w-10 h-10"/>
                <div className="flex flex-col">
                    <span className="text-sm">{id}</span>
                    <span className="text-neutral-500 text-xs">{subText}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xs">{buttonText}</span>
            </div>
        </div>
    );
}