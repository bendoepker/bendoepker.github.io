'use client'
import { useState } from 'react';
import "./gmailButton.css"

export default function GmailButton() {
    const [effect, setEffect] = useState("gmail");
    return (
        <div className="gmail_container">
            <button className={effect}
                onClick={() => {
                    navigator.clipboard.writeText("bendoepk@gmail.com");
                    setEffect("gmail_animated");}}
                onAnimationEnd={() => {setEffect("gmail")}}>
                <img alt=""/>
                <div className="copied_text">Copied!</div>
            </button>
        </div>
    );
}
