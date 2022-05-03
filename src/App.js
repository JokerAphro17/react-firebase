import { React, useState } from "react";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import NewPost from "./components/NewPost";
function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  const handlerOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button>
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                onClick={() => handlerOut()}
              ></i>
            </button>
          </div>
        )}

        {user ? <NewPost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
}

export default App;
