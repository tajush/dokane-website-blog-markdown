import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { readTimeCount } from '../../utils/blogReadTimeCount';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;
    const [blog, setBlog] = useState([]);
    const [readingTime,setReadingTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/data.json`);
                const data = await res.json();
                const blogData = data.find(blog => blog.id === id);
                setBlog(blogData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(()=>{
        const readTimeData = readTimeCount("Content"+blog?.article);
       setReadingTime(readTimeData);
    },[blog])


    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="lg:pt-28 py-14">
            <div className="container max-w-7xl m-auto px-4">
                <div className="max-w-[950px] mx-auto">
                    <div className="lg:mb-0 mb-10">
                        <div className="bg-white lg:py-12 py-8 shadow-[0_2px_8px_10px_#edf8f8] rounded-[20px]">
                            <div className="lg:px-6 px-4 lg:mb-12 mb-8">
                                <h2 className="lg:text-[32px] text-2xl text-dark-black font-medium font-jost mb-5">{blog.title}
                                </h2>
                                {/* Post times */}
                                <div className="flex lg:gap-x-5 gap-x-2">
                                    {blog.postTimes?.map((item, index) => (
                                        <div key={index} className="flex items-center">
                                            <i className={item.icon} aria-hidden="true"></i>
                                            <p className="text-sm text-gray font-poppins ml-2">{item.text}</p>
                                        </div>
                                    ))}
                                    <div className="flex items-center">
                                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                                            <p className="text-sm text-gray font-poppins ml-2">{readingTime} min read</p>
                                        </div>
                                </div>
                            </div>

                            <div className="lg:pb-12 pb-8 lg:px-6 px-4">
                                <img className='w-full' src={blog.detailsImg} alt="blog details img1" />
                                <div className="lg:mt-12 mt-8 main-content">
                                    <p className='text-base text-gray-500 font-poppins'>{blog.article}</p>
                                </div>
                            </div>

                            <div className="lg:pt-[38px] pt-6 border-t border-[#E9E9E9] px-6">
                                <div className="lg:flex justify-between">
                                    <div className="flex items-center lg:mb-0 mb-5">
                                        <h4 className="text-base text-[#6A797C] font-semibold font-jost mr-4">Tags: </h4>
                                        <div className="flex">
                                            {blog.chips?.map((chip, index) => (
                                                <div key={index} className="chips px-2.5 py-1 text-sm font-poppins mr-2">{chip}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <h4 className="text-base text-[#6A797C] font-semibold font-jost mr-4">Share: </h4>
                                        <div className="flex gap-x-4">
                                            {blog.shares?.map((item, index) => (
                                                <Link key={index} target='_blank' href={item.link}>
                                                    <div
                                                        
                                                        className="w-[40px] h-[40px] border border-[#B4BEC1] rounded-full flex justify-center items-center bg-white hover:bg-black text-black hover:text-white transition-all">

                                                        <i className={item.icon} aria-hidden="true"></i>

                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
