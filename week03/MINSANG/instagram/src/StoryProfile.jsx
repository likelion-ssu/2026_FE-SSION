export default function StoryProfile({ profile , name }) {
    return (
        <div className="flex flex-col items-center gap-3 w-full p-3">
            <img
                src={profile}
                alt="profile"
                className="w-8 h-8"
            />
            <span className="text-sm font-medium">{name}</span>
        </div>  
    );
}