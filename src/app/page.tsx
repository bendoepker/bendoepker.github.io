import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Content from "./content/content";
import "./page.css";

export default function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Navbar/>
            <div className="content">
                    <Sidebar />
                <div className="content_div">
                    <Content side="right" name="ByteWave"
                        description="ByteWave is a work-in-progress audio application that will allow a user to input, output, and edit sound waves.
                                    The current 'big picture' goal is to get low-latency input and output through the use of WASAPI, Steinberg's ASIO, and DirectSound."
                        link="https://github.com/bendoepker/ByteWave"/>
                    <Content side="left" name="Windows ID Utility"
                        description="Windows ID Utility is a utility tool that I use to generate CLSID, IID, and GUID's to aid in WinAPI development in C.
                                    It was primarily developed to assist in working on ByteWave."
                        link="https://github.com/bendoepker/win-id-generator"/>
                    <Content side="right" name="My Website"
                        description="My website (This is where you are right now!) is the non-technical view of the projects that I am working on and that I have completed."
                        link="https://github.com/bendoepker/bendoepker.github.io"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
