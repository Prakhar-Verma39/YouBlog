import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const PostCard= React.memo(({$id, title, featuredImage, index=0}) => {

  return (
    <Link to={`/post/${$id}`}>
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full p-[1px] rounded-lg'
      >
        <div className='w-full violet-gradient border rounded-lg p-2'>
            <div className='w-full justify-center mb-2'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <div
            className='text-xl font-playfairDisplay text-white pb-2'
            >{title}</div>
        </div>
    </motion.div>
    </Tilt>
    </Link>
  )
})


export default PostCard