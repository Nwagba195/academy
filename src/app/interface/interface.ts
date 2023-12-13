export interface IBook {
  id: number;
  title: string;
  cover_image: string;
  author: string;
}

export interface BookState {
  loading: boolean;
  books: IBook[];
  error: string | undefined;
  itemsPerPage: number;
}

export interface IYBOOK extends IBook {
  student: number;
  lesson: number;
  days: number;
  points: number;
  role: string;
  teacher_image: string;
  difficulty: string;
}
