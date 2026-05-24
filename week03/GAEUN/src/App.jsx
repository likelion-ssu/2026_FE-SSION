import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Recommend from "./components/Recommend";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-white text-[#111]">
      <Sidebar />

      <main className="ml-[19rem] w-[41rem] pt-6">
        <Stories />
        <Post />
      </main>

      <Recommend />
    </div>
  );
}

export default App;