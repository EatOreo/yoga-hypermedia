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
            const cs = await supabase.from('classes').select('id, title, subtitle, intensity, image');
            return cs.data as ClassItem[];
        },
        async getClassesByTeacherId(id: number): Promise<ClassItem[] | undefined> {
            const cs = await supabase.from('classes')
                .select('id, title, subtitle, intensity, image')
                .eq('teacherId', id);
            return cs.data as ClassItem[];
        },
        async getClassByTitle(title: string): Promise<ClassItem | undefined> {
            const c = await supabase.from('classes')
                .select('*')
                .eq('title', title);
            return (c.data as ClassItem[])[0]
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