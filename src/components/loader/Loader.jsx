import './loader.scss'


export default function Loader() {
    return (
        <div className="loader-conatiner">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
