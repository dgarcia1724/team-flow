import { Folder } from "../types/folder";
import { mockFolders } from "../data/mockData";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 mb-4 flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        New
      </button>

      <div className="space-y-2">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Home</span>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-500 px-2">Folders</h3>
          <div className="mt-2 space-y-1">
            {mockFolders.map((folder) => (
              <div
                key={folder.id}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h5l2 3h9a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{folder.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
