import { useState } from "react"
function EditForm({todo,editTodo}) {
    // 建立input內容的變數
    // const[變數名稱,更改變數的方法]=useState(初始值);
    //useState()初始值不是空字串,設定為修改中的todo內容
    const [content, setContent] = useState(todo.content);

    //按下按鈕增加內容
    const handleSubmit = (e) => {
        //取消事件預設行為
        e.preventDefault();
        editTodo(todo.id,content)
    }

    return (
        // 建立表單
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text"
                // seState 通常需要搭配 value 和 onChange，特別是在處理表單輸入時。 
                // 這是因為在 React 中，表單輸入框通常設為「受控元件」，以便 React 完全掌控其值。
                // value一定要搭配onChange 
                // value    => 用於將表單元素與狀態同步，使其成為受控元件。
                // onChange => 事件處理函式，用於處理輸入框的 onChange 事件（即使用者改變輸入內容時觸發）。
                // e.target.value => 是輸入框目前的值（使用者輸入的內容）。
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
        </form>
    )
}
export default EditForm