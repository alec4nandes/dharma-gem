import { useState } from "react";
import Settings from "./Settings";
import DharmaGem from "./DharmaGem";
import dharmaLists from "../data/lists";

export default function App() {
    const [showing, setShowing] = useState(0);

    function partsRecursive(parts) {
        return parts?.map((part) => (
            <div className="part">
                {part.definition && (
                    <p style={{ fontWeight: part.parts ? "bold" : "normal" }}>
                        {part.definition}
                        {Object.keys(dharmaLists).includes(part.definition) && (
                            <>*</>
                        )}
                    </p>
                )}
                {part.english && part.pali && (
                    <p>
                        [{part.english} ({part.pali})]
                    </p>
                )}
                {part.parts && (
                    <div className="parts">{partsRecursive(part.parts)}</div>
                )}
                {part.suttas && (
                    <p>{part.suttas.map((sutta) => sutta.title).join(", ")}</p>
                )}
            </div>
        ));
    }

    function processLists() {
        return Object.entries(dharmaLists).map(([key, value]) => (
            <div className="list">
                <h2>{key}</h2>
                <h3>{value.definition}</h3>
                <div
                    className={`parts ${
                        value.parts.find((part) => part.parts)
                            ? "column"
                            : "row"
                    }`}
                >
                    {partsRecursive(value.parts)}
                </div>
            </div>
        ));
    }

    return (
        <>
            {processLists()}
            <Settings {...{ setShowing }} />
            <DharmaGem {...{ showing, setShowing }} />
        </>
    );
}
