import Modal from "./modal"

const Card = (props) => {

    return(
        <div className="card">

            <Modal name={props.name} title={props.title} bio={props.bio} photo={props.photo} id={props.id}/>

            <div className="row">
                <img className="strong-img" src={props.photo}/>
            </div>
            <div className="row">
                <div className="desc">
                    <h3 className="person">{props.name}</h3>
                    <h6 className="title">{props.title}</h6>
                    <a href="#" data-bs-toggle="modal" data-bs-target={"#"+props.id}>view bio</a>
                </div>
            </div>
        </div>
    )
}

export default Card