import { Module } from "@nestjs/common";
import { createClient } from "@supabase/supabase-js";
import { SupabaseService } from "./supabase.service";

const supabaseProvider = {
    provide: 'SUOABASE_CLIENT',
    useFactory: () => {
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    }
}

@Module({
    providers: [SupabaseService],
    exports[SupabaseService],
})

export class SupabaseModule {}