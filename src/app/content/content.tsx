import "./content.css";

type ContentParams = {
    side: string;
    name: string;
    description: string;
    link: string;
}

export default function Content(params: ContentParams) {
    return (
        <section className="content_container"
            style={params.side === "right" ? {right: "calc(32rem - 100%)"} : {left: 0}}>
            <a id={params.name} />
            <h1> {params.name} </h1>
            <p> {params.description} </p>
            <a href={params.link} className="repository_link">
                <img />
                <h2> View on GitHub </h2>
            </a>
        </section>
    );
}
