export interface Folder {
  id: string;
  name: string;
  type: "folder" | "file";
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
  size?: number;
  extension?: string;
}

export interface File extends Folder {
  type: "file";
  size: number;
  extension: string;
}
