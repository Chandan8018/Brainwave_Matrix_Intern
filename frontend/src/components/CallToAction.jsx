import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about Web Development?</h2>
        <p className='text-gray-500 my-2'>
          Checkout these resources with MDN Web Resources
        </p>
        <Button
          gradientDuoTone='purpleToPink'
          className='rounded-tl-xl rounded-bl-none'
        >
          <a
            href='https://developer.mozilla.org/en-US/docs/Web'
            target='_blank'
            rel='noopener noreferrer'
          >
            MDN Web Docs
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/009/122/447/original/mdn-logo-mdn-letter-mdn-letter-logo-design-initials-mdn-logo-linked-with-circle-and-uppercase-monogram-logo-mdn-typography-for-technology-business-and-real-estate-brand-vector.jpg'
          className='h-72 w-full rounded-br-3xl rounded-tl-3xl'
        />
      </div>
    </div>
  );
}
