import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Kipkemoi Elvis</h3>
                        <p>Software Engineer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Professional Software and DevOps engineer
</p>
                    <p>Committed to leveraging cutting-edge Tech.

</p>

                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.linkedin.com/in/kipkemoi-elvis-aa3548209"} title={"Elvis"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={" https://twitter.com/Dev_Rono"}  title={"Elvis"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/kipkemoi-elvis-aa3548209"}  title={"Elvis"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/dynastyelvis/"}  title={"Elvis"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://elvis-portfolio-blue.vercel.app/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;