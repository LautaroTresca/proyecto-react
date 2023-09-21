import "./App.css"
import { TwitterFollowCard } from "./components/TwitterFollowCard";

function App () {
    return (
        <div>
            <TwitterFollowCard user="LautaroTresca" userName="Lautaro"/>
            <TwitterFollowCard user="elonmusk" userName="ElonMusk"/>
            <TwitterFollowCard user="pheralb" userName="Pablo Hernandez"/>
            <TwitterFollowCard user="vxnder" userName="Vanderhart"/>
        </div>
    )
}

export default App;