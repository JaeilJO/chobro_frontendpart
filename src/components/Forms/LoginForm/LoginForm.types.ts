export interface InputItemType {
    type: string;
    formType: FormType;
    title: string;
}

export type FormType = 'username' | 'password';

//onSubmit이 수집하는 데이터
export interface Inputs {
    username: string;
    password: string;
}
