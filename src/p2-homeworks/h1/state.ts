type UsersType = {
    id:number,
    avatar: string
    name: string
    message: string
    time: string,
}
type RootStateType = {
    users: Array<UsersType>
}
let state: RootStateType = {
    users: [
        {
            id:0,
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Kind girl',
            message: 'Did you use npm?',
            time: `${new Date().toLocaleString()}`,
        },
        {
            id:1,
            avatar: 'https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BB%D0%BA-5578890.jpg',
            name: 'Lonely wolf',
            message: 'Yes. of course',
            time: `${new Date().toLocaleString()}`,
        },
        {
            id:0,
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Kind girl',
            message: 'i understood',
            time: `${new Date().toLocaleString()}`,
        },
        {
            id:0,
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Kind girl',
            message: 'You are a good boy!',
            time: `${new Date().toLocaleString()}`,
        },
        {
            id:1,
            avatar: 'https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BB%D0%BA-5578890.jpg',
            name: 'Lonely wolf',
            message: 'Have a nice day!',
            time: `${new Date().toLocaleString()}`,
        },
    ],
}
export default state;