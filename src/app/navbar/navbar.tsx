'use client'

import "./navbar.css";
import GmailButton from "./gmailButton"


export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar">
                <h1 className="title">Ben Doepker</h1>
                <div className="socials_group">
                    <div className="top_row">
                        <a href="https://www.linkedin.com/in/ben-doepker-aa8aa5256/">
                            <img className="linkedin"/>
                        </a>
                        <a href="https://www.github.com/bendoepker">
                            <img className="github"/>
                        </a>
                    </div>
                    <div className="bottom_row">
                        <GmailButton />
                    </div>
                </div>
            </nav>
            <div className="bottom_line">
            </div>
        </div>
    );
}
