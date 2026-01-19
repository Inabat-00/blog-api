const Blog = require("../models/blog");

// CREATE
exports.createBlog = async (req,res)=>{
  try{
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  }catch(err){
    res.status(400).json({error: err.message});
  }
};

// READ ALL
exports.getBlogs = async(req,res)=>{
  const blogs = await Blog.find();
  res.json(blogs);
};

// READ ONE
exports.getBlog = async(req,res)=>{
  try{
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({msg:"Not found"});
    res.json(blog);
  }catch(err){
    res.status(400).json({msg:"Invalid ID"});
  }
};

// UPDATE
exports.updateBlog = async(req,res)=>{
  try{
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(blog);
  }catch(err){
    res.status(400).json({msg:"Error updating"});
  }
};

// DELETE
exports.deleteBlog = async(req,res)=>{
  try{
    await Blog.findByIdAndDelete(req.params.id);
    res.json({msg:"Deleted"});
  }catch(err){
    res.status(400).json({msg:"Error deleting"});
  }
};
