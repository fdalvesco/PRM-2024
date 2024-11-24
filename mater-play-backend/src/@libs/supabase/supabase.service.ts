import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";
import { error } from "console";
import { data } from "cypress/types/jquery";

@Injectable()
export class SupabaseService {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase: SupabaseClient) {}


    async upload(movieId: string, file: any): Promise<any> {
        const { originalname, buffer } = file;

        const {} = await this.supabase.storage
        .from('mater-play')
        .upload(`movie\${Data.now()}_${originalname}`, buffer, {
            upsert: true,
        });

        if (error) throw error;

        return data;
        
    }
}