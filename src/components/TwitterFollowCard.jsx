import "../App.css"
import { useState } from "react"
export function TwitterFollowCard ({userName, user}) {

const userImg = `https://unavatar.io/twitter/${user}`
const [isFollowing, setIsFollowing] = useState(false)
const text = isFollowing ? "Siguendo" : "Seguir"
const buttonClassName = isFollowing
? "tw-followCard-button-isfollowing" 
: "tw-followCard-button"
const handleClick = () => {
    setIsFollowing(!isFollowing)
}

    return(

        <article className="tw-followCard">
                    <header className="tw-followCard-header">
                        <img className="tw-followCard-img" src={userImg} alt="avatar" />
                        <div className="tw-followCard-div">
                            <strong className="tw-followCard-header-div-strong">{userName}</strong>
                            <span className="tw-followCard-header-div-span">@{user}</span>
                        </div>
                    </header>
                    <aside className="tw-followCard-aside">
                        <button className={buttonClassName} onClick={handleClick}>
                            {text}
                        </button>
                    </aside>
        </article>
    )
}


