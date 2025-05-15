
// This file redirects to the actual implementation in the hooks folder
import { useToast as useToastHook, toast } from "@/hooks/use-toast";

export const useToast = useToastHook;
export { toast };
