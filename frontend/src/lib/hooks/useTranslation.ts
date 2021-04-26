import { useContext } from "react";
import { TranslateContext } from "@/lib/context/translate";

export function useTranslation() {
  return useContext(TranslateContext);
}
