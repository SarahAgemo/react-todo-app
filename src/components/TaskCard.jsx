import "./TaskCard.css"
import Tag from './Tag.jsx'
import deleteIcon from '../assets/trash.png'

const TaskCard = () => {
  return (
    <article className="task_card">
        <p className="task_text">This is sample Text</p>

        <div className="task_card_bottom_line">
            <div className="task_card_tags">
              <Tag tagName="HTML" />
              <Tag tagName="CSS" />
            </div>
            <div className="task_delete">
               <img src={deleteIcon} 
               className="delete_icon" alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
