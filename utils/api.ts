import { allClasses, type ClassItem } from "~/types/class-item";

// this could call like an actual api
const api = {
    async getClasses(): Promise<ClassItem[]> {
        return allClasses;
    },
    async getClassByTitle(title: string): Promise<ClassItem> {
        return allClasses.filter(c => c.title === title)[0];
    },
};

export default api;