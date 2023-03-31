// Not use

import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

import { CatalogItem } from './CatalogItem/CatalogItem';

export class ClassComponentWall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            name: "Wall",
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/wall.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.items,
                });
            });
    }


    render() {

        return (
            <ListGroup>
                {this.props.items.map(item => <CatalogItem key={item._id}>{item.label}</CatalogItem>)}
            </ListGroup>
        );
    }
}