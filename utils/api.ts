import { getAllClassItems, type ClassItem } from "~/utils/types/class-item";
import { getAllTeacherItems, type TeacherItem } from "~/utils/types/teacher-item";
import { getAllEventItems, type EventItem } from "~/utils/types/event-item";
import { getAllBlogItems, type BlogItem } from "./types/blog-item";

export function useApi() { // we create a hook to have a single, reusable, composable api client across the app
    const api = {
        async getClasses(): Promise<ClassItem[]> {
            const cs = getAllClassItems();
            return cs;
        },
        async getHighlightedClasses(): Promise<ClassItem[]> {
            const cs = getAllClassItems();
            return cs.filter(c => c.highlighted);
        },
        async getClassesByTeacherId(id: number): Promise<ClassItem[] | undefined> {
            const cs = getAllClassItems();
            return cs.filter(c => c.teacherId === id);
        },
        async getClassByTitle(title: string): Promise<ClassItem | undefined> {
            const cs = getAllClassItems();
            return cs.filter(c => c.title === title)[0];
        },
        async getTeachers(): Promise<TeacherItem[]> {
            const ts = getAllTeacherItems();
            return ts;
        },
        async getTeacherById(id: number): Promise<TeacherItem | undefined> {
            const ts = getAllTeacherItems();
            return ts.filter(t => t.id == id)[0];
        },
        async getTeacherByName(name: string): Promise<TeacherItem | undefined> {
            const ts = getAllTeacherItems();
            return ts.filter(t => t.name == name)[0];
        },
        async getEvents(): Promise<EventItem[]> {
            const es = getAllEventItems();
            return es;
        },
        async getHighlightedEvents(): Promise<EventItem[]> {
            const es = getAllEventItems();
            return es.filter(e => e.highlighted);
        },
        async getEventByTitle(title: string): Promise<EventItem | undefined> {
            const es = getAllEventItems();
            return es.filter(e => e.title === title)[0];
        },
        async getEventsByTeacherId(id: number): Promise<EventItem[] | undefined> {
            const es = getAllEventItems();
            return es.filter(e => e.teacherIds?.includes(id));
        },
        async getBlogPosts(): Promise<BlogItem[] | undefined> {
            const ps = getAllBlogItems();
            return ps;
        },
        async getHighlightedBlogPosts(): Promise<BlogItem[] | undefined> {
            const ps = getAllBlogItems();
            return ps.filter(p => p.highlighted);
        },
        async getBlogByTitle(title: string): Promise<BlogItem | undefined> {
            const ps = getAllBlogItems();
            return ps.filter(p => p.title === title)[0];
        }
    };
    return api;
}