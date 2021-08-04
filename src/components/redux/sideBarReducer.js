import img from "../../img/user-3.jpg"

let initialState = {
    friends: [
        { id: 1, imgurl:  img},
        { id: 2, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 3, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 4, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 5, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" }
      ]
}


const sideBarReducer = (state=initialState, action) => {

    return state;
}

export default sideBarReducer;