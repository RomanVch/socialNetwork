import {useState,} from "react";
import {v1} from 'uuid';

const id1 = "1"
const id2 = "2"
const id3 = "3"
const id4 = "4"
const id5 = "5"
const id6 = "6"
type typeText = {
    textPost: string
    textMessage: string
}

type typePost = {
    id: number,
    name: string,
    like: number,
    avatar: string,
    message: string
}

type typePropsFriend = {
    id: string,
    avatar: string
    online: boolean
    name: string
}
type PropsFriendMessage = {
    you: string,
    data: string
}
export type typeStore = {
    _state: {
        text: typeText,
        post: Array<typePost>,
        PropsFriend: Array<typePropsFriend>,
        PropsFriendMessage: any,
    }
    getState:any,
    _callSubscriber: (state: any) => void,
    subscribe: (observer: any) => void,
    addPostState: (addingPost: MessageType) => void,
    upPostState: (addingPost: string) => void,
    addMessage: (id: string, time: string) => void,
    upAddMessage: (addingPost: string) => void,
}
export const store: typeStore = {
    _state: {
        text: {
            textPost: "",
            textMessage: ""
        },
        post: [
            {
                id: 3,
                name: "Абдула",
                like: 55,
                avatar: "https://avatars.mds.yandex.net/get-zen_doc/170671/pub_5bd6ee36ebe8af00aad622b0_5bd6f96613f8c600a99a3c72/scale_1200",
                message: "Привет"
            },
            {
                id: 2,
                name: "Вася",
                like: 35,
                avatar: "https://avatars.mds.yandex.net/get-zen_doc/3001030/pub_5ed23688706f83164ac7a267_5ed2375f82bed14b19ec5188/scale_1200",
                message: "Привет"
            },
            {
                id: 1,
                name: "Иван",
                like: 25,
                avatar: "https://ru.sm.news/wp-content/uploads/2019/12/05/unnamed-1.jpg",
                message: "Привет"
            }
        ],
        PropsFriend: [
            {
                id: id6,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaxVdFMklNhgxbmL4UY0cfK3_jP8BrQBLAg&usqp=CAU",
                online: true,
                name: "Иван",
            },
            {
                id: id5,
                avatar: "https://carismartes.com.br/assets/global/images/avatars/avatar2_big.png",
                online: false,
                name: "Киррил",

            },
            {
                id: id4,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU",
                online: true,
                name: "Миша",

            },
            {
                id: id3,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSlKAZCOkXICzCApIHFXE0ZiWBzZ8cuBZXA&usqp=CAU",
                online: false,
                name: "Оля",

            },
            {
                id: id2,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbszFuIMdQE-yDycQKm09mFJpwTjmO0sMZNw&usqp=CAU",
                online: false,
                name: "Костя",

            },
            {
                id: id1,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMYoHYaGSL-f_CiASP8Ekc9KZ8DELB7jujw&usqp=CAU",
                online: true,
                name: "Петр",

            },
        ],
        PropsFriendMessage: {
            [id6]: [
                {
                    you: "привет",
                    data: "11.11.20"
                },
                {
                    friend: "привет",
                    data: "12.11.20"
                },
                {
                    you: "как пузо?",
                    data: "13.11.20"
                },
                {
                    friend: "выросло",
                    data: "14.11.20"
                }],
            [id5]: [
                {
                    you: "привет",
                    data: "26.10.20"
                },
                {
                    friend: "привет",
                    data: "27.10.20"
                },
                {
                    you: "как cам?",
                    data: "28.10.20"
                },
                {
                    friend: "нормально",
                    data: "29.10.20"
                }
            ],
            [id4]: [
                {
                    you: "привет",
                    data: "30.10.20"
                },
                {
                    friend: "привет",
                    data: "31.10.20"
                },
                {
                    you: "как джип ниссан?",
                    data: "01.11.20"
                },
                {
                    friend: "нормально",
                    data: "02.11.20"
                }
            ],
            [id3]: [
                {
                    you: "привет",
                    data: "03.11.20"
                },
                {
                    friend: "привет",
                    data: "04.11.20"
                },
                {
                    you: "как в космосе?",
                    data: "05.11.20"
                },
                {
                    friend: "нормально",
                    data: "06.11.20"
                }
            ],
            [id2]: [

                {
                    you: "привет",
                    data: "07.11.20"
                },
                {
                    friend: "привет",
                    data: "08.11.20"
                },
                {
                    you: "как дела в качалке?",
                    data: "09.11.20"
                },
                {
                    friend: "нормально",
                    data: "10.11.20"
                }
            ]
            ,
            [id1]: [
                {
                    you: "привет",
                    data: "11.11.20"
                },
                {
                    friend: "привет",
                    data: "12.11.20"
                },
                {
                    you: "как пузо?",
                    data: "13.11.20"
                },
                {
                    friend: "нормально",
                    data: "14.11.20"
                }
            ]
        },
    },
    getState () {
        return this._state
    },
    _callSubscriber(state: any) {
        console.log('change state')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    addPostState(addingPost: MessageType) {

        this._state.post.unshift(addingPost)
        this._state.text.textPost = ""
        this._callSubscriber(this)

    },
    upPostState(addingPost: string) {
        debugger
        this._state.text.textPost = addingPost
        console.log(this._state.text.textPost)
        rerenderEntierTree(this)
    },
    addMessage(id: string, time: string) {
        const message = {
            you: this._state.text.textMessage,
            data: time
        }

        this._state.PropsFriendMessage[id].push(message)
        this._state.text.textMessage = ""
        this._callSubscriber(this)
    },
    upAddMessage(addingPost: string) {
        this._state.text.textMessage = addingPost
        console.log(this._state.text.textMessage)
        this._callSubscriber(this)

    }
}

console.log(store._state.PropsFriend[0].id)


let rerenderEntierTree = (state: any) => {
    console.log('change state')
}

export const subscribe = (observer: any) => {
    rerenderEntierTree = observer
}


export type MessageType =
    {
        id: number;
        name: string;
        like: number;
        avatar: string;
        message: string;
    };

export type typePropsFriendObject = {
    id: string,
    avatar: string,
    online: boolean,
    name: string,
};
export type message = {
    you?: string;
    data: string;
    friend?: string
}
export type TaskType = {
    textPost: string
    textMessage: string
    post: Array<MessageType>
    PropsFriend: Array<typePropsFriendObject>
    PropsFriendMessage: any;
}

export const mediaMessage: TaskType = {
    textPost: "",
    textMessage: "",
    post: [
        {
            id: 3,
            name: "Абдула",
            like: 55,
            avatar: "https://avatars.mds.yandex.net/get-zen_doc/170671/pub_5bd6ee36ebe8af00aad622b0_5bd6f96613f8c600a99a3c72/scale_1200",
            message: "Привет"
        },
        {
            id: 2,
            name: "Вася",
            like: 35,
            avatar: "https://avatars.mds.yandex.net/get-zen_doc/3001030/pub_5ed23688706f83164ac7a267_5ed2375f82bed14b19ec5188/scale_1200",
            message: "Привет"
        },
        {
            id: 1,
            name: "Иван",
            like: 25,
            avatar: "https://ru.sm.news/wp-content/uploads/2019/12/05/unnamed-1.jpg",
            message: "Привет"
        }
    ],
    PropsFriend: [
        {
            id: id6,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaxVdFMklNhgxbmL4UY0cfK3_jP8BrQBLAg&usqp=CAU",
            online: true,
            name: "Иван",
        },
        {
            id: id5,
            avatar: "https://carismartes.com.br/assets/global/images/avatars/avatar2_big.png",
            online: false,
            name: "Киррил",

        },
        {
            id: id4,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU",
            online: true,
            name: "Миша",

        },
        {
            id: id3,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSlKAZCOkXICzCApIHFXE0ZiWBzZ8cuBZXA&usqp=CAU",
            online: false,
            name: "Оля",

        },
        {
            id: id2,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbszFuIMdQE-yDycQKm09mFJpwTjmO0sMZNw&usqp=CAU",
            online: false,
            name: "Костя",

        },
        {
            id: id1,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMYoHYaGSL-f_CiASP8Ekc9KZ8DELB7jujw&usqp=CAU",
            online: true,
            name: "Петр",

        },

    ],
    PropsFriendMessage: {
        [id6]: [
            {
                you: "привет",
                data: "11.11.20"
            },
            {
                friend: "привет",
                data: "12.11.20"
            },
            {
                you: "как пузо?",
                data: "13.11.20"
            },
            {
                friend: "выросло",
                data: "14.11.20"
            }],
        [id5]: [
            {
                you: "привет",
                data: "26.10.20"
            },
            {
                friend: "привет",
                data: "27.10.20"
            },
            {
                you: "как cам?",
                data: "28.10.20"
            },
            {
                friend: "нормально",
                data: "29.10.20"
            }
        ],
        [id4]: [
            {
                you: "привет",
                data: "30.10.20"
            },
            {
                friend: "привет",
                data: "31.10.20"
            },
            {
                you: "как джип ниссан?",
                data: "01.11.20"
            },
            {
                friend: "нормально",
                data: "02.11.20"
            }
        ],
        [id3]: [
            {
                you: "привет",
                data: "03.11.20"
            },
            {
                friend: "привет",
                data: "04.11.20"
            },
            {
                you: "как в космосе?",
                data: "05.11.20"
            },
            {
                friend: "нормально",
                data: "06.11.20"
            }
        ],
        [id2]: [

            {
                you: "привет",
                data: "07.11.20"
            },
            {
                friend: "привет",
                data: "08.11.20"
            },
            {
                you: "как дела в качалке?",
                data: "09.11.20"
            },
            {
                friend: "нормально",
                data: "10.11.20"
            }
        ]
        ,
        [id1]: [
            {
                you: "привет",
                data: "11.11.20"
            },
            {
                friend: "привет",
                data: "12.11.20"
            },
            {
                you: "как пузо?",
                data: "13.11.20"
            },
            {
                friend: "нормально",
                data: "14.11.20"
            }
        ]
    }
}

export const addPostState = (addingPost: MessageType) => {
    mediaMessage.post.unshift(addingPost)

    rerenderEntierTree(mediaMessage)
    mediaMessage.textPost = ""
}

export const upPostState = (addingPost: string) => {
    mediaMessage.textPost = addingPost
    rerenderEntierTree(mediaMessage)

}

export const addMessage = (id: string, time: string) => {
    console.log(mediaMessage.PropsFriendMessage[id])
    const Message =
        {
            you: mediaMessage.textMessage,
            data: time
        }

    mediaMessage.PropsFriendMessage[id].push(Message)
    rerenderEntierTree(mediaMessage)
    mediaMessage.textMessage = ""
}
export const upAddMessage = (addingPost: string) => {
    mediaMessage.textMessage = addingPost
    rerenderEntierTree(mediaMessage)

}
