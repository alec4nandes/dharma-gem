import "../css/dharma-gem.css";
import React, { useEffect, useMemo, useRef } from "react";
import makeContent from "../data/display";

const paths = [
    "Understanding",
    "Thought",
    "Speech",
    "Action",
    "Livelihood",
    "Effort",
    "Mindfulness",
    "Concentration",
];

export default function DharmaGem({
    showing,
    setShowing,
    setListBox,
    scrollRef,
}) {
    const gemRef = useRef(),
        content = useMemo(
            () => makeContent({ setShowing, setListBox }),
            [setListBox, setShowing]
        );

    useEffect(() => {
        function centerGems() {
            scrollRef.current.scrollTo({
                left:
                    window.innerWidth < gemRef.current.offsetWidth
                        ? (gemRef.current.offsetWidth - window.innerWidth) / 2
                        : 0,
                top: 0,
                behavior: "smooth",
            });
        }
        centerGems();
        window.addEventListener("resize", centerGems);
        return () => window.removeEventListener("resize", centerGems);
    });

    return (
        <div ref={gemRef} className="dharma-gem">
            <div className="jewel" id={`show-${showing}`}>
                <Pyramid {...{ content, section: "top" }} />
                <Pyramid {...{ content, section: "bottom" }} />
            </div>
        </div>
    );
}

function Pyramid({ content, section }) {
    const p = section === "top" ? paths.slice(0, 4) : paths.slice(4);

    return (
        <div className={`pyramid ${section}`}>
            {p.map((path, i) => {
                const { pali, suttas, includes } = content[path];
                return (
                    <Face key={`${path} face`} index={i + 1}>
                        <div className="face-title">
                            <h2 className="pali-path">{pali}</h2>
                            <h3>({path.toLowerCase()})</h3>
                        </div>
                        {suttas && <Suttas {...{ suttas }} />}
                        <div className="spacer"></div>
                        <h4>Right {path} includes:</h4>
                        <div className="spacer"></div>
                        {includes}
                    </Face>
                );
            })}
        </div>
    );
}

function Face({ index, children }) {
    return (
        <div className={`face side-${index}`}>
            <div className="side-triangle left"></div>
            <div className="side-triangle right"></div>
            {children}
        </div>
    );
}

function Suttas({ suttas }) {
    return suttas.map((sutta) => (
        <React.Fragment key={`sutta ${sutta.name}`}>
            <div className="spacer"></div>
            <a
                className="sutta-link"
                href={sutta.link}
                target="_blank"
                rel="noreferrer"
            >
                {sutta.name}
                <br />({sutta.chapter})
            </a>
        </React.Fragment>
    ));
}

export { paths };
