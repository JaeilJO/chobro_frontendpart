export type FormType = 'username' | 'firstName' | 'lastName' | 'password' | 'source';

export type InputItemType = {
    formType: FormType;
    type: string;
    title: string;
};

export interface Inputs {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}
