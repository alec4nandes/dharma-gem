export default function Footer({ footerRef }) {
    return (
        <footer ref={footerRef}>
            <button
                className="list-button close-footer"
                onClick={() => (footerRef.current.style.top = "100%")}
            >
                X
            </button>
            <p>
                Dharma Gem is a fun, animated way to explore the beauty of the
                Buddha’s teachings.
            </p>
            <p>
                Created by{" "}
                <a
                    href="https://www.linkedin.com/in/alec-fernandes-9213a61a7/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Alec Fernandes
                </a>
                . I am open for work as a front-end web developer. If you would
                like to see more of my designs, please{" "}
                <a href="https://fern.haus" target="_blank" rel="noreferrer">
                    visit my portfolio
                </a>
                .
            </p>
        </footer>
    );
}
