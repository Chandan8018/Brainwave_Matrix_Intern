import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function PostCard({ post }) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
        <div className='p-3 flex flex-col gap-2'>
          <CardItem
            translateZ='50'
            className='text-xl font-bold text-neutral-600 dark:text-white'
          >
            {post.title}
          </CardItem>
          <CardItem
            as='p'
            translateZ='60'
            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
          >
            {post.category}
          </CardItem>
        </div>
        <CardItem translateZ='100' className='w-full mt-4' as='div'>
          <img
            src={post.image}
            alt='post cover'
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
          />
        </CardItem>

        <div className='flex justify-between items-center mt-20'></div>
        <CardItem translateZ={40} as={Link} to={`/post/${post.slug}`}>
          <HoverBorderGradient
            containerClassName='rounded-lg'
            as='button'
            className=' flex items-center space-x-2 w-full'
          >
            <div className='flex justify-center items-center w-full'>
              Read article →
            </div>
          </HoverBorderGradient>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
