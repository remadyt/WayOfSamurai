import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";



type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descBlock}>
                <img src={props.profile.photos?.large}/>
                ava + description
            </div>
            <ProfileStatus />
        </div>

    )
}

export default ProfileInfo;
