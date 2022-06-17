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
    return parts?.map((part) => (
        <div key={part.definition || part.pali} className="part">
            {part.definition && (
                <div className={part.parts ? "parts-title" : "definition"}>
                    {Object.keys(dharmaLists).includes(part.definition) ? (
                        <button
                            className="list-button"
                            onClick={() => setListBox(part.definition)}
                        >
                            {part.definition}
                        </button>
                    ) : (
                        part.definition
                    )}
                </div>
            )}
            {part.english && part.pali && (
                <div className="pali-word">
                    [{part.english} ({part.pali})]
                </div>
            )}
            {part.parts && (
                <div className="parts">
                    {partsRecursive(part.parts, setListBox)}
                </div>
            )}
            {part.suttas && (
                <div className="list-box-suttas">
                    {part.suttas.map((sutta) => sutta.title).join(", ")}
                </div>
            )}
        </div>
    ));
}
