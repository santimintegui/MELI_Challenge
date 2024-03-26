export type MeliCategory = {
    id: string;
    name: string;
    type: string;
    values: Category[];
    path_from_root: CategoryPath[];
}

export type Category = {
    id: string;
    name: string;
    results: number;
}

type CategoryPath = {
    id: string;
    name: string;
}