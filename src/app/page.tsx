import Image from "next/image";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

export default function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Navbar/>
            <div className="content" style={{flex: 1}}>
                <h1>content</h1>
            </div>
            <Footer/>
        </div>
    );
}
