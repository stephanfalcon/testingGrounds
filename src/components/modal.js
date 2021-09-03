const Modal = (props) => {
    return(
        <div class="modal fade" tabindex="-1" role="dialog" id={props.id}>
            <div class="modal-dialog" role="document">
                <div class="modal-content ">
                    <div class="modal-header">
                        <button type="button" class="close btn btn-default btn-primary" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h2 class="modal-title modal-title">{props.name}</h2>
                    <h5 className="modal-title">{props.title}</h5>
                    <div class="modal-body modal-row">
                        <p className="modal-cont modal-words">{props.bio}</p>
                        <img  className="modal-cont modal-img" src={props.photo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal