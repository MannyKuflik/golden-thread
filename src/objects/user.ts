import { DonatedCharity } from './donatedCharity';

export class User {
    id: number = 0;
    firstname: string = "";
    lastname: string = "";
    email: string = "";
    street: string = "";
    city: string = "";
    state: string = "";
    zip: string = "";
    password: string = "";
    userList: Array<DonatedCharity> = [];
}