import StoryTray from "./StoryTray";
import Feed from "./Feed";
import Sidebar_left from "./Sidebar_left";
import Sidebar_right from "./Sidebar_right";



function App() {
  return (
    <div className="flex min-h-screen bg-white">
      
      <Sidebar_left /> 
      
      <main className="flex-1 max-w-150 mx-auto pt-8 flex flex-col items-center">
        <StoryTray />
        <Feed />
      </main>

      <footer className="mt-9">
        <Sidebar_right />
      </footer>


    </div>
  );
}

export default App