import "../css/settings.css";
import { paths } from "./DharmaGem";
import dharmaLists from "../data/lists";

const numStrings = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eightfold",
    "Eight",
    "Nine",
    "Ten",
];

function dharmaListSorter(a, b) {
    const aFirst = a.split(" ")[0],
        bFirst = b.split(" ")[0],
        aIndex = numStrings.indexOf(aFirst),
        bIndex = numStrings.indexOf(bFirst);
    if (aIndex === bIndex) {
        return a.localeCompare(b);
    } else {
        return aIndex - bIndex;
    }
}

const sortedLists = Object.keys(dharmaLists).sort(dharmaListSorter);

export default function Settings({ setShowing, listBox, setListBox }) {
    return (
        <div className="settings">
            {paths.map((path, i) => (
                <button
                    key={`show side ${path}`}
                    onClick={() => {
                        setShowing(i + 1);
                        setListBox(undefined);
                    }}
                >
                    {path}
                </button>
            ))}
            <div className="select-wrapper">
                <select
                    onChange={(e) => setListBox(e.target.value)}
                    value={listBox || "choose"}
                >
                    <option value="choose" disabled>
                        Choose List
                    </option>
                    {sortedLists.map((key) => (
                        <option key={`dharmaLists option ${key}`} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <div className="select-arrow">▼</div>
            </div>
        </div>
    );
}

export { sortedLists };
