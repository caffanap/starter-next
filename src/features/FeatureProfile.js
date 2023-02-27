import ButtonSolid from "@/components/Button/Solid";
import InputText from "@/components/Input/Text";
import { exposeSetName } from "@/store/slice/userSlice";
import style from "@/styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function FeatureProfile() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    function setName(val) {
        dispatch(exposeSetName(val))
    }

    return (
        <>
            <div className={style.textProfile}>
                Feature Profile! { user.name }
            </div>
            <div className="flex flex-col space-y-4">
                <InputText change={(e) => setName(e.target.value)} placeholder="Username" />
                <ButtonSolid className="bg-primary-light text-primary-dark" text="Press Me" click={() => alert("Button Pressed!")} />
            </div>
        </>
    )
}