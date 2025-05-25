import { supabase } from "@/app/lib/supabase"

export interface Data {
    id: string;
    name: string;
    country: string;
    city: string;
    profession: string;
    email: string;
    description: string;
  }


export const fetchUserData = async (id: string): Promise<Data> => {
    const { data: info, error } = await supabase
        .from("info")
        .select("*")
        .eq("id", id)
        .maybeSingle();
    if (error) {
        throw new Error(error.message);
    }

    return info as Data;
};
