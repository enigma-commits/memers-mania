import "./index.css";
import Logo from "./logo.png";
import {
  SearchIcon,
  BellIcon,
  ChatIcon,
  PlusIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
export function Header() {
  return (
    <header className="w-full flex bg-memer_dark p-2">
      <div className="mx-4 flex">
        <img src={Logo} alt="memer's mania" className="w-8 h-8 mr-4" />
        <form className="bg-memer_dark-brighter flex rounded-md border border-gray-700 mr-4">
          <SearchIcon className="text-white-300 w-6 h-6 mt-1" />
          <input
            type="text"
            className="bg-gray-800 h-6 m-1 text-sm p-2 pl-2 pr-0 block focus:outline-none text-white"
            placeholder="Search"
          />
        </form>
        <button className="px-2 py-1">
          <ChatIcon className="text-white w-6 h-6 mx-2" />
        </button>
        <button className="px-2 py-1">
          <BellIcon className="text-white w-6 h-6 mx-2" />
        </button>
        <button className="px-2 py-1">
          <PlusIcon className="text-white w-6 h-6 mx-2" />
        </button>
        <button className="items-end">
          <UserCircleIcon className="block text-white w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
