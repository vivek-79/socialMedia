


import { cookies } from "next/headers";
import './profile.css'
import Button from "@/comps/button";

export default async function ProfilePage() {

    const cookie = cookies()
    const accessToken = cookie.get('accessToken')
    console.log(accessToken)

    let data;
    try {
        const result = await fetch('http://localhost:3000/api/getUser', {
            headers: {
                cookie: `accessToken=${accessToken.value}`
            }
        })
        data = await result.json()
        console.log(data)
    } catch (error) {

    }
    return (
        <div className='profile-page'>
            <div className="basic-info">
                <p>{data?.user.fullName}</p>
                <div className="over-lay">
                    <div className="pic-name">
                        <div className="profile-pic"></div>
                        <p>{data?.user.userName}</p>
                    </div>
                    <Button link={`/profile/${data?.user._id}`} clas={'fav-btn button'} text={'Edit profile'}/>
                    <Button link={'/profile/share'} clas={'button'} text={'Share profile'}></Button>
                    <i className="ri-user-add-line"></i>
                    <section >
                        <div className="social-reach">
                            <p>Posts</p>
                            <p>0</p>
                        </div>
                        <div  className="social-reach">
                            <p>Followers</p>
                            <p>0</p>
                        </div>
                        <div  className="social-reach">
                            <p>Following</p>
                            <p>0</p>
                        </div>
                    </section>
                </div>
            </div>
            <nav className="profile-nav">
                <p>Posts</p>
            </nav>
        </div>
    );
}
