import getAllVideosByPlaylist from '../_utils/all-videos';

export default async function get(req, res) {
	const key = process.env.YOUTUBE_KEY;
	const channelId = 'UCiAxxHXVLBwlW72EhZweX3Q';

	return await getAllVideosByPlaylist(key, channelId)(req, res);
}
