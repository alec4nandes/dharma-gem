import "../css/list-box.css";
import dharmaLists from "../data/lists";

export default function ListBox({ name, setListBox }) {
    const info = dharmaLists[name];

    return (
        <div className="list-box">
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
                            {Object.keys(dharmaLists).includes(definition) ? (
                                <button
                                    className="list-button"
                                    onClick={() => setListBox(definition)}
                                >
                                    {definition}
                                </button>
                            ) : (
                                definition
                            )}
                        </div>
                    )}
                    {paliWord}
                    {parts && (
                        <div className="parts">
                            {partsRecursive(parts, setListBox)}
                        </div>
                    )}
                    {suttas && (
                        <div className="list-box-suttas">
                            {suttas.map((sutta) => sutta.title).join(", ")}
                        </div>
                    )}
                </div>
            )
        );
    });
}
