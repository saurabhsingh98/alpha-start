
import React, { useEffect, useState } from 'react';
import { getApiHandler } from '../../helpers/apihandler.js';
import { alpha_api } from '../../constants/api.js';

export const Feeds = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // For now, fetch all posts (without user filtering)
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
     
        const response = await getApiHandler(alpha_api.GET_POSTS(localStorage.getItem('user_id')));

        console.log("-----RESPONSE---", response)
        setPosts(response || []);
      } catch (err) {
        setError('Unable to fetch posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-gray-600">Loading feeds...</div>
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>
  }

  if (!posts.length) {
    return <div className="p-4 text-center text-gray-400">No posts to display.</div>
  }

  console.log("-----POSTS---", posts)
  return (
    <div className="max-w-2xl mx-auto my-8">
      {posts.map((post) => (
        <div
          key={post._id || post.id}
          className="bg-white border border-gray-200 rounded-lg mb-6 shadow-sm p-6"
        >
          <div className="mb-2">
            <span className="font-bold text-lg">{post.title}</span>
          </div>
          <div className="mb-3 text-gray-700 whitespace-pre-line">{post.content}</div>
          {post.imageUrl && (
            <div className="mb-3">
              <img
                src={post.imageUrl}
                alt="feed media"
                className="w-full max-h-72 object-cover rounded"
              />
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-500">
              {post.likes.length} likes
            </div>
            <div className="text-xs text-gray-500">
              {post.comments.length} comments
            </div>
            <div className="align-right text-xs text-gray-500">
              {post.impressions} impressions
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Posted {post.createdAt
              ? new Date(post.createdAt).toLocaleString()
              : ''}
          </div>
        </div>
      ))}
    </div>
  );
};
