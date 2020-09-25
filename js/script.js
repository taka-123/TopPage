import {portfolios} from "./portfolio.js";

// ポートフォリオ画像の全てを、プリロード（ダウンロードし、キャッシュ）する。
portfolios.forEach(function(portfolio) {
    let imgTag = document.createElement('img');
    imgTag.src = portfolio['img'];
})

// 現在ページ番号（初期化）
let current = 1;

// portfolio配列から、現在ページの、引数指定のプロパティの値を取得
function pf_data(property) {
    return portfolios[current-1][property];
}

// 情報の切替（引数numに次へなら1,前へなら-1が入る想定）
function changeInfo(num) {
    // 現在ページにnumを足した数字が登録画像数の範囲内なら、
    if(current + num >= 1 && current + num <= portfolios.length) {
        // 現在ページの値を足した数字に更新し、
        current += num;
        pageUrl();
        pageTitle();
        pageImg();
        pageInfo('langs');
        pageFeature();
        pageInfo('github');
        set_github_href();
        pageNum();
    }
}

// 現在ページに合わせたURLを、スライドのリンク先として設定
function pageUrl() {
    document.getElementById('url').href = pf_data('url');
}

// 現在ページに合わせたタイトルを、『1. BunguShop』のように表示
function pageTitle() {
    const title = pf_data('title');
    document.getElementById('title').textContent = `${current}. ${title}`;
}

// 現在ページに合わせたイメージを表示(src属性に画像パスを設定)
function pageImg() {
    document.getElementById('img').src = pf_data('img');
}

// id属性に「info」を持つHTML要素のテキストを、[portfolios配列・現在ページ・「info」プロパティの値]に書き換え
function pageInfo(info) {
    document.getElementById(info).textContent = pf_data(info);
}

// こだわった点の内容(li要素)を全て削除（初期化）
function deleteFeature() {
    document.getElementById('features').innerHTML = '';
}
// 現在ページに合わせたこだわった点を全て表示
function pageFeature() {
    // 一旦、ul要素内（li要素全て）を削除
    deleteFeature();
    // 一点ずつul要素内にli要素を追加
    pf_data('features').forEach(function(feature) {
        const li = `<li class="feature">${feature}</li>`;
        document.getElementById('features').insertAdjacentHTML('beforeend', li);
    })    
}

// #githubのテキスト内容を、href属性にも設定
function set_github_href() {
    document.getElementById('github').href = document.getElementById('github').textContent;
}

// 『3 / 5』のように、現在ページと全体ページ数を表示
function pageNum() {
    document.getElementById('page').textContent = `${current} / ${portfolios.length}`;
}


/******* ＤＯＭ操作 *******/

// ポートフォリオの件数を表示
document.getElementById('pf_length').textContent = portfolios.length

// 現在ページの情報を取得・表示
changeInfo(0);

// 前へボタンを押したときの処理
document.getElementById('prev').onclick = function() {
    changeInfo(-1);
}

// 次へボタンを押したときの処理
document.getElementById('next').onclick = function() {
    changeInfo(1);
}