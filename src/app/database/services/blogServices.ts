import Blog from "../entity/blog";

/**
 * @author Ntavigwa Bashombe
 */
class BlogServices {
  /**
   * Find all blogs
   * @author Ntavigwa Bashombe
   * @param {}
   * @returns Promise
   */
  findBlogs = async (): Promise<any | null> => {
    const result = await Blog.findAndCount();

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Find one blog
   * @author Ntavigwa Bashombe
   * @param {}
   * @returns Promise
   */
  findOneBlog = async (blog_id: number): Promise<any | null> => {
    const result = await Blog.findOne({ 
        where: { 
          blog_id: blog_id
        } 
      });;

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Create a new blog
   * @author Ntavigwa Bashombe
   * @param data
   * @returns Promise
   */
  createBlog = async (data: object): Promise<any | null> => {
    const result = await Blog.insert(data);

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Update a blog by Id
   * @author Ntavigwa Bashombe
   * @param data
   * @returns Promise
   */
  updateBlog = async (blog_id: number, data: object): Promise<any | null> => {
    const result = await Blog.update(blog_id, data);

    if (!result) {
      return null;
    }
    return result;
  };

  /**
   * Delete a blog by Id
   * @author Ntavigwa Bashombe
   * @param data
   * @returns Promise
   */
  deleteBlog = async (blog_id: number): Promise<any | null> => {
    const result = await Blog.delete({ blog_id });

    if (!result) {
      return null;
    }
    return result;
  };
}

export default BlogServices;