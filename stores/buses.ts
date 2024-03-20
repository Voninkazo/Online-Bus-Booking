import { atom } from 'nanostores';
import type { Bus } from '../src/utils/type';
export const busesInfo: any = atom([]);

export function getBusesInfo(buses: Bus[]) {
    busesInfo.set(buses);
}