let state = {
    profile: {
        posts: [
            { id: 1, name: 'Taisha', time: '5 minutes', message: 'A great day when you are confident in yourself!', likeCount: '17' },
            { id: 2, name: 'Andrew', time: '1 hour', message: 'Hi, how are you?', likeCount: '92' },
        ],
    },
    dialogs: {
        messages: [
            { id: 1, message: "hi" },
            { id: 2, message: "Fine" },
            { id: 3, message: "How are you?" },
            { id: 4, message: "Where are you from?" },
        ],
        friends: [
            { id: 1, name: "Roman" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Victor" },
            { id: 4, name: "Igor" },
            { id: 5, name: "Ivan" },
            { id: 6, name: "Diana" },
        ],
    },    
}

export default state;