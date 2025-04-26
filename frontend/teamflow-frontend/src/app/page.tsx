import Sidebar from "../components/Sidebar";
import FileGrid from "../components/FileGrid";
import { FolderProvider } from "../context/FolderContext";
import { mockFolders } from "../data/mockData";
import { Folder } from "../types/folder";

function Breadcrumb({ currentFolder }: { currentFolder: Folder | null }) {
  if (!currentFolder) return null;

  const path: Folder[] = [];
  let current: Folder | null = currentFolder;

  while (current) {
    path.unshift(current);
    current = mockFolders.find((f) => f.id === current?.parentId) || null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      {path.map((folder, index) => (
        <span key={folder.id} className="flex items-center gap-2">
          {index > 0 && <span>›</span>}
          <span>{folder.name}</span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <FolderProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-white px-6 flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-800">My Drive</h1>
            <Breadcrumb currentFolder={null} />
          </header>
          <FileGrid />
        </div>
      </div>
    </FolderProvider>
  );
}
