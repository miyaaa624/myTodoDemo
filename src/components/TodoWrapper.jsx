import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

//全部表單的元件
function TodoWrapper() {

    // 因為有n個todo , 所以使用陣列存取
    // 有多個todo所以命名用todos
    // const[todos,settodos]=useState(['list1','list2']);
    // const[變數名稱,更改變數的方法]=useState(初始值);
    // const [todos, setTodos] = useState([
    //     { content: 'List1', id: Math.random() },
    //     { content: 'List2', id: Math.random() },
    // ]);

    //因為要判定todo是否被點擊,所以要增加一個標記屬性=>isCompleted
    //新增陣列屬性isEdit => 判別是否編輯狀態
    const [todos, setTodos] = useState([
        { content: 'List1', id: Math.random(), isCompleted: false, isEdit: false },
        { content: 'List2', id: Math.random(), isCompleted: false, isEdit: false },
    ]);

    //建立加入新的todo內容
    //1.使用...其餘運算子來保留原陣列內容
    //2.再加入新的物件內容
    const addTodo = (content) => {
        //{前面的content}屬性名稱 ,{後面的content}屬性質
        //保留的內容 ...todos
        //新加的內容 content: content(這個content是上面addTodo = (content)的意思)), id: Math.random(),isCompleted:false
        setTodos([...todos, { content: content, id: Math.random(), isCompleted: false, isEdit: false }])
    }

    //建立刪除todo函式,傳給todo元件使用
    //使用filter方法,去除被刪除的todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            //檢查目前的id是否為被刪除的id
            //如果不是,則保留
            return todo.id !== id
        }))
    }

    //建立雙向(toggle)切換 「完成與取消」的函式
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            //檢查被點擊的id是否跟目前陣列中的id一樣
            //yes => 1.取出todo 2.將isCompleted屬性直反向處理 (true->flase/flase->true)
            //no => todo不變
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    //建立是否修改的函式 (雙向toggle)
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            //1.逐筆檢查目前的todo的id是否等於被修改的id
            //2.yes => (1)取出todo資料 (2)修改isEdit屬性值為反向
            //3.no => todo不變
            //三元運算子
            return todo.id === id
                ? { ...todo, isEdit: !todo.isEdit }
                : todo

            //if else
            // if(todo.id===id){
            //     return{...todo,isEdit:!todo.isEdit}
            // }else{
            //     return todo
            // }
        }))
    }

    //建立完成修改的函式 (按下完成的動作)
    //1. 異動content為新的內容
    //2. isEdit給回flase
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                //只有一個return所以map外面要加大括號
                // 因為陣列需要key屬性 , 所以要改成陣列物件加上id
                //屬性名稱deleteTodo ; 傳送名稱{deleteTodo}
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id}
                        deleteTodo={deleteTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}
                    />
                })
            }

        </div>

    )
}

export default TodoWrapper