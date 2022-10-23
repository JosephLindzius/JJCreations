import React from "react";

interface IVideo {
    src: string;
}

export default function Video ({src}: IVideo): JSX.Element {
    return(
        <>
            <video src={src}></video>
        </>
    )
}