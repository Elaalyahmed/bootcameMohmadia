import {Component  } from "react";
    export default class UserFavoriteAnimals extends Component {
    render(){
         const { favAnimals } = this.props;

        return(
            <ul>
                { favAnimals.map((animal,index) =>(
                     <li key={index}>{animal}</li>
                ))}
            </ul>

        )
    };

}