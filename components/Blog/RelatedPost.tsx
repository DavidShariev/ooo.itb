import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  date,
  time,
}: {
  image: string;
  slug: string;
  title: string;
  date: string;
  time: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative flex h-[60px] w-[70px] items-center justify-center overflow-hidden rounded-md text-center font-black sm:h-[75px] sm:w-[85px]">
          {date}
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color">{time}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
