import { MELICATEGORY } from "./categories";
import { MELIITEM } from "./items";

export type SEARCHDATA = {
    results: MELIITEM[];
    available_filters: MELICATEGORY[];
}