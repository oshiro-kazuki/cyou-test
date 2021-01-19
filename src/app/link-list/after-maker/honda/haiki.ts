import { from } from "rxjs";
import { honda250 } from './syasyu/honda250';
import { honda401 } from './syasyu/honda401';

export const honda = [
    {haiki: '選択してください', syasyu: ''},
    {haiki: '126〜250cc', syasyu: honda250},
    {haiki: '401cc以上', syasyu: honda401},
];