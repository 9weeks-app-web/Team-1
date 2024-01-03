import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "store/user";
import { IUser } from "types/user";

const useUser = () => {
  const [user, setUser] = useRecoilState<IUser | null>(userState);

  const refetchUser = () => {
    const displayName = localStorage.getItem("displayName");
    const email = localStorage.getItem("email");

    console.log(`refetchUser ${displayName} ${email}`);

    if (displayName && email) {
      const newUser: IUser = { displayName, email };
      setUser(newUser);
    }
  };

  useEffect(() => {
    refetchUser();
  }, []);

  return { user, refetchUser };
};

export default useUser;
