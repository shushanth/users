export interface Task {
  taskId?: number;
  task: string;
  createdDate?: string;
}

export interface Note {
  noteId?: number;
  note: string;
  createdTime: string;
}

export interface HomeTask {
  loading: boolean;
  tasks: Task[];
  error: boolean;
}

export interface HomeNote {
  loading: boolean;
  notes: Note[];
  error: boolean;
}

export interface HomeState {
  homeTasks: HomeTask;
  homeNotes: HomeNote;
}
