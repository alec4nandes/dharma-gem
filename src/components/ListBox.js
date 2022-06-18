import "../css/list-box.css";
import dharmaLists from "../data/lists";
import { listButtonHandler } from "../data/display";
import { useEffect, useRef } from "react";

export default function ListBox({ name, setListBox }) {
    const info = dharmaLists[name],
        listBoxRef = useRef();

    useEffect(() => {
        listBoxRef.current.scrollIntoView();
        window.scrollTo(0, 0);
    });

    return (
        <div ref={listBoxRef} className="list-box">
            <button
                className="list-button close-list-box"
                onClick={() => setListBox(undefined)}
            >
                X
            </button>
            <h2>{name}</h2>
            <h3>{info.definition}</h3>
            <div
                className={`parts ${
                    info.parts.find((part) => part.parts) ? "column" : "row"
                }`}
            >
                {partsRecursive(info.parts, setListBox)}
            </div>
        </div>
    );
}

function formatDefinition(definition, setListBox) {
    return Object.keys(dharmaLists).includes(definition) ? (
        <button
            className="list-button"
            onClick={() => listButtonHandler(setListBox, definition)}
        >
            {definition}
        </button>
    ) : (
        definition
    );
}

function partsRecursive(parts, setListBox) {
    return parts?.map((part) => {
        const { definition, english, pali, parts, suttas } = part,
            paliWord = english && pali && (
                <div key={`pali word ${pali}`} className="pali-word">
                    <div className="english">{english}</div>
                    <div className="pali">{pali}</div>
                </div>
            ),
            isOnlyPali = !definition && !parts && !suttas && paliWord;
        return (
            isOnlyPali || (
                <div key={definition || pali} className="part">
                    {definition && (
                        <div className={parts ? "parts-title" : "definition"}>
                            {formatDefinition(definition, setListBox)}
                        </div>
                    )}
                    {paliWord}
                    {parts && (
                        <div className="parts">
                            {parts.filter((obj) => {
                                const keys = Object.keys(obj);
                                return (
                                    keys.length === 1 &&
                                    keys[0] === "definition"
                                );
                            }).length === parts.length ? (
                                <ul>
                                    {parts.map((part) => (
                                        <li key={part.definition}>
                                            {formatDefinition(
                                                part.definition,
                                                setListBox
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                partsRecursive(parts, setListBox)
                            )}
                        </div>
                    )}
                    {suttas && (
                        <div className="list-box-suttas">
                            <div className="parts-title">Suttas:</div>
                            <ul>
                                {suttas.map((sutta) => (
                                    <li key={sutta.title}>
                                        <a
                                            className="list-button"
                                            href={sutta.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {sutta.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )
        );
    });
}
