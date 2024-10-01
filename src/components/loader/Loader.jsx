import './loader.scss'
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="loader-conatiner">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="#000"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
