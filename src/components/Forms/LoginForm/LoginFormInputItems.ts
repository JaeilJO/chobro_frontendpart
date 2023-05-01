import { InputItemType } from './LoginForm.types';

//formType이 따로 있습니다. 현재 "username" | "password"로 되어있습니다
//추가할 type이 있으면, LoginForm.types.ts에서 수정가능합니다.

export const inputItems: InputItemType[] = [
    {
        type: 'email',
        formType: 'username',
        title: 'Email',
    },
    {
        type: 'password',
        formType: 'password',
        title: 'Password',
    },
];
