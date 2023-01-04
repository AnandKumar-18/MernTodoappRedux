import todo from "../Model/Todo.js";



export const AddTodo = async (req,res)=>{
   try {
        const NewTodo = await todo.create({
            data:req.body.data,
            createAt:Date.now()
        })
        // console.log(req.body);
        await NewTodo.save();
        return res.status(200).json(NewTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getAllTodos = async (req,res)=>{
    try {
        
        const todos = await todo.find({}).sort({"createAt":-1})
        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }
}


export const toggleTodoDone = async (req,res)=>{
    try {
        
        const todoRef = await todo.findById(req.params.id);

        const todos = await todo.findByIdAndUpdate(
            {_id: req.params.id},
            {done: !todoRef.done}
        )
        
        await todos.save()

        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }
}


export const updateTodo = async (req,res)=>{
    try {
         await todo.findByIdAndUpdate(
            {_id: req.params.id},
            {data: req.body.data}
        )
        
        const todos = await todo.findById(req.params.id)

        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const deleteTodo = async (req,res)=>{
    try {
        const todos = await todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }
}