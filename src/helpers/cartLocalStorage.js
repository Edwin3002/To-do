
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
    console.log(item);
    const dataCart = JSON.parse(localStorage.getItem('tasks'));
    console.log(dataCart);
    if(dataCart === ''){
        localStorage.setItem('tasks', JSON.stringify([item]));
        console.log('vaciio');
    }else{
        dataCart.push(item);
        localStorage.setItem('tasks', JSON.stringify(dataCart));
        console.log('lleno');
    }
}
export const changeItemCartPlus  = (items) =>{
    localStorage.setItem('tasks', JSON.stringify(items));
}