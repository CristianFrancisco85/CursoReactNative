export interface IReqRes {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        IUsuario[];
    support:     Support;
}

export interface IUsuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
