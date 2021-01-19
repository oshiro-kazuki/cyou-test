import { from } from "rxjs";
import { yamaha50 } from './syasyu/yamaha50';
import { yamaha125 } from './syasyu/yamaha125';

export const yamaha = [
    {haiki: '選択してください', syasyu: ''},
    {haiki: '50cc以下', syasyu: yamaha50},
    {haiki: '51〜125cc以下', syasyu: yamaha125},
];