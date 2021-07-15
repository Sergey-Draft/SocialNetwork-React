import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrew", imgurl: 'https://w7.pngwing.com/pngs/985/915/png-transparent-superman-computer-icons-superhero-avatar-child-face-heroes.png' },
        { id: 2, name: "Sveta", imgurl: 'https://nchzd.ru/files/1244/1731/direktor.jpeg' },
        { id: 3, name: "Sasha", imgurl: 'https://im0-tub-by.yandex.net/i?id=53c063b1546b7597918e7ebd63ad8586&n=13' },
        { id: 4, name: "Vladimir", imgurl: 'https://pbs.twimg.com/profile_images/1057002966840827904/466s7Vf4.jpg' },
        { id: 5, name: "Petya", imgurl: 'https://banner2.cleanpng.com/20190717/icr/kisspng-computer-icons-race-14-business-avatar-application-5d2f03c184ded7.4186435015633622415443.jpg' },
      ],
      newUserId: '1',
      messages: [
        { id: 1, message: "Hello, How are you today?" },
        { id: 2, message: "I am ok! And you?" },
        { id: 3, message: "So, what do you wanna do today?" },
        { id: 4, message: "Nah, I dunno. Play soccer.. or learn more coding perhaps.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { id: 5, message: "Yo!" },
      ],
      newMessage: 'Hello!'
    },

    profilePage: {
      posts: [
        { id: 1, post: "Hi", likesCount: "15" },
        { id: 2, post: "How is your doing", likesCount: "15" },
        { id: 3, post: "I am the first!", likesCount: "-15" },
        { id: 4, post: "Youre not", likesCount: "5" },
      ],
      newPostText: 'IT-kamasutra.com'

    },
    sideBar: {
      friends: [
        { id: 1, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 2, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 3, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 4, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" },
        { id: 5, imgurl: "https://st3.depositphotos.com/1432405/19346/v/950/depositphotos_193462432-stock-illustration-businessman-icon-flat-style.jpg" }
      ]
    }
  },
  _callSubscriber() {
    console.log('State has changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }

}

window.state = store;

export default store;