import Actions from "./Actions";
import Avatar from "./Avatar";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      <Avatar image={user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User name={user.name} />
            <User handle={user.handle} />
          </span>
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message}/>
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
