import React, {useEffect, useState} from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import firstPage from "../assets/firstPage.jpg";

function Home () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
   if (posts.length === 0) {
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap justify-center gap-x-32">
                    <div className="font-extralight text-QuaternaryColor flex flex-col items-stretch">
                        <p className="text-8xl italic">
                            Share
                        </p>
                        <p className="text-3xl font-normal">what's</p> 
                        <p className="text-4xl font-light">in your mind!</p>
                        
                    </div>
                    <img src={firstPage} alt="first page image"
                className='rounded-xl h-8 w-8 md:h-64 md:w-64'/>
                    <div className="p-2 w-full">
                        <h2 className="text-2xl hover:text-QuinaryColor font-thin text-QuaternaryColor">
                            Login to read posts
                        </h2>
                    </div>
                </div>
            </Container>
        </div>
    )
   }
   return (
    <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
   )
}

export default Home