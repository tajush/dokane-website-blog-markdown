import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./BlogDetails.module.css";
import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { readTimeCount } from '../../utils/blogReadTimeCount';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  
  const readingTime = readTimeCount("Content" + postData.article);

  return {
    props: {
      postData,
      readingTime,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ postData, readingTime }) {
  
  if (!postData) return <div>Loading...</div>;

  return (
    <div className={`overflow-x-hidden lg:pt-28 py-14 ${styles.blogDetails__content}`}>
      <div className="container max-w-7xl m-auto px-4">
        <div className="max-w-[950px] mx-auto">
          <div className="lg:mb-0 mb-10">
            <div className="bg-white lg:py-12 py-8 shadow-[0_2px_8px_10px_#edf8f8] rounded-[20px]">
              <div className="lg:px-6 px-4 lg:mb-12 mb-8">
                <h2 className=" text-2xl text-dark-black font-medium font-jost ">
                <em className='font-bold not-italic lg:text-[32px]'>{postData.title}</em>  
                </h2>

                {/* Post times */}
                <div className="flex lg:gap-x-5 gap-x-2">
                  {postData.postTimes?.map((item, index) => (
                    
                    <div key={index} className="flex items-center">
                      <i className={item.icon} aria-hidden="true"></i>
                      <p className="text-sm text-gray font-poppins ml-2">{item.text}</p>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <i className="fa-regular fa-clock" aria-hidden="true"></i>
                    <p className="text-sm text-gray font-poppins ml-2">{readingTime} min read</p>
                  </div>
                </div>
              </div>

              <div className="lg:pb-12 pb-8 lg:px-6 px-4 ">
                {/* Thumbnail Image */}
                {postData.thumbnail && (
                  <Image 
                    src={postData.thumbnail}
                    alt="blog details img"
                    width={950}
                    height={475}
                    className="w-full rounded-xl"
                  />
                )}
                <div className="lg:mt-12 mt-8 main-content">
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                {/* {postData.img && (
        <Image
          src={postData.img}
          alt={postData.title}
         width={800}
         height={400}
        />
      )} */}
                  {/* <p className="text-base text-gray-500 font-poppins">{postData.article}</p> */}
                </div>
              </div>

              <div className="lg:pt-[38px] pt-6 border-t border-[#E9E9E9] px-6">
                <div className="lg:flex justify-between">
                  <div className="flex items-center lg:mb-0 mb-5">
                    <h4 className="text-base text-[#6A797C] font-semibold font-jost mr-4">Tags: </h4>
                    <div className="flex">
                      {postData.chips?.map((chip, index) => (
                        <div key={index} className="chips px-2.5 py-1 text-sm font-poppins mr-2">{chip}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    {/* <h4 className="text-base text-[#6A797C] font-semibold font-jost mr-4">Share: </h4> */}
                    <div className="flex gap-x-4">
                      {postData.shares?.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank">
                          <div className="w-[40px] h-[40px] border border-[#B4BEC1] rounded-full flex justify-center items-center bg-white hover:bg-black text-black hover:text-white transition-all">
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
}

