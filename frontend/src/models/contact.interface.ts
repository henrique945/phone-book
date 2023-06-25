export interface ContactInterface {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;

  removeContact?: (id: number) => void;
}
