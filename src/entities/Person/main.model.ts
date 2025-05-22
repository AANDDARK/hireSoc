import { fetchUserData, type Data } from "./main.api";

export class Person {
    private data: Data;

    private constructor(data: Data) {
        this.data = data;
    }

    public static async create(id: string): Promise<Person> {
        const data = await fetchUserData(id);
        return new Person(data);
    }
}

