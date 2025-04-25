import Sidebar from "../components/Sidebar";
import FileGrid from "../components/FileGrid";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white px-6 flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">My Drive</h1>
        </header>
        <FileGrid />
      </div>
    </div>
  );
}
