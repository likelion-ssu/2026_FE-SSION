import profile from "./assets/profile.jpeg";

function Story({name}) {
  return (
    <div className="flex flex-col items-center space-y-1 min-w-18">
      <div className="p-0.5 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 rounded-full">
        <div className="p-0.5 bg-white rounded-full">
          <img 
            src={profile} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs text-gray-500 w-16 text-center">{name}</span>
    </div>
  );
}

export default Story;