import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // //removing because we will now delete from the db.json through API calls (GET, Delete etc)
  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id)
  //     setBlogs(newBlogs)

  // }

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://Som11.github.io/Blogging");

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
      {/* <BlogList blogs = { blogs.filter((blog) => blog.author === 'mario') }  title = "Mario's blogs" />        */}
    </div>
  );
};

export default Home;
