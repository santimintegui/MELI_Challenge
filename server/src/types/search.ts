import { MeliItem } from "./items";

export type SearchData = {
    results: MeliItem[];
    filters: Filters[];
}

export type Filters = {
    id: string;
    name: string;
    type: string;
    values:FilterValues[];
}

type FilterValues = {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
}

type PathFromRoot = {
    id: string;
    name: string;
}