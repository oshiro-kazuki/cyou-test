import { from } from "rxjs";
import { yamaha } from './yamaha/haiki';
import { honda } from './honda/haiki';

export const maker = [
    {maker: '選択してください', haiki: ''},
    {maker: 'ヤマハ', haiki: yamaha},
    {maker: 'ホンダ', haiki: honda},
];