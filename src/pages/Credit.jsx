import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "../components";
import freepikWebsite from "../assets/freepikWebsite.png"

function Credit () {
    const [credit, setCredit] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    console.log(slug)
    useEffect(() => {
        if (slug) {
            if (slug == "chai-aur-code")
                setCredit({
                    src: "https://www.youtube-nocookie.com/embed/videoseries?si=qy1uVIeMEyObYiOB&amp;start=1&amp;list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
                    title: "Chai and React",
                    description: "Hey there! I just followed this awesome video series and I can't recommend it enough! This series is all about diving into React with a fun, project-based approach that makes learning super engaging. Forget boring lectures; build real projects that help you grasp concepts like state management and hooks in no time. If you want to level up your web development skills and get hands-on with React, this is the perfect place to start!",
                    isVideo: true
                });
            else if (slug == "javascript-mastery")
                setCredit({
                    src: "https://www.youtube-nocookie.com/embed/kt0FrkQgw8w?si=AETYSAiuLpPZEd4x&amp;start=1",
                    title: "Javascript Mastery",
                    description: "Go-to YouTube channel for leveling up coding skills! With a ton of hands-on tutorials and real-world projects, this channel makes learning JavaScript super fun and engaging. Whether you’re a newbie or looking to sharpen your full-stack game, they’ve got you covered with crash courses and in-depth guides. From building apps to mastering advanced concepts, JavaScript Mastery is all about helping you become a confident developer. Dive in and start creating cool stuff today!",
                    isVideo: true
            });
            else if (slug == "freepik")
                setCredit({
                    href:"https://www.freepik.com/",
                    src: freepikWebsite,
                    title: "Freepik",
                    description: "Freepik is go-to spot for all things design! This awesome platform offers a treasure trove of high-quality graphic resources like vectors, photos, and icons. Plus, they’ve got cool tools like AI image generators and online editors to make life easier. Dive in and start designing!",
                    isVideo: false
            });
            else navigate("/");
        } else navigate("/");
    }, [slug, navigate]);
    return credit ? (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-4">
                        {credit.isVideo ? <iframe 
                                            width="100%" 
                                            height="315" 
                                            src={credit.src} 
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerpolicy="strict-origin-when-cross-origin" 
                                            allowfullscreen>
                                        </iframe>
                        : <div 
                            width="80%" 
                            height="315">
                                <a href={credit.href} title="Freepik Website" target="_blank" rel="noopener noreferrer">
                                 <img src={credit.src} alt="Freepik website Landing Page Image" />   
                                </a>
                        </div>
                        }
                    </div>
                    <div className="flex-1 p-4 font-playfairDisplay text-white text-left">
                        <h2 className="text-2xl  font-semibold mb-8">{credit.title}</h2>
                        <div className="font-merriWeather tracking-normal lg:tracking-widest">{credit.description}</div>
                    </div>
                </div>
            </Container>
        </div>
    ): null
   }

export default Credit