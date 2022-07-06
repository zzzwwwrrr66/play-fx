import * as $ from 'fxdom';
import * as _ from 'fxjs';
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency";
const log = console.log;

const Dom = {};
Dom.el = $.$el;
Dom.appendChild = (parent = document.body) => (dom) => {
	return parent?.appendChild(dom);
};
Dom.findAll = _.curry((name, dom) => {
	return dom.querySelectorAll(name)
});
Dom.on = (eventName, f) => (dom) => {
	dom.addEventListener(eventName, f);
}
Dom.findParent = _.curry((parentName ,dom) => {
	return dom.closest(parentName);
})
Dom.remove = $.$remove;

const Images = {};
Images.fetch = () => new Promise(resolve => setTimeout(() => resolve([
  { name: "HEART", url: "https://s3.marpple.co/files/m2/t3/colored_images/45_1115570_1162087.png" },
  { name: "하트", url: "https://s3.marpple.co/f1/2019/1/1235206_1548918825999_78819.png" },
  { name: "2", url: "https://s3.marpple.co/f1/2018/1/1054966_1516076769146_28397.png" }, { name: "6", url: "https://s3.marpple.co/f1/2018/1/1054966_1516076919028_64501.png"},{"name":"도넛","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918758054_55883.png"},{"name":"14","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077199329_75954.png"},{"name":"15","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077223857_39997.png"},{"name":"시계","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918485881_30787.png"},{"name":"돈","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918585512_77099.png"},{"name":"10","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077029665_73411.png"},{"name":"7","url":"https://s3.marpple.co/f1/2018/1/1054966_1516076948567_98474.png"},{"name":"농구공","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918719546_22465.png"},{"name":"9","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077004840_10995.png"},{"name":"선물","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918791224_48182.png"},{"name":"당구공","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918909204_46098.png"},{"name":"유령","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918927120_12321.png"},{"name":"원숭이","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919417134_80857.png"},{"name":"3","url":"https://s3.marpple.co/f1/2018/1/1054966_1516076802375_69966.png"},{"name":"16","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077254829_36624.png"},{"name":"안경","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918944668_23881.png"},{"name":"폭죽","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919005789_67520.png"},{"name":"폭죽 2","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919027834_48946.png"},{"name":"박","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919062254_67900.png"},{"name":"톱니바퀴","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919302583_24439.png"},{"name":"11","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077078772_79004.png"},{"name":"핫도그","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919086961_23322.png"},{"name":"고기","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919274214_33127.png"},{"name":"책","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919326628_13977.png"},{"name":"돋보기","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919363855_26766.png"},{"name":"집","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919395033_19373.png"},{"name":"사람","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918696715_44274.png"},{"name":"연필","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919437239_32501.png"},{"name":"파일","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919468582_23707.png"},{"name":"스피커","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919495804_49080.png"},{"name":"트로피 ","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918438617_69000.png"},{"name":"카메라","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919847041_33220.png"},{"name":"그래프","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918521301_43877.png"},{"name":"가방","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918642937_11925.png"},{"name":"입술","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919886042_10049.png"},{"name":"fire","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920036111_19302.png"},{"name":"TV","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920054808_42469.png"},{"name":"핸드폰","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920109727_43404.png"},{"name":"노트북","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920142776_26474.png"},{"name":"전구","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920181784_14964.png"},{"name":"장미","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920264149_78607.png"},{"name":"맥주","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920312701_18073.png"},{"name":"마이크","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920397855_39832.png"},{"name":"별","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920420823_49166.png"},{"name":"와이파이","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920438005_35247.png"},{"name":"헤드폰","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920468136_82088.png"},{"name":"peace","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920538719_19072.png"},{"name":"계산기","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920348341_40080.png"},{"name":"poo 2","url":"https://s3.marpple.co/f1/2019/1/1235206_1548924259247_12839.png"},{"name":"poo 3","url":"https://s3.marpple.co/f1/2019/1/1235206_1548924850867_72121.png"},{"name":"poo 4","url":"https://s3.marpple.co/f1/2019/1/1235206_1548925154648_40289.png"},{"name":"poo","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918988097_38121.png"},{"name":"모니터","url":"https://s3.marpple.co/f1/2016/7/1043023_1469769774483.png"},{"name":"talk","url":"https://s3.marpple.co/f1/2019/1/1235206_1548927111573_76831.png"},{"name":"keyboard","url":"https://s3.marpple.co/f1/2018/1/1054966_1516330864360_25866.png"},{"name":"daily 2","url":"https://s3.marpple.co/f1/2019/1/1235206_1548926169159_58295.png"},{"name":"daily","url":"https://s3.marpple.co/f1/2018/7/1199664_1531814945451_49451.png"},{"name":"편지","url":"https://s3.marpple.co/f1/2019/1/1235206_1548920087850_99421.png"},{"name":"sns 하단바 2","url":"https://s3.marpple.co/f1/2019/1/1235206_1548917218903_88079.png"},{"name":"sns 하단바","url":"https://s3.marpple.co/f1/2019/1/1235206_1548917192465_28365.png"},{"name":"sns 이모지 6","url":"https://s3.marpple.co/f1/2019/1/1235206_1548927313417_99007.png"},{"name":"sns 이모지","url":"https://s3.marpple.co/f1/2019/1/1235206_1548927219485_18861.png"},{"name":"13","url":"https://s3.marpple.co/f1/2018/1/1054966_1516077164559_59630.png"},{"name":"iphone","url":"https://s3.marpple.co/f1/2016/7/1043023_1469769886837.png"},{"name":"아이패드","url":"https://s3.marpple.co/f1/2016/7/1043023_1469769820297.png"},{"name":"컴퓨터","url":"https://s3.marpple.co/f1/2016/7/1043023_1469769802862.png"},{"name":"5","url":"https://s3.marpple.co/f1/2018/1/1054966_1516076888018_74741.png"},{"name":"poo 1","url":"https://s3.marpple.co/f1/2019/1/1235206_1548924230868_28487.png"},{"name":"Sns icon_똥 안경","url":"https://s3.marpple.co/f1/2017/2/1043404_1487211657799.png"},{"name":"Sns icon_똥 웃음","url":"https://s3.marpple.co/f1/2017/2/1043404_1487211686108.png"},{"name":"4","url":"https://s3.marpple.co/f1/2018/1/1054966_1516076850148_36610.png"},{"name":"Sns icon_똥 놀림","url":"https://s3.marpple.co/f1/2017/2/1043404_1487211670017.png"},{"name":"달력","url":"https://s3.marpple.co/f1/2019/1/1235206_1548919531014_35045.png"},{"name":"자물쇠","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918410738_59815.png"},{"name":"손 이모지","url":"https://s3.marpple.co/f1/2019/1/1235206_1548918353391_54897.png"},{"name":"Sns icon_손바닥","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210472038.png"},{"name":"Sns icon_검지","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210393226.png"},{"name":"Sns icon_롹","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210522978.png"},{"name":"Sns icon_하이파이브","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210538695.png"},{"name":"Sns icon_브이","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210508758.png"},{"name":"Sns icon_중지","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210428137.png"},{"name":"Sns icon_주먹","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210372629.png"},{"name":"Sns icon_박수","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210444994.png"},{"name":"Sns icon_따봉","url":"https://s3.marpple.co/f1/2017/2/1043404_1487210488684.png"},{"name":"손 이모지 2","url":"https://s3.marpple.co/f1/2019/1/1235206_1548921736267_35010.png"},{"name":"손 이모지 3","url":"https://s3.marpple.co/f1/2019/1/1235206_1548922150829_10878.png"}
]), 200));

const _html = {};
_html.images = (obj) => {
	const result = document.createElement('div');
	result.classList = `images`;
	result.innerHTML = _.strMap((item)=>`
	<div class="image">
		<div class="box">
			<img src="" class="fade" data-lazy="${item.url}">
		</div>
		<p class="name">${item.name}</p>
		<button class="remove">X</button>
	</div>
	`,obj);

	return result;
};
Images.removeItem = (btnSel, target, before = a => a, after = a => a ) => (imgs) => {
	_.tap(_.go(imgs,
		Dom.findAll(btnSel),
		_.each((img) => _.go(img,
			Dom.on('click', async( {currentTarget} )=>{
				if(await _html.confirm()) {
					_.go(Dom.findParent(target, currentTarget),
					_.tap(before),
					Dom.remove,
					_.tap(after),
					)
				}
			})))
		)
	)
	return imgs;
};
Images.takeAllWithLimit = _.curry((limit, iter) => {
	let r = L.range(Infinity);
	return _.go(iter,
		_.groupBy(_ => Math.floor(r.next().value / limit)),
		L.values,
		L.map(L.map(f => f())),
		L.map(C.takeAll),
	);
})

Images.loader = (limit)=> (imgs) => {
	_.go(Dom.findAll('img', imgs),
	L.map((img) => _ => new Promise(resolve => { // 아래에서 _.go할때 promise 가 풀리므로 한번더 감싸준다
		img.src = img.getAttribute('data-lazy');
		img.onload = () => resolve(img);
	})),
	(imgs)=>{
		_.go(imgs,
			Images.takeAllWithLimit(limit),
			_.each(_.each(img=>{
				img.classList.add('fade-in');
			}))
		);
		return imgs
	},
);
return imgs;
}

_html.confirm = () => new Promise(resolve=>{
	_.go(`
	<div class="confirm">
		<div class="body">
			<p class="msg">정말 삭제 하시겠습니까?</p>
			<div class="buttons">
				<button type="button" class="no" value='false'>취소</button>
				<button type="button" class="yes ok" value='true'>확인</button>
			</div>
		</div>
	</div>`,
	Dom.el,
	Dom.appendChild(),
	Dom.findAll('button'),
	_.map(btn => _.go(btn,
		Dom.on('click', (e)=>{
			if(e.currentTarget.value === 'true') {
				resolve(true);
			}
			Dom.remove(Dom.findParent('.confirm', e.currentTarget));
		})
		))
	);
});

_.go(Images.fetch(),
_html.images,
Dom.appendChild(document.body),
Images.removeItem('button','.image', (a)=>{log('before remove ',a)}, (a)=>{log('after remove ',a)}),
Images.loader(2),
)


