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
                {formatParts(info.parts, setListBox, true)}
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

function findUniform(parts, keys) {
    return (
        parts.filter((obj) => {
            const k = Object.keys(obj);
            return k.sort().join(",") === keys.sort().join(",");
        }).length === parts.length
    );
}

function formatParts(parts, setListBox, isTopLevel) {
    const justDefinitions = findUniform(parts, ["definition"]),
        justPali = findUniform(parts, ["pali", "english"]);

    const ul = justDefinitions && (
        <ul>
            {parts.map((part) => (
                <li key={part.definition}>
                    {formatDefinition(part.definition, setListBox)}
                </li>
            ))}
        </ul>
    );

    const pali =
        justPali &&
        parts.map((part) => (
            <PaliWord english={part.english} pali={part.pali} />
        ));

    if (ul || pali) {
        return isTopLevel ? (
            <div className="part simple">{ul || pali}</div>
        ) : (
            ul || pali
        );
    } else {
        return partsRecursive(parts, setListBox, isTopLevel);
    }
}

function PaliWord({ english, pali }) {
    return (
        <div key={`pali word ${pali}`} className="pali-word">
            <div className="english">{english}</div>
            <div className="pali">{pali}</div>
        </div>
    );
}

function partsRecursive(parts, setListBox, isTopLevel) {
    return parts?.map((part) => {
        const { definition, english, pali, parts, suttas } = part;
        return (
            <div key={definition || pali} className="part">
                {definition && (
                    <div className={parts ? "parts-title" : "definition"}>
                        {formatDefinition(definition, setListBox)}
                    </div>
                )}
                {english && pali && <PaliWord {...{ english, pali }} />}
                {parts && (
                    <div className="parts">
                        {formatParts(parts, setListBox)}
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
        );
    });
}
