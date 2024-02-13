function Links (props) {
    return (
        <div id="links">
            <h3>Links</h3>
            <ul>
                    <a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a>
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer">{props.linkedin}</a>
            </ul>
        </div>
        
    )
}
export default Links