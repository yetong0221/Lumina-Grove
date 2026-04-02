import { LucideIcon } from 'lucide-react';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Tree {
  id: string;
  name: string;
  type: 'Lychee' | 'Longan';
  variety: string;
  age: number;
  price: number;
  location: string;
  coordinates: { x: number; y: number };
  status: 'available' | 'adopted';
  adopterName?: string;
  image: string;
  imageUrl?: string;
  yield: number; // kg
  co2Offset: number; // kg
  farmerName: string;
  farmer?: string;
  story: string;
  seasonData?: Record<Season, { status: string; description: string }>;
}

export type Tier = 'Observer' | 'Nurturer' | 'Steward' | 'Legacy';

export const MOCK_TREES: Tree[] = [
  {
    id: '1',
    name: '古树桂味',
    type: 'Lychee',
    variety: '桂味 (Osmanthus Scent)',
    age: 45,
    price: 1280,
    location: '茂名, A区',
    coordinates: { x: 2, y: 2 },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1000&auto=format&fit=crop',
    yield: 45,
    co2Offset: 220,
    farmerName: '林师傅',
    story: '这棵桂味树种植于1979年，历经风雨，产出的果实香气浓郁，是山谷中最珍贵的。'
  },
  {
    id: '2',
    name: '雾山龙眼',
    type: 'Longan',
    variety: '石硖',
    age: 30,
    price: 880,
    location: '茂名, B区',
    coordinates: { x: 4, y: 3 },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1596436346708-413988b05619?q=80&w=1000&auto=format&fit=crop',
    yield: 35,
    co2Offset: 180,
    farmerName: '梅姨',
    story: '生长在高州的雾山坡上，以其晶莹剔透的果肉和浓郁的甜味而闻名。'
  },
  {
    id: '3',
    name: '帝王笑',
    type: 'Lychee',
    variety: '糯米糍',
    age: 60,
    price: 1680,
    location: '茂名, A区',
    coordinates: { x: 1, y: 4 },
    status: 'adopted',
    adopterName: 'Sarah J.',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1000&auto=format&fit=crop',
    yield: 50,
    co2Offset: 250,
    farmerName: '林师傅',
    story: '稀有的糯米糍品种，核小肉厚。是当地行家的最爱。'
  },
  {
    id: '4',
    name: '金秋',
    type: 'Longan',
    variety: '储良',
    age: 25,
    price: 980,
    location: '茂名, C区',
    coordinates: { x: 5, y: 1 },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1000&auto=format&fit=crop',
    yield: 40,
    co2Offset: 190,
    farmerName: '张叔',
    story: '以其金黄的色泽和浓郁的蜂蜜味而闻名。这棵树生命力顽强，喜欢清晨的阳光。'
  },
  {
    id: '5',
    name: '妃子笑传承',
    type: 'Lychee',
    variety: '妃子笑',
    age: 12,
    price: 680,
    location: '茂名, A区',
    coordinates: { x: 3, y: 5 },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop',
    yield: 25,
    co2Offset: 120,
    farmerName: '林师傅',
    story: '一棵年轻力壮的树，产出受欢迎的“妃子笑”品种，以早熟而闻名。'
  },
  {
    id: '6',
    name: '河畔守护者',
    type: 'Lychee',
    variety: '白腊',
    age: 35,
    price: 1100,
    location: '茂名, D区',
    coordinates: { x: 6, y: 4 },
    status: 'available',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1000&auto=format&fit=crop',
    yield: 42,
    co2Offset: 210,
    farmerName: '梅姨',
    story: '屹立在鉴江河畔，根系深深汲取着富含矿物质的河水。'
  }
];

export const JOURNAL_ENTRIES = [
  {
    id: 1,
    title: "春之觉醒：茂名荔枝林的繁花序曲",
    date: "2024年3月15日",
    author: "林师傅",
    role: "首席果农",
    image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%9D%E5%A4%B4%E8%8A%B1%E7%A9%97%E9%97%AA%E8%80%80%E5%A6%82%E6%98%9F.png",
    excerpt: "岭南以西，鉴江之畔，枝头花穗闪耀如星",
    content: [
      { type: 'text', value: '今晨的雾，是从根子河面升起的。' },
      { type: 'text', value: '它漫过贡园的古荔，穿过柏桥村的巷陌，最后停在了这片桂味林的枝丫间，不肯离去。林师傅踩着露水走进林子时，雾正浓，人仿佛行走在梦的边缘。' },
      { type: 'text', value: '这里是茂名，岭南以西，鉴江之畔。大唐的驿道早已湮没荒草，但那些被高力士选作贡品的荔枝树，至今仍在贡园里活着——虬枝盘错，如史书里爬出的篆字。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E6%9E%9D%E5%A4%B4%E8%8A%B1%E7%A9%97%E9%97%AA%E8%80%80%E5%A6%82%E6%98%9F.png' },
      { type: 'text', value: '七时许，太阳终于攀过浮山岭。' },
      { type: 'text', value: '光是有声音的。当第一缕阳光刺破云层，整片林子都微微震颤——那是千千万万片叶子同时苏醒的叹息。浓雾开始溃散，化作千百条光的甬道。就在这光与雾的交战中，林师傅看见了今年的第一批花穗。' },
      { type: 'text', value: '它们从苍黑的枝干上探出头来，嫩绿中泛着淡金，像古贡园那些千年老树写给春天的一行小楷。每一朵都噙着露，每一滴露里都藏着一颗小小的太阳。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%88%9D%E7%94%9F%E7%9A%84%E8%8A%B1%E7%A9%97.png' },
      { type: 'text', value: '“桂味要开了。”' },
      { type: 'text', value: '林师傅的声音很轻，怕惊扰了这份初生的静谧。他知道，此刻在他看不见的地方，贡园里那棵相传由杨贵妃亲手植下的“妃子笑”，也该萌出了今年的第一粒新芽。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%BF%9C%E7%9C%BA%E8%8D%94%E4%B9%A1.png' },
      { type: 'text', value: '这就是茂名的春天。' },
      { type: 'text', value: '它不是突然到来的，而是在贡园的晨露里酝酿了三千年，在根子镇的泥土里蛰伏了一整个冬天，终于在某个不起眼的清晨，随着一声若有若无的爆破声——漫山遍野，如期而至。' },
      { type: 'text', value: '花穗还在生长。' },
      { type: 'text', value: '待到谷雨，待到小满，待到这些淡金的碎花结成一树丹红，远方的客人便会沿着当年进贡的驿道，来赴这一场千年之约。' },
      { type: 'text', value: '而此刻，林师傅只想在这片桂味林里多站一会儿。' },
      { type: 'text', value: '听花开的声音。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%83%8C%E5%BD%B1.png' },
      { type: 'text', value: '注：文中贡园位于茂名高州市根子镇，是著名的荔枝古贡园，园中现存千年以上古荔数十株，相传高力士进贡给杨贵妃的荔枝即采于此。根子镇、浮山岭、鉴江均为茂名荔枝核心产区地理坐标。' }
    ]
  },
  {
    id: 2,
    title: "匠心修剪：为了那一抹极致的清甜",
    date: "2024年2月28日",
    author: "梅读",
    role: "种植专家",
    image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%A4%95%E9%98%B3%E4%B8%8B%E7%9A%84%E8%8D%94%E6%9E%9D%E6%9E%97.png",
    excerpt: "枝与枝之间，恰到好处地留着空隙；光与影之间，正悄悄酝酿着夏天的故事",
    content: [
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8D%94%E5%86%9C%E6%89%8B%E6%8C%81%E4%BF%AE%E6%9E%9D%E5%89%AA.png' },
      { type: 'text', value: '二月末的茂名，风里还带着浮山岭的凉意。' },
      { type: 'text', value: '根子镇的荔农们却已经忙开了。他们钻进幼树林，手中的修枝剪在阳光下闪着细碎的光——这是每年必修的功课，也是最考验心性的时刻。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%89%B9%E5%86%99%E8%8D%94%E6%9E%9D.png' },
      { type: 'text', value: '“咔嚓”一声，一根茁壮的侧枝应声而落。' },
      { type: 'text', value: '梅读蹲下身，拾起那截断枝，看了许久。枝条上已萌出几粒饱满的芽苞，若是留着，今年也能开花挂果。但他还是剪了。' },
      { type: 'text', value: '“舍不得，也要舍。”' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E9%98%B3%E5%85%89%E9%80%8F%E8%BF%87%E4%BF%AE%E5%89%AA%E5%90%8E%E7%9A%84%E6%A0%91%E5%86%A0.png' },
      { type: 'text', value: '这片幼林，是五年前从贡园的古荔身上取穗嫁接的。贡园里那些千年老树，虬枝盘错，却年年挂果——靠的正是代代果农的匠心修剪。枝条太密，阳光就进不来；阳光进不来，果子就只长个头，不长甜。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8D%94%E5%86%9C%E6%8A%AC%E5%A4%B4%E6%9C%9B%E5%90%91%E6%A0%91%E6%A2%A2.png' },
      { type: 'text', value: '“让阳光照进树心。”' },
      { type: 'text', value: '这是根子镇的祖训，也是茂名荔枝甲天下的秘密。鉴江的水汽、红壤的养分，还要加上恰到好处的阳光，才能酿出那一口极致的清甜。而修剪，就是为阳光让路。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%B9%BC%E6%A0%91%E6%95%B4%E9%BD%90%E6%8E%92%E5%88%97.png' },
      { type: 'text', value: '梅读站起身，望着这片疏密有致的幼林。枝与枝之间，恰到好处地留着空隙；光与影之间，正悄悄酝酿着夏天的故事。待到蝉鸣时节，这些树会把积蓄的阳光，一颗一颗地还给人间。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%A4%95%E9%98%B3%E4%B8%8B%E7%9A%84%E8%8D%94%E6%9E%9D%E6%9E%97.png' },
      { type: 'text', value: '“心疼吗？”' },
      { type: 'text', value: '梅读笑了笑，没有回答。他只是轻轻抚过那些被剪断的枝条，像抚过一个暂时的告别。' },
      { type: 'text', value: '他知道，来年春天，当阳光毫无保留地洒进树心，当第一颗荔枝染上红晕——那一抹极致的清甜，就是对今天所有心疼最好的回报。' }
    ]
  },
  {
    id: 3,
    title: "生态守望：果园里的“原住民”们",
    date: "2024年1月10日",
    author: "张毅",
    role: "土壤专家",
    image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%8C%AB%E5%A4%B4%E9%B9%B0%E7%AB%8B%E5%9C%A8%E6%9E%9D%E5%A4%B4%EF%BC%8C%E5%9C%86%E6%9C%88%E4%BD%9C%E8%83%8C%E6%99%AF.png",
    excerpt: "白天，他守着；夜晚，猫头鹰守着。等春天花穗挂满枝头，等夏天红果压弯树梢，他们会一起看见——一个真正健康的果园，该有的样子。",
    content: [
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%B7%A2%E7%A9%B4.png' },
      { type: 'text', value: '日落时分，张毅像往常一样巡视果园。' },
      { type: 'text', value: '走到入口那棵老榕树下时，他停住了脚步。树冠深处，一双圆溜溜的眼睛正静静地看着他——不惊不惧，仿佛在看一个同住了很多年的老邻居。' },
      { type: 'text', value: '是一只猫头鹰。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%8C%AB%E5%A4%B4%E9%B9%B0.png' },
      { type: 'text', value: '它在筑巢。' },
      { type: 'text', value: '枯枝、羽毛、干草，一层层垒在榕树的枝桠间，构筑成一个简陋却温暖的窝。张毅仰着头看了很久，那只猫头鹰也歪着脑袋看他。一人一鸟，在暮色中对视。' },
      { type: 'text', value: '“住了十几年，还是第一次见它来。”' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%A4%95%E9%98%B3%E6%9F%93%E7%BA%A2%E5%A4%A9%E9%99%85.png' },
      { type: 'text', value: '这棵老榕树，比根子镇任何一个人的年纪都大。它的气根垂下来又扎进土里，长成新的树干，一圈一圈，把自己活成一片小小的林子。贡园那些千年荔枝是茂名的活化石，这棵榕树则是果园的守护神——夏天的荫凉，冬天的避风港，一年四季，都有鸟儿在它怀里安家。' },
      { type: 'text', value: '但猫头鹰，是稀客。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E8%8D%94%E5%86%9C%E4%BB%B0%E5%A4%B4%E6%9C%9B%E5%90%91%E6%A0%91%E5%86%A0%EF%BC%8C%E7%A5%9E%E6%83%85%E6%AC%A3%E6%85%B0.png' },
      { type: 'text', value: '在老一辈荔农的口中，猫头鹰是有灵性的。它不来则已，来了，便是土地养好了、虫子少了、生态活了。它不是来吃果子的，是来守园子的——那些啮咬树根的老鼠，那些蛀蚀枝干的害虫，都在它的食谱上。' },
      { type: 'text', value: '“这是好兆头。”' },
      { type: 'text', value: '张毅轻声说，像怕惊扰了这份难得的信任。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E7%8C%AB%E5%A4%B4%E9%B9%B0%E7%AB%8B%E5%9C%A8%E6%9E%9D%E5%A4%B4%EF%BC%8C%E5%9C%86%E6%9C%88%E4%BD%9C%E8%83%8C%E6%99%AF.png' },
      { type: 'text', value: '茂名的荔农，从来不只是种荔枝的人。' },
      { type: 'text', value: '他们是这片土地的守望者。不用农药的季节，杂草留几丛，枯枝不扫尽——为的就是让这些“原住民”们有个落脚的地方。燕子、麻雀、八哥、画眉，还有今晚这只沉默的猫头鹰，它们才是这片果园最早的主人。' },
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E9%B8%9F%E9%B8%A3%E5%A3%B0%E5%A3%B0.png' },
      { type: 'text', value: '夜幕四合，猫头鹰扑棱着翅膀飞出去觅食了。' },
      { type: 'text', value: '张毅还站在树下。他知道，从今往后，这片果园又多了一个守望者。白天，他守着；夜晚，猫头鹰守着。等春天花穗挂满枝头，等夏天红果压弯树梢，他们会一起看见——一个真正健康的果园，该有的样子。' }
    ]
  },
  {
    id: 4,
    title: "岭南圣母：冼夫人与荔枝林的千年守护",
    date: "2024年4月2日",
    author: "文化馆",
    role: "文化顾问",
    image: "https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%86%BC%E5%A4%AB%E4%BA%BA.png",
    excerpt: "在茂名的红土地上，冼夫人的精神如古老的荔枝树般根深蒂固。她是这片土地的灵魂，也是每一颗果实背后的文化底色。",
    content: [
      { type: 'image', value: 'https://0221-1408011218.cos.ap-guangzhou.myqcloud.com/%E5%86%BC%E5%A4%AB%E4%BA%BA.png' },
      { type: 'text', value: '走进茂名，你总能听见一个名字：冼夫人。' },
      { type: 'text', value: '她是隋唐时期的巾帼英雄，被周恩来总理誉为“中国巾帼英雄第一人”，在岭南百姓心中，她是护佑一方平安的“圣母”。' },
      { type: 'heading', value: '唯用一好心：跨越千年的精神内核' },
      { type: 'text', value: '冼夫人一生致力于维护国家统一和民族团结，她留下的“唯用一好心”五个字，成为了茂名人的精神图腾。' },
      { type: 'text', value: '这种“好心”文化，也深深渗透进了茂名的农耕文明中。果农们常说，种果子也要“用好心”——不用劣质肥，不催熟，顺应天时，敬畏土地。这种对品质的坚持，正是冼夫人精神在现代农业中的回响。' },
      { type: 'heading', value: '荔枝林里的信仰：每一棵古树都有神灵' },
      { type: 'text', value: '在茂名的古荔枝园中，常能见到供奉冼夫人的小龛。果农们在开花、结果、采摘的时节，都会去祭拜，祈求风调雨顺，果实丰收。' },
      { type: 'text', value: '这种信仰，让荔枝林不再仅仅是经济作物，而是一片神圣的文化领地。保护古树，就是保护历史，保护那份流传千年的守护承诺。' },
      { type: 'text', value: '当你认养一棵荔枝树时，你不仅是在支持生态农业，更是在参与一场跨越时空的文化接力。在冼夫人的注视下，这片红土地上的每一颗果实，都承载着厚重的历史与温情。' }
    ]
  }
];
