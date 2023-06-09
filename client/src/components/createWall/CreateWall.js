import React from 'react';
import { useWallContext } from '../../contexts/WallContext';

import { useForm } from '../../hooks/useForm';

import '../createWall/CreateEditWall.css';

export const CreateWall = () => {
    const { onCreateWallSubmit } = useWallContext()
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreateWallSubmit);

    //

    const isRequired = []
    const items = (Object.values(values));

    const isFull = () => {
        if (isRequired.length === items.length) {
            return true
        } else {
            return false
        }
    }

    for (let i = 0; i < items.length; i++) {
        if ((items[i].length) > 0) {
            isRequired.push(1)
        }
    }

    //

    return (
        <div className="container">
            <section id="create-wall" className="content auth">
                <form id="create" method='POST' onSubmit={onSubmit}>
                    <div className="container">
                        <h1>Create Item</h1>

                        <label htmlFor="title">Title:</label>
                        <input value={values.title} onChange={changeHandler} type="title" id="title" name="title" placeholder="Moss Wall" />

                        <label htmlFor="category">Category:</label>
                        <input value={values.category} onChange={changeHandler} type="category" name="category" id="add-category" placeholder="Wall" />

                        <label htmlFor="price">Price:</label>
                        <input value={values.price} onChange={changeHandler} type="number" name="price" id="price" placeholder="0.00" />

                        <label htmlFor="imageUrl">Image:</label>
                        <input value={values.imageUrl} onChange={changeHandler} type="url" id="imageUrl" name="imageUrl" placeholder="https://..." />

                        <label htmlFor="description">Description:</label>
                        
                        <textarea value={values.description} onChange={changeHandler} type="description" id="description" name="description" placeholder="Describe the product"
                            style={{ padding: "10px", paddingLeft: "20px", height: "70px", marginTop: "-15px", fontSize: "24px", borderRadius: "50px" }}></textarea>

                        {isFull() === true ?
                            <input className="submit" type="submit" value="Create"/>
                            : 
                            <input className="submit-disabled" type="submit" value="Create" title="You have to fill all fields!" disabled/>
                        }

                    </div>
                </form>
            </section>
        </div>
    );
}