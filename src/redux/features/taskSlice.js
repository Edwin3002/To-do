import { createSlice } from '@reduxjs/toolkit'
import { addItemCart, changeItemCartPlus, getItemsCart } from '../../helpers/cartLocalStorage';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: getItemsCart() === null ? [] : getItemsCart(),
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            addItemCart(action.payload);
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const taskFind = state.find((task) => task.id === id)
            if (taskFind) {
                taskFind.title = title;
                taskFind.description = description;
            }
            changeItemCartPlus(state);
        },
        checkTask: (state, action) => {
            const taskFind = state.find((task) => task.id === action.payload)
            if (taskFind) {
                taskFind.completed = !taskFind.completed;
            }
            changeItemCartPlus(state);
        },
        deleteTask: (state, action) => {
            const taskFind = state.find((task) => task.id === action.payload)
            if (taskFind) {
                state.splice(state.indexOf(taskFind), 1)
            }
            changeItemCartPlus(state);
        }
    }
})

export const { addTask, deleteTask, editTask, checkTask } = taskSlice.actions;

export default taskSlice.reducer;