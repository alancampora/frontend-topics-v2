import { YouTube } from 'popyt';

const getChannelData = key => {
	const mapper = {
		en: process.env.YOUTUBE_CHANNEL_EN,
		es: process.env.YOUTUBE_CHANNEL_ES,
	};

	return {
		key: process.env.YOUTUBE_KEY,
		channelId: mapper[key],
	};
};

export default async (req, res) => {
	const {
		query: { language },
	} = req;

	const { key, channelId } = getChannelData(language);

	const youtube = new YouTube(key);

	const playlists = await youtube.getChannelPlaylists(channelId);

	const formattedPlaylists = playlists.map(item => ({
		id: item.id,
		title: item.title,
	}));

	const items = await Promise.all(
		formattedPlaylists.map(async playlist => {
			let videos = await youtube.getPlaylistItems(playlist.id);
			videos = videos.map(
				({ id, title, description, thumbnails, tags, date, url }) => ({
					id,
					title,
					description: description.substring(0, description.indexOf('\n')),
					thumbnails,
					tags,
					date,
					url,
				}),
			);
			return {
				...playlist,
				videos,
			};
		}),
	);

	res.status(200).json({ items });
};
