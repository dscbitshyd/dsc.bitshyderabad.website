function AboutUsItem({ icon, title, content }) {
  return (
    <div className="flex">
      <div className="border mx-auto max-w-xs flex-col items-start bg-white dark:bg-black shadow-lg rounded-lg py-4 px-8 my-10 transition duration-500 hover:scale-110">
        <div className="flex justify-center -mt-16">{icon}</div>
        <h1 className="text-gray-800 dark:text-white text-2xl font-semibold">
          {title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-white">{content}</p>
      </div>
    </div>
  );
}
export default AboutUsItem;
