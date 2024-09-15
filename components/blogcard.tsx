// "use client"
import Image from "next/image";
const BlogCard = ({ blog }) => {
  const {
    title,
    description,
    author,
    category,
    views,
    coment,
    createdAt,
    imageUrl,
  } = blog;

  return (
    <div className="max-w-md md:w-200 mx-auto  bg-white-800 shadow-md rounded-lg overflow-hidden mb-6">
      <div className="p-4 w-300 h-200 ">
        {
          <Image
            src={imageUrl}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
            className="object-contain rounded-md mb-4"
          />
        }
        <p className="text-sm  text-blue-500">{category}</p>

        <div className="flex">
          {/* <Image src="/profile.jpeg" width={30} height={30} className="rounded-full mr-2 " alt={"profile"}/> */}
          <h2 className="text-2xl font-bold text-gray-900 ">{title}</h2>
        </div>

        <p className="text-gray-700 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500 ">
            By {author} - {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500 ">Views: {views}</p>
          <p className="text-sm text-gray-500 ">Comments: {coment}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
