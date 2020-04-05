import { YouTube } from 'popyt';

export default async (req, res) => {
	const {
		query: { id },
	} = req;

	const secrets = {
		key: process.env.YOUTUBE_KEY,
		channelId: process.env.YOUTUBE_CHANNEL_EN,
	};
  console.log(process.env);

	const { key, channelId } = secrets;

	const youtube = new YouTube(key);

	const playlists = await youtube.getChannelPlaylists(channelId);

	const formattedPlaylists = playlists.map(item => ({
		id: item.id,
		title: item.title,
	}));

	const playlistItems = await Promise.all(
		formattedPlaylists.map(async playlist => {
			let videos = await youtube.getPlaylistItems(playlist.id);
			videos = videos.map(
				({ id, title, description, thumbnails, tags, date, url }) => ({
					id,
					title,
					description,
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

	console.log(playlistItems);

	res.status(200).json({ playlistItems });
};
