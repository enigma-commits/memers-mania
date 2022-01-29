import "./index.css";
import { Header } from "./Header";
import { Post } from "./Post";
function App() {
  return (
    <div>
      <Header />
      <Post />
      <div className="px-6 bg-memer_dark-brighter">
        <div className="border border-memer_border bg-memer_dark-brighter p-2 text-gray-300">
          <h4 className="text-gray-300 text-sm mb-1">Posted by userx</h4>
          <h2 className="text-2xl mb-3">Title of the post</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
