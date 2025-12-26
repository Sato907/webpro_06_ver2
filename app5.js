//更新前
"use strict";
const { name } = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
//0app.use("/public", express.static(__dirname + "/public"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

// 期末課題

let nietzsche = [
  { name:"フリードリヒ・ニーチェ", birth:1844, death:1900,intro:"現代の京都に突如として表れた，自称哲学者の美青年．その正体は，19世紀ドイツを代表する哲学者ニーチェだった!?かつて「神は死んだ」と宣言しキリスト教的道徳を打ち壊そうとした過激な思想家としての面影を残しつつ，現代の日本のサブカルチャーに異常なまでの適応力をみせる．特にソシャゲを嗜んでおり哲学を説く際においても例として挙げるほどである．主人公のアリサに対し，「末人」に陥るのではなく「超人」を目指せと説き，彼女が抱える悩みや閉塞感を，アクロバティックな論理と情熱的な言葉で解体していく．ちなみにニーチェは数々の偉業を達成しているが，女性にフラれ狂って死んだ．",
    thoughts: [
      {
        title: "超人",
        description: "既存の道徳を捨て去り，自らの意志で新たな価値を創造できる存在．ニヒリズムを克服した先にある理想像．"
      },
      {
        title: "蓄群道徳",
        description: "多数派の意見を良いものだと思い込むこと"
      },
      {
        title: "合理化",
        description: "欲しいモノが手に入りそうも無い時，そのモノの価値を低く見積もり自分を正当化すること．いわゆる負け惜しみ．酸っぱいブドウの話が有名である．"
      },
      {
        title: "ルサンチマン",
        description: "弱者が強者に対して抱く嫉妬や恨みの感情のこと．無力であるのにもかかわらず斜に構えている人間を指す．"
      },
      {
        title: "奴隷道徳",
        description: "弱者が強者に対してルサンチマン的になり「強者は悪」や「弱者であることがよい」などという道徳に縛られること．ニーチェはこの奴隷道徳の典型がキリスト教であると強く批判している．"
      },
      {
        title: "永劫回帰",
        description: "何事も繰り返される可能性を秘めているという思想．辛いことや苦しいことも繰り返される可能性がある．しにたい．ニーチェはこの考えに辿り着いたとき７日間寝込んだらしい．"
      },
      {
        title: "運命愛",
        description: "永劫回帰を受け入れること．「努力しても無駄だ」とニヒルになるのではなく，どのようなことも自分が欲したと思うこと．他人を羨んで嫉妬に駆られても，自分の運命を憎んでもなにも変わらないよね〜〜〜という考え．"
      },
      {
        title: "積極的ニヒリスト",
        description: "ニヒリストが「おれの人生は無意味！どうでもいいわ」というスタンスならば積極的ニヒリストは「おれの人生は無意味！だからこそ自由に生きてやる」というスタンス．自分の人生に積極的に向き合い，人生を危険に晒すこと．"
      },
      {
        title: "力への意思",
        description: "今よりもっと強くなろうとすること.今の環境に不満ならば斜に構え自分を納得させるのではなく，立ち向かい乗り越えていくこと．要するにガッツ．"
      },
      {
        title: "自己超克",
        description: "自分で自分を超えていくこと．行動の理由を他人に押し付けるのではなく，「自分自身がこうしたいからこうした」と自分自身の主人であることにより，自分の人生を愛することができるのかもしれない．"
      }
  ],book:"『悲劇の誕生』『反時代的考察』『人間的な、あまりに人間的な』『曙光』『悦ばしき知識』『ツァラトゥストラはこう言った』『善悪の彼岸』『道徳の系譜』『ワーグナーの場合』『偶像の黄昏』『アンチクリスト』『ニーチェ対ワーグナー』『この人を見よ』",story:"1,2,3,4,5,6,7,8,9,10,11,12"},
    
  { name:"セーレン・オービュ・キルケゴール", birth:1813, death:1855,intro:"京都の街に現れた，どこか影のある物静かな美青年．その正体は，デンマークの哲学者であり「実存主義の父」と呼ばれるキルケゴールである．ニーチェとは対称的で内向的で非常に繊細な性格であり，いわゆるこじらせ男子．誰にでも当てはまるような一般的な心理学や道徳ではなく，誰とも変わることのできない自分をどう生きるか，「主観的な真理」を追求する．絶望の淵に立つアリサに対して，絶望とは「死にいたる病」であるが，それと向き合うことでしか本当の自分は見つけられないと語りかける．キルケゴールは自分自身で正解を見つけ出すしかない，とニーチェに同意を示しながらも，自分が生きる上で神を信じたほうが人生と真剣に向き合えるため神を信じているというスタンスをしている．なおキルケゴールは当時14歳の少女であったレギーネに一目惚れし，彼女が17歳のときに婚約するも1年後に一方的に婚約を破棄するカスムーブをしている.ペンネームは「沈黙のヨハンネス」．非常に厨二くさい．",
    thoughts: [
      {
        title: "主観的真理",
        description: "流行とは関係なく，自分にとって真実．「2次元美少女は正義」は私にとっての主観的真理である．"
      },
      {
        title: "客観的真理",
        description: "主観的真理とは反対に，世間一般的な流行．「橋本環奈は正義」は客観的真理である．"
      },
      {
        title: "水平化の時代",
        description: "世間一般の意見，つまり客観的真理に大衆が流されること．出る杭は打たれる．"
      },
      {
        title: "自由のめまい",
        description: "未来は与えられるものではなく，自分の選択により決定される．ゆえに「なにかすること」も「なにもしないこと」も選べてしまうため，選ばなかった可能性が後悔として襲ってくる．手が届きそうなものが見えている時ほど不安に感じてしまう．「明日司法試験を受けろ」と言われても勝算が見込まれないため不安に感じないが，「明日データ通信の再試を受けろ」と言われると現実味を帯び始め人は不安に感じる．"
      }
    ],book:"『あれか、これか』『反復』『おそれとおののき』『哲学の断片』『不安の概念』『人生の諸段階』『哲学的断片への結びとしての非学問的結語』『現代の批判』『愛の業』『キリスト教の修練』『死に至る病』",story:"5,6,7"},

    { name:"アルトゥル・ショーペンハウアー", birth:1788, death:1860,intro:"京都の山奥にある喫茶店の店長をしている銀髪でどこか浮き世離れした雰囲気を纏う男性．その正体は19世紀ドイツの哲学者であり，ニーチェが最も影響を受けた意思の哲学者，ショーペンハウアーである．性格は徹底した悲観主義者である．この世は苦しみに満ちており，生きること自体が盲目的な生の意思に振り回されるだけの悲劇であると述べている．また，作中ではアリサの友人である理奈が抱く「何者かになりたい」という悩みに対し助言をしている．",
      thoughts: [
        {
          title: "振り子理論",
          description: "人生は苦悩と退屈の間を行ったり来たりする振り子運動のようなものであるという思想．たとえば，ソシャゲで強い武器が欲しいという「欲望」が生まれると同時に今持っていないという「苦悩」が生じる．そこで，やっとの思いで強い武器を手に入れることができてもそこで永久的に満足することができようか？答えは否である．欲望が満たされると，飽きて「退屈」になり，再び欲望と苦悩に苛まれる．このように絶え間ない欲望の出現を「富は海水に似ており，飲めば飲むほど喉が渇く」と評価している．"
        },
        {
          title: "客観的な半分",
          description: "外からみた自分像．職業や肩書，社会的地位など他人からみた世間での役割が該当する．"
        },
        {
          title: "主観的な半分",
          description: "内からみた自分像，自分の感性．人は外側の要因ばかりに焦点を当て幸せを求めがちであるが，実際に幸せを感じるのは主観的な半分である．たとえば美味いと評判のステーキを食べていたとしても，別れ話をされながら食べていれば幸せだと感じにくい．名声を追い求め他人の価値観に従ってすり合わせるよりも，健康な精神で自分の感性を磨く方が効率的に幸せになれるのかもしれない．作中では，「健康な乞食のほうが病める王よりもより幸福であろう」と表現している．また，客観的な半分に固執し身の丈に合っていない富を得ようとすると身を滅ぼすとも説いている．急に宝くじが当たって大金が振り込まれて精神が伴わずに湯水のようにギャンブルで金を溶かしてしまうよね．"
        },
        {
          title: "自己充足",
          description: "自分の幸福は主観的な半分にあり，この基盤となる自分を固めてから客観的な半分を身に付けていくという思想．そのためには確固たる自分の形成が重要である．曰く，「我々は他人に似せるために自分3/4を捨てなければならない」ため，孤独を愛さないということは自由を愛さないことと同義である．周りから浮かないように不自由を甘受し客観的な半分を着飾るか自由を愛し他者からの評価に振り回されることなく自己を形成していくか．どちらが幸福になれるのだろうか？"
        }
      ],book:"『充足理由根の四重の根について』『視覚と色彩について』『意思と表象としての世界』『自然における意思について』『倫理学の二つの根本問題』『付録と補遺』",story:"10,11"},
  

];

// 一覧
app.get("/manga", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('manga', {data: nietzsche} );
});

// Read　詳細表示
app.get("/manga/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = nietzsche[ number ];
  res.render('manga_detail', {name: number, data: detail} );
});

// Create　
app.post("/manga", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const name = nietzsche.length + 1;
  const birth = req.body.birth;
  const death = req.body.death;
  const intro = req.body.intro;
  const thought = req.body.thought;
  const book = req.body.book;
  const story = req.body.story
  nietzsche.push( { name: name, birth: birth, death: death, intro: intro, thought: thought, book: book, story: story } );
  console.log( nietzsche );
  res.render('manga', {data: nietzsche} );
});


// 　ここまで


app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db2', { data: station });
});

app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
  res.render('db2', { data: station });
  //res.redirect('/public/keiyo_add.html');

});

// app.get("/keiyo2", (req, res) => {
//   // 本来ならここにDBとのやり取りが入る
//   res.render('keiyo2', {data: station2} );
// });

// app.get("/keiyo2/:number", (req, res) => {
//   // 本来ならここにDBとのやり取りが入る
//   const number = req.params.number;
//   const detail = station2[ number ];
//   res.render('keiyo2_detail', {data: detail} );
// });


// 課題

let band = [
  { id:1, code:"001", name:"Craftone"},
  { id:2, code:"002", name:"雨上がり"},
  { id:3, code:"003", name:"solfea"},
  { id:4, code:"004", name:"waon"},
  { id:5, code:"005", name:"こもれび"},
  { id:6, code:"006", name:"しくす"},
];

app.get("/band_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
  res.render('db3', { data: band });


});

// 





app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken2", (req, res) => {
  //let hand = req.query.hand; //出した手
  let win = Number( req.query.win )|| 0; //数字化するためのNumber
  let total = Number( req.query.total )|| 0;
  let value = Number(req.query.radio)|| 0;
  console.log( {win, total,value});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  //yourの宣言を追加
  let your = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else if (num==3) cpu = 'パー';

  if(value==1) your = 'グー';
  else if(value==2) your = 'チョキ';
  else if(value==3) your = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  total +=1;

  if (num == 1 && value == 3 || num == 2 && value == 1 || num == 3 && value == 2){
    judgement = '勝ち';
    win += 1;
  }

  else if (num == 1 && value == 1 || num == 2  && value == 2 || num == 3 && value == 3){
    judgement = 'あいこ';
  }

  else {
    judgement = '負け';
  }

  

  const display = {
    your: your,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };
  res.render( 'janken2', display );//使うのはjanken2.ejs
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
