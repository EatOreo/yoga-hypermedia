import { allClasses, type ClassItem } from "~/types/class-item";
import { allTeachers, type TeacherItem } from "~/types/teacher-item";

// this could call like an actual api
// we could use supabase and make these functions use the supabase client!
const api = {
    async getClasses(): Promise<ClassItem[]> {
        return allClasses;
    },
    async getClassByTitle(title: string): Promise<ClassItem | undefined> {
        return allClasses.find(c => c.title === title);
    },
    async getTeacherById(id: number): Promise<TeacherItem | undefined> {
        return allTeachers.find(t => t.id === id);
    },
    async getTeacherByName(name: string): Promise<TeacherItem | undefined> {
        return allTeachers.find(t => t.name === name);
    }
};

export default api;