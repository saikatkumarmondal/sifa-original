import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router";
import axios from "axios";
import Loading from "../components/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token"); // or from cookie
        if (!token) {
          setIsAuth(false);
          return;
        }

        const res = await axios.get("http://localhost:7777/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data) setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <Loading />; // optional spinner

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/forbidden" />
      }
    />
  );
};

export default PrivateRoute;
