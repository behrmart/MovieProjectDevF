import React, {useState} from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa"; // For Like heart
// import MyModal from '../modal/modal';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const CardComponent = (props) => {
    const [like, setLike] = useState(false);
    //const [showModal, setShowModal] = useState(false);

    const handlerLike = () => { //Like on/off
        setLike(!like);
      };

    const handleShowModal = () => {
    setShowModal(true);
    };

    const handleHideModal = () => {
    setShowModal(false);
    };



    return (
        <>
            <div className="card p-3 bg-primary-subtle border border-primary-subtle rounded-3">
                <img src={props.portada} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-primary-emphasis">{props.titulo}</h5>
                    <p className="card-text">{props.sinopsis}</p>
                    <p className="card-text text-success-emphasis ">{props.duracion}</p>

                </div>
                <ul className="list-group list-group-flush bg-warning-subtle border border-warning-subtle rounded-3">
                    <li className="list-group-item">Director</li>
                    <li className="list-group-item">{props.director}</li>
                </ul>

                <Link to={`/${props.genero}/${props.titulo}`} state={props} >
                    ver detalle
                </Link>


                <div className='container-fluid p-2 text-danger-emphasis'>
                    {like ? <FaHeart onClick={handlerLike} className='likeActive'/>:  <FaRegHeart onClick={handlerLike}/>}
                </div> 
            </div>
        
        </>
    )
}

export default CardComponent
