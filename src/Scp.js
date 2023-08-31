import './scp.css'

function Scp({scp})
{
    return(
        <div className="component container content">
            <h1>Subject: {scp.subject}</h1>
            <h2>Class: {scp.class}</h2>
            <p><strong>Containment:</strong><br></br> {scp.containment}</p>
            <p><strong>Description:</strong><br></br>{scp.description}</p>
            <img src={scp.image} alt={scp.subject}/>
        </div>
    )
}
export default Scp