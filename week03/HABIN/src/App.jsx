import StoryTray from "./StoryTray";
import Feed from "./Feed";
import Sidebar_left from "./Sidebar_left";


function App() {
  return (
    <div className="flex min-h-screen bg-white">
      
      <Sidebar_left /> 
      
      <main className="flex-1 max-w-150 mx-auto pt-8 flex flex-col items-center">
        <StoryTray />
        <Feed />
      </main>

    </div>
  );
}

export default App