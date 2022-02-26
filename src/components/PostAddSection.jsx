import { Image, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
import "./PostAddSection.css"

const PostAddSection = (props) => {
const [pictureSrc, setPictureSrc] = useState("https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png")

    useEffect(() => {
        fetchData()
    }, [])
    
    
    const fetchData = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0YWE0ZTA0NDhiNDAwMTUxMTY4OTIiLCJpYXQiOjE2NDU1MjE0ODcsImV4cCI6MTY0NjczMTA4N30.4JUxJJE6E2G8CkzqkOSSRICgdSveBWxuq1Ae6PFpsbs'
                }
            })
            if (response.ok) {
                let data = await response.json()
                setPictureSrc(data.image)

    
            } else {
                console.log('error')

            }
        } catch (error) {
            console.log(error)
        
        }
    }
    
    return(
    <Container id="postAddSection">
    <div className="d-flex">
        <Link to="/in/me"><Image alt="profile-image" src={pictureSrc}></Image></Link>
        <Button id="startPostButton" onClick={() => {props.setModal(true)}}> Start a post</Button>
    </div>
    <div className="d-flex justify-content-between mb-n3 mt-3">
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#70b5f9"}} className="bi bi-image"></i> Photo</Button>
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#7fc15e"}} className="bi bi-play-btn-fill"></i>Video</Button>
        <Button className="post-buttons d-flex align-items-center" ><i style={{color: "#e7a33e"}} className="bi bi-calendar2-date"></i>Event</Button>
        <Button className="post-buttons d-flex align-items-center"><i style={{color: "#fc9295"}} className="bi bi-newspaper"></i> Write Article</Button>
    </div>
    </Container>
    )
}

export default PostAddSection