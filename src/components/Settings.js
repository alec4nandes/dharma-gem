import "../css/settings.css";
import { paths } from "./DharmaGem";
import dharmaLists from "../data/lists";

export default function Settings({ setShowing, listBox, setListBox }) {
    return (
        <div className="settings">
            {paths.map((path, i) => (
                <button
                    key={`show side ${path}`}
                    onClick={() => setShowing(i + 1)}
                >
                    {path}
                </button>
            ))}
            <select
                onChange={(e) => setListBox(e.target.value)}
                value={listBox || "choose"}
            >
                <option value="choose" disabled>
                    CHOOSE LIST
                </option>
                {Object.keys(dharmaLists).map((key) => (
                    <option key={`dharmaLists option ${key}`} value={key}>
                        {key}
                    </option>
                ))}
            </select>
        </div>
    );
}
