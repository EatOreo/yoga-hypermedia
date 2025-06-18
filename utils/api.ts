import { allClasses, type ClassItem } from "~/utils/types/class-item";
import { allTeachers, type TeacherItem } from "~/utils/types/teacher-item";
import { allEvents, type EventItem } from "~/utils/types/event-item";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | null = null

export function useSupabaseClient() {
  const config = useRuntimeConfig()
  if (!supabase) {
    supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
  }
  return supabase
}

export function useApi() {
    const supabase = useSupabaseClient();

    //TODO: maybe use a store or something to cache the database fetches since they
    const api = {
        async getClasses(): Promise<ClassItem[]> {
            const classes = await supabase.from('classes').select('*');
            return classes.data as ClassItem[];
        },
        async getClassesByTeacherId(id: number): Promise<ClassItem[] | undefined> {
            return allClasses.filter(c => c.teacherId === id);
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
        async getEventsByTeacherId(id: number): Promise<EventItem[] | undefined> {
            return allEvents.filter(e => e.teacherIds?.includes(id));
        }
    };
    return api;
}