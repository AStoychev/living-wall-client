import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWallContext } from '../../contexts/WallContext';

import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { wallServiceFactory } from '../../services/wallService';

import '../createWall/CreateEditWall.css';

export const EditWall = () => {
    const { onWallEditSubmit } = useWallContext();
    const { wallId } = useParams();
    const wallService = useService(wallServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onWallEditSubmit);

    useEffect(() => {
        wallService.getOne(wallId)
            .then(result => {
                changeValues(result);
            });
    }, [wallId]);

    const isFull = () => {
        if ((values.title).length === 0 || (values.category).length === 0 || (values.price).length === 0
            || (values.imageUrl).length === 0 || (values.description).length === 0) {
            return false
        } else {
            return true
        }
    }

    isFull()


    return (
        <div className="container">
            <section id="create-wall" className="content auth">
                <form id="create" method='POST' onSubmit={onSubmit}>
                    <div className="container">
                        <h1>Edit Item</h1>

                        <label htmlFor="title">Title:</label>
                        <input
                            type="title"
                            id="title"
                            name="title"
                            value={values.title}
                            onChange={changeHandler}
                        />

                        <label htmlFor="category">Category:</label>
                        <input
                            type="category"
                            name="category"
                            id="add-category"
                            value={values.category}
                            onChange={changeHandler}
                        />

                        <label htmlFor="price">Price:</label>
                        <input
                            type="price"
                            name="price"
                            id="price"
                            value={values.price}
                            onChange={changeHandler}
                        />

                        <label htmlFor="imageUrl">Image:</label>
                        <input
                            type="imageUrl"
                            id="imageUrl"
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={changeHandler}
                        />

                        <label htmlFor="description">Description:</label>
                        <textarea
                            type="description"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={changeHandler}
                            style={{ padding: "10px", paddingLeft: "20px", height: "70px", marginTop: "-15px", fontSize: "24px", borderRadius: "50px" }}>
                        </textarea>

                        {isFull() === true ?
                            <input className="submit" type="submit" value="Edit" />
                            :
                            <input className="submit-disabled" type="submit" value="Edit" title="You have to fill all fields!" disabled />
                        }
                    </div>
                </form>
            </section>
        </div>
    );
}