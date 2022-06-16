import "../css/settings.css";
import { paths } from "./DharmaGem";

export default function Settings({ setShowing }) {
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
        </div>
    );
}
