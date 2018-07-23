const addOneItem = (state, todoItem) => {
    const obj = {
        completed: false,
        item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
};
const removeOneItem = (state, { todoItem, index }) => {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
};
const toggleOneItem = (state, { todoItem, index }) => {
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAll = state => {
    localStorage.clear();
    state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAll };
