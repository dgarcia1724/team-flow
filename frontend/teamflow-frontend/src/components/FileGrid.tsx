import { Folder, File } from "../types/folder";
import { mockFolders, mockFiles } from "../data/mockData";

export default function FileGrid() {
  return (
    <div className="flex-1 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mockFolders.map((folder) => (
          <div
            key={folder.id}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h5l2 3h9a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mt-2 text-sm font-medium text-gray-900">
              {folder.name}
            </span>
          </div>
        ))}

        {mockFiles.map((file) => (
          <div
            key={file.id}
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mt-2 text-sm font-medium text-gray-900">
              {file.name}
            </span>
            <span className="text-xs text-gray-500">{file.extension}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
