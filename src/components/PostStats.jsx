import './PostStats.css'
import { ChatCircleIcon, ShareNetworkIcon } from "@phosphor-icons/react";

export function PostStats({ comments, shares }) {

    return (
        <p><ChatCircleIcon /> {comments} reacties - <ShareNetworkIcon /> {shares} keer gedeeld</p>
    );
}
