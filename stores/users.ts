import { atom } from 'nanostores';
export const userInfo: any = atom({});

export function getUserInfo(user: any) {
    userInfo.set(user);
}