import "../css/dharma-gem.css";
import React, { useEffect, useMemo, useRef } from "react";
import makeContent from "../data/display";
import ListBox from "./ListBox";

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
    listBox,
    setListBox,
}) {
    const gemRef = useRef(),
        scrollRef = useRef(),
        content = useMemo(
            () => makeContent({ setShowing, setListBox }),
            [setListBox, setShowing]
        );

    useEffect(() => {
        function centerGems() {
            gemRef.current &&
                scrollRef.current?.scrollTo({
                    left:
                        window.innerWidth < gemRef.current.offsetWidth
                            ? (gemRef.current.offsetWidth - window.innerWidth) /
                              2
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
        <div
            ref={scrollRef}
            className={`dharma-gem ${listBox ? "v-align" : ""}`}
        >
            {listBox ? (
                <ListBox
                    {...{
                        key: listBox,
                        setListBox,
                        name: listBox,
                    }}
                />
            ) : (
                <div ref={gemRef} className="perspective-container">
                    <div className="jewel" id={`show-${showing}`}>
                        <Pyramid {...{ content, section: "top" }} />
                        <Pyramid {...{ content, section: "bottom" }} />
                    </div>
                </div>
            )}
        </div>
    );
}

function Pyramid({ content, section }) {
    const p = section === "top" ? paths.slice(0, 4) : paths.slice(4);

    return (
        <div className={`pyramid ${section}`}>
            {p.map((path, i) => (
                <Face key={`${path} face`} index={i + 1}>
                    {content[path] ? (
                        <>
                            <div className="face-title">
                                <h2 className="pali-path">
                                    {content[path].pali}
                                </h2>
                                <h3>({path.toLowerCase()})</h3>
                            </div>
                            {content[path].suttas?.map((sutta) => (
                                <React.Fragment
                                    key={`sutta ${sutta.name} for Right ${path}`}
                                >
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
                            ))}
                            <div className="spacer"></div>
                            <h4>Right {path} includes:</h4>
                            <div className="spacer"></div>
                            {content[path].includes}
                        </>
                    ) : (
                        <div className="face-title">
                            <h3>({path.toLowerCase()})</h3>
                        </div>
                    )}
                </Face>
            ))}
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

export { paths };
