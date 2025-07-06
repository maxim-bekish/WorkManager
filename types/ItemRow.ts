// types/todo.ts
export interface ItemRow {
  id: number;
  title: string;
  value: string | number;
  placeholder?: string;
  require: boolean;
  // Добавьте другие необходимые поля
}