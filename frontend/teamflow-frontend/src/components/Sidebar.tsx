"use client";

import { mockFolders } from "../data/mockData";
import { useFolder } from "../context/FolderContext";
import { useState } from "react";

export default function Sidebar() {
  const { currentFolder, setCurrentFolder } = useFolder();
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );

  const handleHomeClick = () => {
    setCurrentFolder(null);
  };

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const getChildFolders = (parentId: string | null) => {
    return mockFolders.filter((folder) => folder.parentId === parentId);
  };

  const renderFolder = (
    folder: (typeof mockFolders)[0],
    isTopLevel: boolean = true
  ) => {
    const isActive = currentFolder?.id === folder.id;
    const isExpanded = expandedFolders.has(folder.id);
    const hasChildren = getChildFolders(folder.id).length > 0;

    return (
      <div key={folder.id} className="space-y-1">
        <div
          onClick={() => setCurrentFolder(folder)}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
            isActive ? "bg-rose-50 text-rose-600" : "hover:bg-gray-100"
          }`}
        >
          {isTopLevel && hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder(folder.id);
              }}
              className="flex items-center justify-center w-5 h-5 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              isActive ? "text-rose-500" : "text-gray-500"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h5l2 3h9a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className={`font-semibold ${
              isActive ? "text-rose-600" : "text-gray-900"
            }`}
          >
            {folder.name}
          </span>
        </div>
        {isExpanded && hasChildren && (
          <div className="pl-8 space-y-1">
            {getChildFolders(folder.id).map((child) =>
              renderFolder(child, false)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-6">
      <button className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-lg p-3 mb-8 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer">
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
        <span className="font-semibold">New</span>
      </button>

      <div className="space-y-6">
        <div
          onClick={handleHomeClick}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
            !currentFolder ? "bg-rose-50 text-rose-600" : "hover:bg-gray-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              !currentFolder ? "text-rose-500" : "text-gray-500"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="font-semibold text-gray-900">Home</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Folders
          </h3>
          <div className="space-y-1">
            {getChildFolders(null).map((folder) => renderFolder(folder))}
          </div>
        </div>
      </div>
    </div>
  );
}
