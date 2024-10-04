import { Link } from 'react-router-dom'
import './breadcrumbs.scss'

export default function Breadcrumbs(props) {
    return (
        <nav aria-label="breadcrumb" >
            <ol className="breadcrumb">
                {props.breadcrumbs &&
                    props.breadcrumbs.map((item, index) => (
                        <li className="breadcrumb-item" key={index}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))
                }
            </ol>
        </nav>
    )
}
