export default function makeContent({ setShowing, setListBox }) {
    return {
        Understanding: {
            pali: "ditthi",
            includes: (
                <>
                    <h4>
                        <u>Four Noble Truths</u>
                    </h4>
                    <div className="spacer"></div>
                    <h4>
                        The truth of suffering
                        <br />
                        (unsatisfactoriness: <em>dukkha</em>)
                    </h4>
                    <p>
                        birth, aging, death, bodily pain, mental pain, despair,
                        unfulfilled desires,{" "}
                        <button
                            className="list-button"
                            onClick={(e) =>
                                listButtonHandler(
                                    setListBox,
                                    e.target.innerHTML
                                )
                            }
                        >
                            Five Aggregates
                        </button>
                    </p>
                    <div className="spacer"></div>
                    <h4>
                        The truth of the arising of suffering desire or greed
                        <br />
                        (craving or thirst: <em>tanha</em>)
                    </h4>
                    <p>sense pleasures, existence, non-existence</p>
                    <div className="spacer"></div>
                    <h4>The truth of the cessation of suffering</h4>
                    <p>detaching from craving, desire and greed</p>
                    <div className="spacer"></div>
                    <h4>
                        The truth of the path leading to the cessation of
                        suffering
                    </h4>
                    <p>This Noble Eightfold Path</p>
                </>
            ),
        },
        Thought: {
            pali: "sankappa",
            includes: makeList({
                items: ["renunciation", "goodwill", "not harming"],
                isOrdered: false,
            }),
        },
        Speech: {
            pali: "vaca",
            includes: makeList({
                items: ["no lying", "no abusive speech", "no idle chatter"],
                isOrdered: false,
            }),
        },
        Action: {
            pali: "kammanta",
            includes: makeList({
                items: ["no killing", "no stealing", "no sexual misconduct"],
                isOrdered: false,
            }),
        },
        Livelihood: {
            pali: "ajiva",
            suttas: [
                {
                    name: "Vanijja Sutta",
                    chapter: "Anguttara Nikaya 5.177",
                    link: "https://suttacentral.net/an5.177/en/sujato?layout=plain&reference=none&notes=asterisk&highlight=false&script=latin",
                },
            ],
            includes: makeList({
                items: [
                    "no trading in weapons",
                    "no trading in human trafficking",
                    "no trading in meat",
                    "no trading in intoxicants",
                    "no trading in poison",
                ],
                isOrdered: false,
            }),
        },
        Effort: {
            pali: "vayama",
            includes: (
                <>
                    {makeList({
                        items: [
                            "abandon arisen unwholesome states of mind",
                            "prevent unarisen unwholesome states of mind",
                            "arouse unarisen wholesome states of mind",
                            "maintain arisen wholesome states of mind",
                        ],
                        isOrdered: false,
                    })}
                    <table className="right-effort-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>unarisen</th>
                                <th>arisen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>unwholesome states of mind</td>
                                <td>prevent</td>
                                <td>abandon</td>
                            </tr>
                            <tr>
                                <td>wholesome states of mind</td>
                                <td>arouse</td>
                                <td>maintain</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ),
        },
        Mindfulness: {
            pali: "sati",
            suttas: [
                {
                    name: "Satipatthana Sutta",
                    chapter: "Majjhima Nikaya 10",
                    link: "https://suttacentral.net/mn10/en/sujato?layout=plain&reference=none&notes=asterisk&highlight=false&script=latin",
                },
                {
                    name: "Mahasatipatthana Sutta",
                    chapter: "Digha Nikaya 22",
                    link: "https://suttacentral.net/dn22/en/sujato?layout=plain&reference=none&notes=asterisk&highlight=false&script=latin",
                },
            ],
            includes: (
                <>
                    <p>body, feelings, general state of mind</p>
                    <div className="spacer"></div>
                    <h4>
                        <u>Specific Mental Objects</u>
                    </h4>
                    <button
                        className="list-button"
                        onClick={(e) =>
                            listButtonHandler(setListBox, e.target.innerHTML)
                        }
                    >
                        Five Hinderances
                    </button>
                    <br />
                    <button
                        className="list-button"
                        onClick={(e) =>
                            listButtonHandler(setListBox, e.target.innerHTML)
                        }
                    >
                        Five Aggregates
                    </button>
                    <br />
                    <button
                        className="list-button"
                        onClick={(e) =>
                            listButtonHandler(setListBox, e.target.innerHTML)
                        }
                    >
                        Six Internal and External Spheres of Sense
                    </button>
                    <br />
                    <button
                        className="list-button"
                        onClick={(e) =>
                            listButtonHandler(setListBox, e.target.innerHTML)
                        }
                    >
                        Seven Constituents of Awakening
                    </button>
                    <div className="spacer"></div>
                    <h4>
                        <u>Four Noble Truths</u>
                    </h4>
                    see{" "}
                    <button
                        className="list-button"
                        onClick={() => setShowing(1)}
                    >
                        Right Understanding
                    </button>
                </>
            ),
        },
        Concentration: {
            pali: "samadhi",
            suttas: [
                {
                    name: "Jhana Sutta",
                    chapter: "Anguttara Nikaya 9.36",
                    link: "https://suttacentral.net/an9.36/en/sujato?layout=plain&reference=none&notes=asterisk&highlight=false&script=latin",
                },
            ],
            includes: (
                <>
                    <h4>
                        Evolving states of meditation.
                        <br />
                        (meditative absorption: <em>jhana</em>)
                    </h4>
                    <div className="spacer"></div>
                    {makeList({
                        items: [
                            "aloof from sense desires and unwholesome thoughts, resulting in applied and sustained thought, joy and bliss.",
                            "replacing applied and sustained thought with single-pointedness of mind, tranquility, joy and bliss.",
                            "replacing mental joy with equanimity, mindfulness and bodily bliss.",
                            "beyond joy and bliss, suffering, and sorrow: total equanimity and mindfulness.",
                        ],
                        isOrdered: true,
                    })}
                </>
            ),
        },
    };
}

function makeList({ items, isOrdered }) {
    const result = items.map((item, i) => (
        <li key={`${item} of ${items.join(", ")}`}>
            <span className={`list-marker ${isOrdered ? "" : "arrow"}`}>
                {isOrdered ? i + 1 + "." : "‣"}
            </span>{" "}
            {item}
        </li>
    ));
    return isOrdered ? <ol>{result}</ol> : <ul>{result}</ul>;
}

function listButtonHandler(setListBox, name) {
    setListBox(name);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export { listButtonHandler };
