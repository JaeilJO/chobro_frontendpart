export interface Inputs {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    source: 'Local';
}

export type InputInfo = {
    formType: 'username' | 'firstName' | 'lastName' | 'password' | 'source';
    type: string;
    title: string;
};
