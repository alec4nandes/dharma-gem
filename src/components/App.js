import { useState } from "react";
import Settings from "./Settings";
import DharmaGem from "./DharmaGem";
import dharmaLists from "../data/lists";
import ListBox from "./ListBox";

function makeListBoxes() {
    const result = {};
    Object.entries(dharmaLists).forEach((entry) => {
        const [key] = entry;
        result[key] = <ListBox {...{ entry }} />;
    });
    return result;
}

const listBoxes = makeListBoxes();

export default function App() {
    const [showing, setShowing] = useState(0);

    return (
        <>
            {/* {Object.values(listBoxes)} */}
            <Settings {...{ setShowing }} />
            <DharmaGem {...{ showing, setShowing }} />
        </>
    );
}
