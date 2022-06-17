import { useEffect, useState } from "react";
import Settings from "./Settings";
import DharmaGem from "./DharmaGem";
import ListBox from "./ListBox";

export default function App() {
    const [showing, setShowing] = useState(0),
        [listBox, setListBox] = useState(undefined);

    useEffect(
        () =>
            listBox && window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
        [listBox]
    );

    return (
        <>
            <Settings {...{ setShowing, listBox, setListBox }} />
            {listBox && (
                <ListBox {...{ key: listBox, setListBox, name: listBox }} />
            )}
            <DharmaGem {...{ showing, setShowing, listBox, setListBox }} />
        </>
    );
}
