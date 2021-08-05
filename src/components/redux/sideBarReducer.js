import avatar1 from "../../img/user-3.jpg";
import avatar2 from '../../img/user2.jpg';
import avatar3 from '../../img/user3.jpg';

let initialState = {
    friends: [
        { id: 1, imgurl: avatar1 },
        { id: 2, imgurl: avatar2 },
        { id: 3, imgurl: avatar3 },
        { id: 4, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 5, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" }
    ]
}


const sideBarReducer = (state = initialState, action) => {

    return state;
}

export default sideBarReducer;