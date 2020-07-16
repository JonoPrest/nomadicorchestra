import React from "react";
import ListenOnSpotify from "./ListenOnSpotifyT.png";
import ListenOnAppleMusic from "./ListenOnAppleMusicT.png";



const ListenButtons = ({ spotifyLinkState, targetState, appleMusicLinkState }) => {
	return (
		<div className="listenButtonsContainer">
			<a 
			href={spotifyLinkState}
			target={targetState}
			rel="noopener noreferrer"
			>
				<img
					className="listenButtons grow pointer"
					src={ListenOnSpotify}
					alt=""
				/>
			</a>
			<a
				href={appleMusicLinkState}
				target={targetState}
				rel="noopener noreferrer"
			>
				<img
					className="listenButtons grow pointer"
					src={ListenOnAppleMusic}
					alt=""
				/>
			</a>
		</div>
	);
};

export default ListenButtons;