import { Folder, File } from "../types/folder";

export const mockFolders: Folder[] = [
  {
    id: "1",
    name: "My Drive",
    type: "folder",
    parentId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Documents",
    type: "folder",
    parentId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Images",
    type: "folder",
    parentId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Videos",
    type: "folder",
    parentId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Project A",
    type: "folder",
    parentId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Project B",
    type: "folder",
    parentId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "Project C",
    type: "folder",
    parentId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Subfolder A",
    type: "folder",
    parentId: "5",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockFiles: File[] = [
  {
    id: "9",
    name: "Project Proposal",
    type: "file",
    parentId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    size: 1024,
    extension: "docx",
  },
  {
    id: "10",
    name: "Team Photo",
    type: "file",
    parentId: "3",
    createdAt: new Date(),
    updatedAt: new Date(),
    size: 2048,
    extension: "jpg",
  },
  {
    id: "11",
    name: "Meeting Notes",
    type: "file",
    parentId: "5",
    createdAt: new Date(),
    updatedAt: new Date(),
    size: 512,
    extension: "docx",
  },
];
