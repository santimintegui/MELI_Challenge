export type ItemByIdResponse = {
    author: Author;
};

export type ItemsResponse = {
    author: Author;
 };

type Author = {
    name: string;
    lastname: string;
};