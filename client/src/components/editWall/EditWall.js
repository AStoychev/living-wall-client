import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { wallServiceFactory } from '../../services/wallService';

import '../createWall/CreateEditWall.css';

export const EditWall = ({
    onWallEditSubmit,
}) => {
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

    return (
        <div className="container">
            <section id="create-wall" className="content auth">
                <form id="create" method='POST' onSubmit={onSubmit}>
                    <div className="container">
                        {/* <div className="brand-logo"></div> */}
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
                        {/* <input value={values.description} type="description" id="description" name="description" placeholder="Describe the product" /> */}
                        <textarea
                            type="description"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={changeHandler}
                            style={{ padding: "10px", paddingLeft: "20px", height: "70px", marginTop: "-15px", fontSize: "24px", borderRadius: "50px" }}>
                        </textarea>

                        <input className="submit" type="submit" value="Edit" />

                    </div>
                </form>
            </section>
        </div>
    );
}