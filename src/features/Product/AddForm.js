import { useState } from "react"
import React from "react"
import PropTypes from "prop-types"
function AddForm({ addProduct }) {
    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [type, setType] = useState("");

    const submit = (event) => {
        event.preventDefault() 
        if(!name || !imageURL || !type){
            alert("Please fill all data")
            return;
        }
        addProduct({ name, type, imageURL });
        setName("");
        setImageURL("");
        setType("");
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form id="create-form" onSubmit={submit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className=" input-group">
                    <label htmlFor="imageURL">Image URL</label>
                    <input name="imageURL" type="text" id="imageURL" value={imageURL} onChange={ (event) => setImageURL(event.target.value)}/>
                </div>

                <div className=" input-group">
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" id="type" value={type} onChange={(event) => setType(event.target.value)} />
                </div>

                <button type="submit">Add product</button>
            </form>
        </div>
    )
}

AddForm.propTypes = {
    addProduct: PropTypes.func.isRequired
}

export default AddForm;