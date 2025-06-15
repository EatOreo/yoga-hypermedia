import { allClasses, type ClassItem } from "~/utils/types/class-item";
import { allTeachers, type TeacherItem } from "~/utils/types/teacher-item";
import { allEvents, type EventItem } from "~/utils/types/event-item";

// this could call like an actual api
// we could use supabase and make these functions use the supabase client!
const api = {
    async getClasses(): Promise<ClassItem[]> {
        return allClasses;
    },
    async getClassByTeacherId(id: number): Promise<ClassItem | undefined> {
        return allClasses.find(c => c.teacherId === id);
    },
    async getClassByTitle(title: string): Promise<ClassItem | undefined> {
        return allClasses.find(c => c.title === title);
    },
    async getTeachers(): Promise<TeacherItem[]> {
        return allTeachers;
    },
    async getTeacherById(id: number): Promise<TeacherItem | undefined> {
        return allTeachers.find(t => t.id === id);
    },
    async getTeacherByName(name: string): Promise<TeacherItem | undefined> {
        return allTeachers.find(t => t.name === name);
    },
    async getEvents(): Promise<EventItem[]> {
        return allEvents;
    },
    async getEventByTitle(title: string): Promise<EventItem | undefined> {
        return allEvents.find(e => e.title === title);
    },
    async getEventByTeacherId(id: number): Promise<EventItem | undefined> {
        return allEvents.find(e => e.teacherIds?.includes(id));
    }
};

export default api;