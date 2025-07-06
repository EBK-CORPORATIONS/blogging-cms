// blog.js
import fm from 'front-matter';
import { marked } from 'marked';

export async function renderPosts() {
  const container = document.getElementById('posts');
  const loading = document.getElementById('loading');

  try {
    loading.textContent = 'Loading posts...';

    // Fetch Markdown files from content/posts (handled by your build process or server)
    // For Netlify, ensure content/posts is included in your build
    const response = await fetch('/content/posts'); // Adjust based on your setup
    const files = await response.json(); // Assume server returns list of Markdown files

    const posts = await Promise.all(
      files.map(async (file) => {
        const res = await fetch(`/content/posts/${file}`);
        const text = await res.text();
        const { attributes } = fm(text); // Parse front-matter
        return attributes; // { emoji, message, image, link }
      })
    );

    container.innerHTML = '';
    loading.style.display = 'none';

    if (posts.length === 0) {
      container.innerHTML = '<p>No posts found.</p>';
      return;
    }

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <div class="post-！

emoji">${post.emoji || '💬'}</div>
        <p class="post-message">${marked(post.message || '')}</p>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image" />` : ''}
        <a href="${post.link || '#'}" target="_blank" class="post-link">Read More</a>
      `;
      container.appendChild(div);
    });
  } catch (error) {
    loading.textContent = 'Error loading posts. Please try again later.';
    console.error('Render error:', error);
  }
}

renderPosts();
