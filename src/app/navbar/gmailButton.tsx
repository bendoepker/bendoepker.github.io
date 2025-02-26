'use client'
import { useState } from 'react';
import "./gmailButton.css"

export default function GmailButton() {
    const [effect, setEffect] = useState("gmail");
    return (
        <button className={effect}
            onClick={() => {
                navigator.clipboard.writeText("bendoepk@gmail.com");
                setEffect("gmail_animated");}}
            onAnimationEnd={() => {setEffect("gmail")}}>
            <img />
            <div className="copied_text">Copied!</div>
        </button>
    );
}
