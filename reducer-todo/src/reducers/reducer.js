export const initialItems = [
    {
        item: 'Mow Lawn',
        completed: false,
        id: 74329878
    },
    {
        item: 'Pickup up dry cleaning',
        completed: false,
        id: 94268903
    }
];

export const itemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];

        case 'TOGGLE_ITEM':
            return state.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    ...item,
                    completed: !item.completed
                  }
                }
                return item;
            });

        case 'REMOVE_ITEM':
            return state.filter(item => {
                return !item.completed;
            });

        default:
            return state;
    }
};
