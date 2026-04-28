import { routesPath } from "@/routes/routesPath";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const { LOGIN } = routesPath.AUTH;

export default function Authenticated() {
  const navigate = useNavigate();
  const accessToken = Cookies.get("token");

  useEffect(() => {
    if (!accessToken || accessToken === "undefined") {
      navigate(LOGIN, { replace: true });
    }
  }, [accessToken]);

  return <Outlet />;
}
