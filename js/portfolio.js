const portfolios = [
    {
    title: 'BunguShop', 
    img: 'img/portfolio/bungushop.png',
    url: 'http://118.27.17.227/bungushop/itemlist.php',
    langs: 'HTML/CSS、JavaScript、jQuery、PHP、MySQL、GitHub、Docker', 
    features: [
        'BootStrapを使わずに作成',
        'カート内合計数量の表示',
        '商品画像にマウスオーバーで、商品説明を表示',
        'ユーザ情報のメールアドレス変更時に、confirm表示',
        '並び替え変更時に自動submit',
        'セキュリティ対策（XSS、SQLインジェクション、CSRF）',
        'ページネーションの実装',
        'ランキング機能の実装(商品ごとの全ユーザーの購入数より) 等'
    ],
    github: 'https://github.com/taka-123/BunguShop'
    },
    {
    title: 'VeggieShop', 
    img: 'img/portfolio/veggieshop.png',
    url: 'http://118.27.17.227/veggieshop/index.php',
    langs: 'HTML/CSS、JavaScript、jQuery、Bootstrap、PHP、MySQL、GitHub、Docker', 
    features: [
        'BootStrapを使用',
        '並び替え変更時に自動submit',
        'セキュリティ対策（XSS、SQLインジェクション、CSRF）',
        'ページネーションの実装',
        'ランキング機能の実装(商品ごとの全ユーザーの購入数より) 等'
    ],
    github: 'https://github.com/taka-123/VeggieShop'
    },
    {
    title: 'トップページ', 
    img: 'img/portfolio/top_page.png',
    url: '#',
    langs: 'HTML/CSS、JavaScript、GitHub', 
    features: [
        'jQueryを使わずに作成',
        'スライドショーの実装',
        '画像のプリロード',
        'モジュールの活用（JavaScript）',
        '「ポートフォリオの情報のみを記すportfolio.js」を作成し、その記述を変更するだけで、スライドの切替に対して画像や各情報が切り替わるようリファクタリング 等'
    ],
    github: 'https://github.com/taka-123/TopPage'
    }
];

export {portfolios};