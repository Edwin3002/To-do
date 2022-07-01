
export const createLocalS  = () =>{
    let ls = localStorage.getItem('tasks')
    if(ls === null){
        localStorage.setItem('tasks', JSON.stringify(''));
    }else{
        return
    }
}

export const getItemsCart  = () =>{
    return JSON.parse(localStorage.getItem('tasks'));
}

export const addItemCart  = (item) =>{
    const dataCart = JSON.parse(localStorage.getItem('tasks'));
    if(dataCart === ''){
        localStorage.setItem('tasks', JSON.stringify([item]));
    }else{
        dataCart.push(item);
        localStorage.setItem('tasks', JSON.stringify(dataCart));
    }
}
export const changeItemCartPlus  = (items) =>{
    localStorage.setItem('tasks', JSON.stringify(items));
}