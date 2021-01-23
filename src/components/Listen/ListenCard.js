import React, { useState } from "react";
import ListenButtons from "./listenButtons";

const ListenCard = ({ title, spotifyLink, appleLink, imageURL }) => {
	const [spotifyLinkState, setSpotifyLinkState] = useState(null);
	const [appleMusicLinkState, setAppleMusicLinkState] = useState(null);
	const [targetState, setTargetState] = useState("");

	//Function is a hack to stop android touch from taking you to the link before links are visible
	const streamingLink = (sLink, aLink) => {
		setSpotifyLinkState(null);
		setAppleMusicLinkState(null);
		setTargetState("");
		setTimeout(() => {
			setSpotifyLinkState(sLink);
			setAppleMusicLinkState(aLink);
			setTargetState("_blank");
		}, 500);
	};

	return (
		<div className="ma2 shadow-5 hidden br4 br--top">
			<h1 className="f4 cardHeader white mv0 pv2 ph3 br4 br--top">{title}</h1>
			<div
				onMouseOver={() => streamingLink(spotifyLink, appleLink)}
				className="Tilt album center shadow-3 link"
				options={{ max: 20, axis: "x" }}
				style={{
					height: 350,
					width: 350,
					backgroundImage: `url(${imageURL})`,
				}}
			>
				<div className="hide">
					<ListenButtons
						spotifyLinkState={spotifyLinkState}
						appleMusicLinkState={appleMusicLinkState}
						targetState={targetState}
					/>
				</div>
			</div>
		</div>
	);
};

export default ListenCard;
