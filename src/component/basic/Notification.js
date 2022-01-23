import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../redux/actions";

export default function Notification(props) {
  const isNotificationView = useSelector((state) => state.isNotificationView);
  const dispatch = useDispatch();
  function closeNotification() {
    return dispatch(setNotification(false));
  }

  return (
    <div
      className={`notification ${
        props.type === "success" ? "bg-success" : ""
      } ${isNotificationView ? "show" : ""}`}
    >
      <div className="content p-3">
        <div className="headline mb-2">
          <strong>{props.title}</strong>
        </div>
        <div className="content">
          <span>{props.content}</span>
        </div>
      </div>
      <span className="close" onClick={closeNotification}>×</span>
    </div>
  );
}
