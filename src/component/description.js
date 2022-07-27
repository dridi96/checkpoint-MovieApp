import { useParams } from 'react-router-dom';
import { data } from './data';

const Description = () => {
    let {idd} = useParams();

    let movieDescription = data.filter(element => element.id === idd );
    return (
        <div className='desc' >
    <h1 className='titre'>this is a description / trailer page</h1>
         {movieDescription && movieDescription.map(element => <div>
            <h3 style={{color:'darkgoldenrod',}}>read description:<br />
            <h4 style={{color:'black',}}>{element.description}</h4></h3>
            <h3 style={{color:'darkgoldenrod',}}>watch the trailer</h3>
            <iframe src={element.trailer} title="Trailer" frameBorder="0" allowFullScreen style={{height:"350px",width:"100%",}} ></iframe>
            </div>)} 
        </div>    
    )
}

export default Description