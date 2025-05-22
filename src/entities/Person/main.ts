import { Person } from "./main.model";

export let currentUser: Person;

export const initUser = async (id: string) => {
    currentUser = await Person.create(id);
};