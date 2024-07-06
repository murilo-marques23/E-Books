export interface iSingin {
    email: string;
    senha: string;
};

export interface iSingUp {
    nome: string;
    email: string;
    senha: string;
    confirmacaosenha: string;


}

export interface iUser{
    name: string;
    email: string;
}

export interface iSinginData {
    email: string;
    password: string;
}

export interface iSingUpData {
    name: string;
    email: string;
    password: string;

}