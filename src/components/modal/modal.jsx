import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({ show, onHide}) => {
    console.log("reached modal: show:" + show + " onHide:" + onHide);

    return (
    
        <>
        <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">My Modal</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={onHide}>
                    <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Modal content goes here.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onHide}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

            
        </>
    )
};

export default MyModal;