import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://idhonlkhezfymosxjvie.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_KVMFsVyr0zSUv1TbFtfiFQ_vbdCyUqt";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
