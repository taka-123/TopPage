const portfolios = [
    {
    title: 'BunguShop', 
    img: 'img/portfolio/bungushop.png',
    url: 'http://118.27.17.227/bungushop/itemlist.php',
    langs: 'HTML/CSS、JavaScript、jQuery、PHP、MySQL、GitHub、Docker', 
    features: [
        `敢えてBootStrapを使わずに作成`,
        `ログインに<span class="red">Cookie</span>を使用`,
        `カートマーク横に、<span class="red">合計購入予定数量表示</span>`,
        `並び替え変更時に自動submit`,
        `商品<span class="red">画像にマウスオーバーで、商品説明表示</span>`,
        `ユーザ情報のメールアドレス変更時に、confirm表示`,
        `<span class="red">セキュリティ</span>対策（XSS、SQLインジェクション、CSRF）`,
        `<span class="red">ページネーション</span>の実装`,
        `ランキング機能の実装（各商品の全ユーザー購入数合計より）`,
        `レスポンシブデザイン 等`
    ],
    github: `https://github.com/taka-123/BunguShop`
    },
    {
    title: 'VeggieShop', 
    img: 'img/portfolio/veggieshop.png',
    url: 'http://118.27.17.227/veggieshop/index.php',
    langs: 'HTML/CSS、JavaScript、jQuery、Bootstrap、PHP、MySQL、GitHub、Docker', 
    features: [
        `<span class="red">BootStrap使用</span>`,
        `並び替え変更時に<span class="red">自動submit</span>`,
        `<span class="red">セキュリティ</span>対策（XSS、SQLインジェクション、CSRF）`,
        `<span class="red">ページネーション</span>の実装`,
        `ランキング機能の実装（各商品の全ユーザー購入数合計より）`,
        `レスポンシブデザイン 等`
    ],
    github: `https://github.com/taka-123/VeggieShop`
    },
    {
    title: 'トップページ', 
    img: 'img/portfolio/top_page.png',
    url: '#',
    langs: 'HTML/CSS、JavaScript、GitHub', 
    features: [
        `敢えて<span class="red">jQueryを使わずに</span>作成`,
        `<span class="red">モジュール</span>の活用（JavaScript）`,
        `<span class="red">「ポートフォリオの情報のみを記すportfolio.js」を作成</span>し、その記述を変更するだけで、スライドの切替に対して画像や各情報が切り替わるようリファクタリング`,
        `<span class="red">スライドショー</span>の実装`,
        `<span class="red">画像のプリロード</span>`,
        `別タブでポートフォリオを見られるよう設定`,
        `レスポンシブデザイン 等`
    ],
    github: `https://github.com/taka-123/TopPage`
    }
];

export {portfolios};