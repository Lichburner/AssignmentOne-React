import {Link} from 'react-router-dom'
import './nav.css'

function Nav({data})
{
    return(
        <nav>
            <ul>
                {
                    data.map(
                        scp=>(
                            <li key={scp.subject}>
                                <Link to={`${scp.subject}`}className='link'>{scp.subject}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;