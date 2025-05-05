import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000", {}, { withCredentials: true });
      console.log(data);
      if (data.userData && data.userData._id) {
        setUser(data.userData);
        
      } else {
      
        setUser(null);
      }
    } catch (err) {
        console.log(err);
        
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser().then(()=>{
        console.log("Cookies after login:", document.cookies)    
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
