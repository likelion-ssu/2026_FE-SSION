export default function Story({ storyprofile , name }) {
    return (
        <div className="flex flex-col items-center gap-2 w-full p-3">
            <img
                src={storyprofile}
                alt="profile"
                className="w-11 h-11"
            />
            <span className="text-sm font-medium">{name}</span>
        </div>  
    );
}