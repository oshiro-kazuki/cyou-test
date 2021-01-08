import { hanbaiten } from './hanbaiten';
import { mente } from './mente';
import { oyaku } from './oyaku';
import { review } from './review';

export const menuList = [
  {
    title: 'バイクを探す',
    link: '//www.goobike.com/index.html',
    list: ''
  },
  {
    title: '販売店を探す',
    link: '',
    list: hanbaiten,
  },
  {
    title: 'メンテナンスを依頼する',
    link: '',
    list: mente
  },
  {
    title: 'バイクを売る',
    link: '//kaitori.bikebros.co.jp/alliance/?goobike',
    list: ''
  },
  {
    title: 'お役立ち情報',
    link: '',
    list: oyaku
  },
  {
    title: 'コミュニティ',
    link: '//www.goobike.com/community/',
    list: ''
  },
  {
    title: '検討中リスト',
    link: '//www.goobike.com/web/mysearch/compare_list.php',
    list: ''
  },
  {
    title: 'レビュー',
    link: '',
    list: review
  },
];