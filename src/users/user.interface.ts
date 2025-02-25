export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  country?: string | undefined;
  city?: string | undefined;
}
