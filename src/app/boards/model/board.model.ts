export interface IBoardCard {
  id: string,
  title: string,
  description: string
}

export interface INewBoardData {
  title: string,
  description: string
}

export interface IBoardData {
  id: string,
  title: string,
  description: string,
  columns: IColumnData[],
}

export interface IUpdateBoardData {
  title: string,
  description: string
}

export interface IColumnData {
  id: string,
  title: string,
  order: number,
  tasks: ITaskData[],
}

export interface ITaskData {
  id: string,
  title: string,
  order: number,
  description: string,
  userId: string,
  files: IFileData[],
}

export interface IFileData {
  filename: string,
  fileSize: number
}
