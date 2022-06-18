import { useRef, useState } from "react";
import Settings from "./Settings";
import ListBox from "./ListBox";
import DharmaGem from "./DharmaGem";
import Footer from "./Footer";

export default function App() {
    const [showing, setShowing] = useState(0),
        [listBox, setListBox] = useState(undefined),
        footerRef = useRef(),
        scrollRef = useRef(),
        scrollContent = () =>
            listBox ? (
                <ListBox
                    {...{
                        key: listBox,
                        setListBox,
                        name: listBox,
                    }}
                />
            ) : (
                <DharmaGem
                    {...{
                        showing,
                        setShowing,
                        listBox,
                        setListBox,
                        scrollRef,
                    }}
                />
            );

    return (
        <>
            <Settings {...{ setShowing, listBox, setListBox, footerRef }} />
            {
                <div
                    ref={scrollRef}
                    className={`scroll-content ${listBox ? "v-align" : ""}`}
                >
                    {scrollContent()}
                </div>
            }
            <Footer {...{ footerRef }} />
        </>
    );
}
