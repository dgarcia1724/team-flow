"use client";

import { Folder } from "../types/folder";
import { mockFolders } from "../data/mockData";

function Breadcrumb({ currentFolder }: { currentFolder: Folder | null }) {
  if (!currentFolder) return null;

  const path: Folder[] = [];
  let current: Folder | null = currentFolder;

  while (current) {
    path.unshift(current);
    current = mockFolders.find((f) => f.id === current?.parentId) || null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-rose-600">
      {path.map((folder, index) => (
        <span key={folder.id} className="flex items-center gap-2">
          {index > 0 && <span>›</span>}
          <span>{folder.name}</span>
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-normal text-gray-900">
                Welcome to Drive
              </h1>
              <Breadcrumb currentFolder={null} />
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md text-sm font-medium transition-colors duration-200">
                New
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white font-medium">
                U
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
