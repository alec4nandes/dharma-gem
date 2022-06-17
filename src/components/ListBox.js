import "../css/list-box.css";
import dharmaLists from "../data/lists";

export default function ListBox({ entry }) {
    const [key, value] = entry;
    return (
        <div className="list-box">
            <h2>{key}</h2>
            <h3>{value.definition}</h3>
            <div
                className={`parts ${
                    value.parts.find((part) => part.parts) ? "column" : "row"
                }`}
            >
                {partsRecursive(value.parts)}
            </div>
        </div>
    );
}

function partsRecursive(parts) {
    return parts?.map((part) => (
        <div className="part">
            {part.definition && (
                <div className={part.parts ? "parts-title" : "definition"}>
                    {part.definition}
                    {Object.keys(dharmaLists).includes(part.definition) && (
                        <>*</>
                    )}
                </div>
            )}
            {part.english && part.pali && (
                <div className="pali-word">
                    [{part.english} ({part.pali})]
                </div>
            )}
            {part.parts && (
                <div className="parts">{partsRecursive(part.parts)}</div>
            )}
            {part.suttas && (
                <div className="list-box-suttas">
                    {part.suttas.map((sutta) => sutta.title).join(", ")}
                </div>
            )}
        </div>
    ));
}
