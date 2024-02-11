import "./Home.css"
import welcome from './../../assets/assorted-collection/welcome.gif'
export default function Home() {


    return (
        <>
            <img className="welcome" src={welcome} alt="welcome"/>
            <h1>Home</h1>
        </>

    )
}