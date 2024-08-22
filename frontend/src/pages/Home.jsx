import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import SparklesCore from "../components/ui/sparkles";
import { useSelector } from "react-redux";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <div className='h-[8rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md'>
          <h1 className='md:text-3xl text-2xl lg:text-5xl font-bold text-center text-black dark:text-white relative z-20'>
            Welcome to my Blog
          </h1>
          <div className='w-[40rem] h-40 relative'>
            {/* Gradients */}
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
            <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
            <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

            {/* Core component */}
            <SparklesCore
              background='transparent'
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className='w-96 h-10 ml-32'
              particleColor={theme === "dark" ? "#FFFFFF" : "#00050C"}
            />
          </div>
        </div>
        <p className='text-gray-500 text-lg sm:text-sm font-semibold'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, programming languages, and
          Others.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='h-[8rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md'>
              <h1 className='md:text-4xl text-2xl lg:text-7xl font-bold text-center text-black dark:text-white relative z-20'>
                Recent Posts
              </h1>
              <div className='w-[40rem] h-40 relative'>
                {/* Gradients */}
                <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
                <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
                <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
                <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

                {/* Core component */}
                <SparklesCore
                  background='transparent'
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className='w-96 h-10 ml-32'
                  particleColor={theme === "dark" ? "#FFFFFF" : "#070801"}
                />
              </div>
            </div>
            <div className='flex flex-wrap gap-14'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
