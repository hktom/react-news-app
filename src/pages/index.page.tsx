import Cookies from "js-cookie";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    if (Cookies.get("token")) {
      window.location.href = "/me";
    } else {
      window.location.href = "/auth/login";
    }
  }, []);
  return <div></div>;
}
