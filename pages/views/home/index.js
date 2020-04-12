import Card from '../../../components/card';
import Layout from '../../../components/layout';

export default function Home({ playlists }) {
	return (
		<Layout heroImage="/hero.png">
			<div className="container mx-auto p-4">
				<div className="container mx-auto">
					{playlists &&
						playlists.items &&
						playlists.items.map((element, index) => {
							return (
								<div className="container my-10">
									<div className="flex items-center">
										<div
											className="
                      h-p 
                      border-t-2 
                      border-purple-200
                      w-full
                    "
										></div>
										<div
											className="
                      flex-shrink-0
                      text-center 
                      text-purple-900
                      py-2 
                      px-4 
                      text-xl
                      rounded-md
                      bg-purple-200
                    "
										>
											{element.title}
										</div>
										<div
											className="
                      h-p 
                      border-t-2 
                      border-purple-200
                      w-full
                    "
										></div>
									</div>
									<div
										className="
                    py-2 
                    border-grey-500 
                    rounded-lg
                  "
									>
										{element.videos.map(
											({ title, description, url, tag, thumbnails = {} }) => (
												<Card
													title={title}
													description={description}
													url={url}
													tag={tag}
													imgSrc={
														thumbnails.maxres
															? thumbnails.maxres.url
															: thumbnails.high.url
													}
												/>
											),
										)}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</Layout>
	);
}
