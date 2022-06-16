import { useState } from "react";
import Settings from "./Settings";
import DharmaGem from "./DharmaGem";

export default function App() {
    const [showing, setShowing] = useState(0);

    return (
        <>
            <Settings {...{ setShowing }} />
            <DharmaGem {...{ showing, setShowing }} />
        </>
    );
}
