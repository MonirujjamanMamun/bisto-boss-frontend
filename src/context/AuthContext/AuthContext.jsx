import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// create a context
export const AuthContext = createContext(null);

// use context
// export const useAuth = () => useContext(createAuthContext);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState([]);
  console.log('user from authcontext', user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading();
      if (currentUser) {
        axiosSecure
          .get('/userrole')
          .then((res) => {
            setUser((pre) => ({
              ...pre,
              ...res.data,
            }));
            setLoading(false);
          })
          .catch((err) => console.log('userrole error', err));
      }
    });
    return () => unsubscribe();
  }, [axiosSecure]);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    registerUser,
    login,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
