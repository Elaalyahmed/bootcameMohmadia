export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface DataState {
  [key: string]: ApiState<any>;
}

export interface ExampleData {
  id: number;
  title: string;
  completed: boolean;
}