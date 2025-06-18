import { type ClassItem } from "~/utils/types/class-item";
import { type TeacherItem } from "~/utils/types/teacher-item";
import { type EventItem } from "~/utils/types/event-item";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { BlogItem } from "./types/blog-item";

let supabase: SupabaseClient | null = null

export function useSupabaseClient() {
  if (!supabase) {
    const config = useRuntimeConfig()
    supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey);
  }
  return supabase
}

export function useApi() {
    const supabase = useSupabaseClient();
    const api = {
        async getClasses(): Promise<ClassItem[]> {
            const cs = await supabase.from('classes')
                .select('id, title, subtitle, intensity, image');
            return cs.data as ClassItem[];
        },
        async getHighlightedClasses(): Promise<ClassItem[]> {
            const cs = await supabase.from('classes')
                .select('id, title, subtitle, intensity, image')
                .eq("highlighted", true);
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
            const ts = await supabase.from('teachers')
                .select('id, name, image');
            return ts.data as TeacherItem[];
        },
        async getTeacherById(id: number): Promise<TeacherItem | undefined> {
            const t = await supabase.from('teachers')
                .select('*')
                .eq('id', id);
            return (t.data as TeacherItem[])[0];
        },
        async getTeacherByName(name: string): Promise<TeacherItem | undefined> {
            const t = await supabase.from('teachers')
                .select('*')
                .eq('name', name);
            return (t.data as TeacherItem[])[0];
        },
        async getEvents(): Promise<EventItem[]> {
            const es = await supabase.from('events')
                .select('title, image, type, date, description');
            return es.data as EventItem[];
        },
        async getHighlightedEvents(): Promise<EventItem[]> {
            const es = await supabase.from('events')
                .select('title, image, description')
                .eq("highlighted", true);
            return es.data as EventItem[];
        },
        async getEventByTitle(title: string): Promise<EventItem | undefined> {
            const e = await supabase.from('events')
                .select('*')
                .eq('title', title);
            return (e.data as EventItem[])[0];
        },
        async getEventsByTeacherId(id: number): Promise<EventItem[] | undefined> {
            const e = await supabase.from('events')
                .select('*')
                .contains('teacherIds', id.toString());
            return e.data as EventItem[];
        },
        async getBlogPosts(): Promise<BlogItem[] | undefined> {
            const ps = await supabase.from('blogs')
                .select('title, date, image, teaser')
                .order('id');
            return ps.data as BlogItem[];
        },
        async getBlogByTitle(title: string): Promise<BlogItem | undefined> {
            const p = await supabase.from('blogs')
                .select('*')
                .eq('title', title);
            return (p.data as BlogItem[])[0];
        }
    };
    return api;
}