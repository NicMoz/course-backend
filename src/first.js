const data = {
    name: 'nic',
    age: 20,
    friends: ['stone', 'work', 'smith,']
};
const {name, friends: {[0]: friends}} = data;
const data2 = {...data};

