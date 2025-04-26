"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Folder } from "../types/folder";

interface FolderContextType {
  currentFolder: Folder | null;
  setCurrentFolder: (folder: Folder | null) => void;
}

const FolderContext = createContext<FolderContextType | undefined>(undefined);

export function FolderProvider({ children }: { children: ReactNode }) {
  const [currentFolder, setCurrentFolder] = useState<Folder | null>(null);

  return (
    <FolderContext.Provider value={{ currentFolder, setCurrentFolder }}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolder() {
  const context = useContext(FolderContext);
  if (context === undefined) {
    throw new Error("useFolder must be used within a FolderProvider");
  }
  return context;
}
