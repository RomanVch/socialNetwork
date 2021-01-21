import {friendMessageType, TaskType} from "./store";

 export const ADDMESSAGE = "ADD-MESSAGE",
    UPMESSAGESTATE = "UP-MESSAGE-STATE"

const id1 = "1",
    id2 = "2",
    id3 = "3",
    id4 = "4",
    id5 = "5",
    id6 = "6"

let initialState = {
    textMessage: "",
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
            }
        ],
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
        ],
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


const dialogReducer = (state:friendMessageType = initialState ,action:any): any => {
    switch (action.type) {
        case ADDMESSAGE:
            const message = {
                you: state.textMessage,
                data: action.time
            }
            state.PropsFriendMessage[action.id].push(message)
            state.textMessage = "";
            return state;
        case UPMESSAGESTATE:
            state.textMessage = action.addingPost
            return state
        default:
            return state
    }
}

export default dialogReducer;
