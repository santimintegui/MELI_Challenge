export type MELICATEGORY = {
    id: string;
    name: string;
    type: string;
    values: CATEGORY[];
    path_from_root: CATEGORYPATH[];
}

export type CATEGORY = {
    id: string;
    name: string;
    results: number;
}

type CATEGORYPATH = {
    id: string;
    name: string;
}