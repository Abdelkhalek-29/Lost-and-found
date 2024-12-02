/* import React from 'react';
import Posts from './Posts';
import me from './me.jpg';

function PostData() {
  // Define an array of post data
  const postsData = [
    {
      avatarSrc: me,
      userName: 'Abdalrhman Ahmed',
      postTime: 'Just now',
      postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      postImgSrc: me 
    },
    {
      avatarSrc: me,
      userName: 'John Doe',
      postTime: '2 hours ago',
      postText: 'Another Lorem Ipsum post.',
      postImgSrc: me
    }
  ];

  return (
    <div>
      {postsData.map((postData, index) => (
        <Posts key={index} postData={postData} />
      ))}
    </div>
  ); 
  

}

export default PostData;
 */
//last updata
/* import React, { useRef, useEffect, useState } from 'react';
import Posts from './Posts';
import me from './me.jpg';

function PostData() {
  const [postsData, setPostsData] = useState([]);

  
  const initialPostsData = [
    {
      avatarSrc: me,
      userName: 'Abdalrhman Ahmed',
      postTime: 'Just now',
      postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      postImgSrc: me 
    },
    {
      avatarSrc: me,
      userName: 'Elm3alem Zaky',
      postTime: '2 hours ago',
      postText: 'Another Lorem Ipsum post.',
      postImgSrc: me
    },
    {
      avatarSrc: me,
      userName: 'John Doe',
      postTime: '5 hours ago',
      postText: 'Another Lorem Ipsum post.',
      postImgSrc: me
    },
    
  ];

  const postRef = useRef(null);

  useEffect(() => {
    setPostsData(initialPostsData);
  }, []);

  useEffect(() => {
    if (postRef.current) {
      const height = postRef.current.clientHeight;
      const top = postRef.current.offsetTop;
      postRef.current.style.top = `${top + height + 20}px`; 
    }
  }, [postsData]);

  return (
    <div>
      {postsData.map((postData, index) => (
        <div key={index} ref={index === postsData.length - 1 ? postRef : null}>
          <Posts postData={postData} />
        </div>
      ))}
    </div>
  );
}

export default PostData;
 

 */