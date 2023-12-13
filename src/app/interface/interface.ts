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
