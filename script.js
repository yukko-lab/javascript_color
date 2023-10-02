// JavaScript

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');
const neko = document.getElementById('neko');

//↓
//定数とは「箱」のようなもので、文字列、数値、式などを入れておくことができます。定数を使うことで、同じコードを何度も書かずに使い回したり、コードをより見やすく整理できます。
//constの後ろに書かれているのが、定数の名前（箱につけるラベルのようなもの）です。ここでは、カラーピッカーを color、カラーピッカーの上に書かれているテキストを、text という名前にしています。




//console.log(document.getElementById('myColor').value);
//↓
//document.getElementById('ID名')。
//HTMLファイル内の中から指定したID名の要素を取得しています
//.valueを付けることで「値」を取得しています。
//現時点では、カラーピッカーで他の色を選んでも、自動的にはコンソールの情報は変更されません（まだ指示をしていないため）。





//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;
//↓
//HTML上のテキストを書き換えて、カラーコードが画面に表示されるようにします。
//①まずは文字の書き換えを行うコードを確認します。
//②コンソールに表示させていた、カラーコードが、画面上のテキストと置き換わるように変更します。
//画面上にカラーコードを表示できるようになったので、console.logの方は 不要になります。コメントアウト（//）して非表示にしておきます。






text.textContent = color.value;
//↓
//「テキストの変更」のときに書いたコードを書き換える
//【補足】変数と定数
//constで宣言する「定数」は中身を入れ替えられない（=再代入できない）性質があります。似たようなものにletで宣言する「変数」があり、こちらは中身の入れ替えが可能（=再代入できる）です。





// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);
//↓
//addEventListener()を使って、動作を引き起こすためのきっかけを設定します。きっかけにあたるものを「イベント」と言います。
//何が：カラーピッカー（const color で定義した color を使います）
//どうなったら：色が選択されたら（inputされたら）
//どうする：背景色を変える（changeColor という動作をさせる）
//まだchangeColorの動作を定義していないので、この段階ではエラーになります。






function changeColor(){
    // カラーコードを表示
      //text.textContent = color.value;
      // 背景色を変更
  document.body.style.backgroundColor = color.value;

  neko.style.color = color.value;

  if (color.value === '#ffffff') {
    text.textContent = 'コード：' + color.value + '(white)';
  } else if (color.value === '#000000') {
    text.textContent = 'コード：' + color.value + '(black)';
  }else {
    text.textContent = 'コード：' + color.value;
    }

  }

    