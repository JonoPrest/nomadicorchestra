import React from "react";
import ReactPlayer from "react-player";
import "./Listen.css";
import ListenCard from "./ListenCard.js";

const Listen = () => {
	return (
		<div className="backgroundOverlay">
			<div className="contentContainer pt2">
				<div className="listenContainer">
					<div className="flex flex-wrap justify-around ">
						<ListenCard
							title="Sanity"
							spotifyLink="https://open.spotify.com/album/06QEuEU87vEPT0yFjzENeH"
							appleLink="https://music.apple.com/us/album/sanity-single/1530983108"
							imageURL="https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/7b/b3/bb/7bb3bb40-3e87-c97a-2fec-7eea943ab770/195497174058.jpg/500x500bb.webp"
						/>

						<ListenCard
							title="Hitman"
							spotifyLink="https://open.spotify.com/track/6Sw0HYzCN74V8IvYXAutK2?si=80DqeeKFTVG3zspmhgNfBA"
							appleLink="https://music.apple.com/tr/album/hitman-single/1525808679"
							imageURL="https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/45/3f/06/453f0677-4ba6-db7f-8653-71b20e23dd3a/195497061426.jpg/270x270bb.webp"
						/>

						<div className="ma2 bg-black-30 shadow-5 hidden br4 br--top ">
							<h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
								Madosini
							</h1>
							<iframe
								title="Madosini"
								style={{ border: "0", width: "350px", height: "350px" }}
								src="https://bandcamp.com/EmbeddedPlayer/track=1292036557/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
								seamless
							>
								<a href="http://nomadicorchestra.bandcamp.com/track/madosini">
									Madosini by Nomadic Orchestra
								</a>
							</iframe>
						</div>

						<ListenCard
							title="Love At Last"
							spotifyLink="https://open.spotify.com/album/10YIVjl4wVBwMgVNeSb4Xn"
							appleLink="https://music.apple.com/za/album/love-at-last/1092836741"
							imageURL="https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/d9/15/e7/d915e750-88c3-a28f-27b7-f17e093f422b/859716735351.jpg/270x270bb.webp"
						/>
						<ListenCard
							title="Move Your Things"
							spotifyLink="https://open.spotify.com/album/38wVSoZt9hlMJZu8RzDXru"
							appleLink="https://music.apple.com/za/album/move-your-things/651434215"
							imageURL="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/67/34/52/67345274-568b-7319-6f2c-b215ecb1d9d1/859710006143.jpg/270x270bb.webp"
						/>
					</div>

					<div className="shadow-5 hidden br4 ma5">
						<h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">
							Listen on Soundcloud
						</h1>
						<div className=" ">
							<ReactPlayer
								className=""
								controls="true"
								width="100%"
								url="https://soundcloud.com/nomadicorchestra"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Listen;
