import Sidebar from './Sidebar';
import Feed from './Feed';
import Recommendation from './Recommendation';

export default function App() {
    return (
        <div className="bg-black text-white flex flex-row justify-between">
          <Sidebar/>
          <Feed/>
          <Recommendation/> 
        </div>
    );
}