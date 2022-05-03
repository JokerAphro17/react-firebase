import React from "react";

function NewPost() {
  return (
    <div className="new-post-modal">
      <form>
        <textarea placeholder="...mesage"></textarea>
        <input type="submit" value="envoyer" />
      </form>
    </div>
  );
}

export default NewPost;
