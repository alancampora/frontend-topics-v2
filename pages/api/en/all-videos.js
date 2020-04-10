import getAllVideosByPlaylist from '../_utils/all-videos';

export default async function get(req, res) {

	const key = process.env.YOUTUBE_KEY;
	const channelId = process.env.YOUTUBE_CHANNEL_EN;

	return await getAllVideosByPlaylist(key, channelId)(req, res);
}
