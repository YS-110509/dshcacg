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
		title: "大上海萌资讯创作服务",
		imgurl: "/_image/?href=%2F%40fs%2FC%3A%2FUsers%2F%E8%80%81%E8%83%A5%2FDesktop%2FSiroukin+Team%2F%E5%A4%A7%E4%B8%8A%E6%B5%B7%E8%90%8C%E8%B5%84%E8%AE%AF%2Fsrc%2Fassets%2Fimages%2Favatar.webp%3ForigWidth%3D948%26origHeight%3D948%26origFormat%3Dpng&w=948&h=948&f=webp",
		desc: "向【大上海萌资讯】投稿文章、发表视频、违规举报、申请友链等。",
		siteurl: "https://pd.qq.com/s/5r7k9asff",
		tags: ["友链申请", "发表创作"],
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
