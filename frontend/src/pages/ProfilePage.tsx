import { Bussines } from "../components/Bussines";
import Header from "../components/Header";

type Props = {
    currentUser: any;
    signOut: () => void;
  };
export function ProfilePage({currentUser, signOut}:Props){
    return(
        <>
        <Bussines/>
        <Header currentUser={currentUser} signOut={signOut}/>
        </>
    )
}