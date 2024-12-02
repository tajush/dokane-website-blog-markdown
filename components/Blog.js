
import Link from 'next/link';

const Blog = ({ allPostsData }) => {
 

    return (
        <div className='pt-16'>
            <div className='max-w-7xl px-4 m-auto pt-10'>
                <h2 itemProp="headline" className="font-poppins text-center lg:text-[40px] leading-[60px] font-semibold text-2xl">Blog Post</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5 mt-14">
                    {allPostsData.map(({ slug, title, postDate, img, tags,chips }) => (
                     
                        <div key={slug} className="lg:mb-10 mb-7">
                          
                            <div className="shine rounded-lg">
                                <img itemProp="image" src={img} alt="card icon" />
                            </div>
                            <div
                                className="border border-orange hover:border-white border-t-0 rounded-bl-3xl rounded-br-3xl hover:bg-white hover:shadow-[0_8px_16px_rgba(255,183,183,0.60)] transition-all cursor-pointer lg:p-6 p-4 min-h-[200px] blogs-card-content">
                                <div className="flex justify-between items-center mb-2.5">
                                    <p className="text-gray-500 text-sm">{postDate}</p>
                                    <div className="flex items-center">
                                        <div className="w-5 h-[1px] bg-gray-500"></div>
                                        <p className="text-gray-500 text-sm ml-2">{tags}</p>
                                    </div>
                                </div>
                                <h4 className="lg:text-xl text-lg text-dark-black font-medium leading-[30px] capitalize"  key={slug}>
                                    <Link href={`/posts/${slug}`}>{title}</Link>
                                </h4>
                                 <div className="flex mt-8">
                                   
                                    {chips?.map((chip, index) =>(<div key={index} className="chips px-2.5 py-1 text-sm font-poppins mr-2">{chip}</div>))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
