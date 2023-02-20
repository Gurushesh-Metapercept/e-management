import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

class EmpDataServices {
  login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("login successfull..");
      })
      .catch((err) => {
        console.log(err.message);
        return err.message;
      });
  };

  register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        console.log(credential);
      })
      .catch((err) => {
        return err.message;
      });
  };

  logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default new EmpDataServices();
