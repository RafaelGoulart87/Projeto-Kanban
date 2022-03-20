import "./PostIt.css";
import Done from "./done.png";
import InProgress from "./inProgress.png";
import Review from "./review.png";
import ToDo from "./toDo.png";
const images = { ToDo, InProgress, Done, Review }

const PostIt = (props) => {
  const {
    children,
    titleText = "To Do",
    titleColor = "white",
    cardColor = "blue",
    icon = "To Do",
  } = props;

  return (
    <div className={`card-${cardColor}`}>
      <div className="img-title">
        <img src={images[icon]} alt="icon" />
        <h1 className={`cardOutside-title-${titleColor}`}> {titleText}</h1>
      </div>
      {children}
    </div>
  )
}

export default PostIt;
