import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

//新增內容的元件

//解構props的屬性名稱 , 用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit,editTodo }) {
    return (
        //三元運算子 檢查todo.isEdit是否為修該狀態 
        //? =? isEdit = true , 呼叫EditForm修改元件,並傳入todo資料
        //: =? isEdit = false , 顯示todo資料
        todo.isEdit
            ? <EditForm todo={todo} editTodo={editTodo}/>
            //新增一個Completed類別規則
            //使用反引號+三元運算子檢查isCompleted
            //如果為真=>套用Completed類別規則
            //如果為否=>取消Completed類別規則 =>" "
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p>上課中</p> */}
                {/* <p>{todo}</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    {/* 外面的{} => 在jsx使用js語法 ; 第二個{} =>物件的樣式把css帶進來 */}
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer' }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>
            </div>
    )
}

export default Todo