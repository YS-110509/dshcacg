// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "GoodsMap·谷店地图",
		imgurl: "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31kroeo3vj2605nlqpqog8og6he7a5io?imageView2/2/w/540/format/webp|imageMogr2/strip2",
		desc: "收录了全国各个城市的谷子店详情。",
		siteurl: "https://www.xiaohongshu.com/search_result?keyword=820066673",
		tags: ["谷子店", "攻略"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
