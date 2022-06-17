import { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const Info = props => {

    const params = useParams();

    const location = useLocation();

    const history = useHistory();

    useEffect(() => {
        console.log(params);
        console.log(location);
        console.log(history);
    }, [])

    return(
        <>
        <h1>Info</h1>
        <button className="btn btn-warning" onClick={history.goBack}>Regresar</button>
        </>
    )
}

export default Info;