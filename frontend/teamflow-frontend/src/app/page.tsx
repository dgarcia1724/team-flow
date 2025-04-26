"use client";

import Sidebar from "../components/Sidebar";
import FileGrid from "../components/FileGrid";
import Header from "../components/Header";
import { FolderProvider } from "../context/FolderContext";

export default function Home() {
  return (
    <FolderProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 overflow-auto">
            <FileGrid />
          </div>
        </div>
      </div>
    </FolderProvider>
  );
}
