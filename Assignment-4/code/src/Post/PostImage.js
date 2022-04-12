const PostImage = ({ config }) => {
  const relativePath = `../Images/${config.PostImage}`;
  return (
    <div className="PostImage">
      <span>
        <img src={relativePath} alt="Pictures"></img>
      </span>
    </div>
  );
};

export default PostImage;
