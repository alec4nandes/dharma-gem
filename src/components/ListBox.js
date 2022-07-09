import "../css/list-box.css";
import dharmaLists from "../data/lists";

export default function ListBox({ name, setListBox }) {
    const { parts, definition } = dharmaLists[name];

    return (
        <div className="list-box">
            <button
                className="list-button close-list-box"
                onClick={() => setListBox(undefined)}
            >
                X
            </button>
            <h2>{name}</h2>
            <h3>{definition}</h3>
            {<Parts {...{ parts, setListBox, isTopLevel: true }} />}
        </div>
    );
}

function Parts({ parts, setListBox, isTopLevel }) {
    const justDefinitions = findUniform(parts, ["definition"]),
        justPali = findUniform(parts, ["pali", "english"]),
        ul = justDefinitions && (
            <ul>
                {parts.map((part) => {
                    const { definition } = part;
                    return (
                        <li key={definition}>
                            {<Definition {...{ definition, setListBox }} />}
                        </li>
                    );
                })}
            </ul>
        ),
        pali =
            justPali &&
            parts.map((part) => (
                <PaliWord
                    key={part.pali}
                    english={part.english}
                    pali={part.pali}
                />
            )),
        text =
            isTopLevel && (ul || pali) ? (
                <div className="part row">{ul || pali}</div>
            ) : (
                ul || pali || partsRecursive(parts, setListBox)
            );

    function partsRecursive(parts, setListBox) {
        return parts?.map((part) => {
            const { definition, english, pali, parts, suttas } = part;
            return (
                <div key={definition || pali} className="part">
                    {definition && (
                        <div className={parts ? "parts-title" : "definition"}>
                            {<Definition {...{ definition, setListBox }} />}
                        </div>
                    )}
                    {english && pali && <PaliWord {...{ english, pali }} />}
                    {parts && <Parts {...{ parts, setListBox }} />}
                    {suttas && <ListBoxSuttas {...{ suttas }} />}
                </div>
            );
        });
    }

    return <div className={`parts ${isTopLevel ? "column" : ""}`}>{text}</div>;
}

function findUniform(parts, keys) {
    return (
        parts.filter((obj) => {
            const k = Object.keys(obj);
            return k.sort().join(",") === keys.sort().join(",");
        }).length === parts.length
    );
}

function Definition({ definition, setListBox }) {
    return Object.keys(dharmaLists).includes(definition) ? (
        <button className="list-button" onClick={() => setListBox(definition)}>
            {definition}
        </button>
    ) : (
        definition
    );
}

function PaliWord({ english, pali }) {
    return (
        <div key={`pali word ${pali}`} className="pali-word">
            <div className="english">{english}</div>
            <div className="pali">{pali}</div>
        </div>
    );
}

function ListBoxSuttas({ suttas }) {
    return (
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
    );
}
