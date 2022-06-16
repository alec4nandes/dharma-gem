import "../../css/dharma-gem.css";
import { useState } from "react";

const paths = [
    "Understanding",
    "Thought",
    "Action",
    "Speech",
    "Livelihood",
    "Effort",
    "Mindfulness",
    "Concentration",
];

export default function DharmaGem() {
    const [showing, setShowing] = useState(0);

    return (
        <div class="dharma-gem">
            <div class="settings">
                {paths.map((path, i) => (
                    <button onClick={() => setShowing(i + 1)}>{path}</button>
                ))}
            </div>
            <div class="perspective-container">
                <div class="jewel" id={`show-${showing}`}>
                    <Pyramid section="top" />
                    <Pyramid section="bottom" />
                </div>
            </div>
        </div>
    );
}

function Pyramid({ section }) {
    const p = section === "top" ? paths.slice(0, 3) : paths.slice(4);

    return (
        <div class={`pyramid ${section}`}>
            {p.map((path, i) => (
                <Face index={i + 1}>
                    <h2>{path}</h2>
                </Face>
            ))}
        </div>
    );
}

function Face({ index, children }) {
    return (
        <div class={`face side-${index}`}>
            <div class="side-triangle left"></div>
            <div class="side-triangle right"></div>
            {children}
        </div>
    );
}

export { paths };
