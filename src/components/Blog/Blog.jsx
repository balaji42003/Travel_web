import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Blog.css';

// Import all images
import blogImage1 from '../../assets/munnar.png';
import blogImage2 from '../../assets/ooty.png';
import blogImage3 from '../../assets/kashmer.png';
import natureImg1 from '../../assets/nature_trip_1.jpg';
import natureImg2 from '../../assets/nature_trip_3.jpg';
import natureImg3 from '../../assets/nature_travel_6.jpg';
import natureImg4 from '../../assets/nature_travel_7.jpg';
import natureImg5 from '../../assets/nature_travel_8.jpg';
import natureImg6 from '../../assets/nature_travel_9.jpg';

// Import author images
import authorCamille from '../../assets/Camille.jpg';
import authorJaylen from '../../assets/Jaylen.jpg';
import authorMykel from '../../assets/Mykel.jpeg';
import authorEmma from '../../assets/Emma Wilson.jpeg';
import authorMike from '../../assets/mike anderson.jpg';
import authorSarah from '../../assets/sarah johnson.jpeg';

const Blog = () => {
  const [showAll, setShowAll] = useState(false);

  const allBlogPosts = [
    {
      image: blogImage1,
      category: "Nature Escape",
      date: "May 3, 2025",
      title: "Magical Munnar: Tea Gardens & Misty Mountains",
      excerpt: "Discover the enchanting beauty of Munnar's endless tea plantations and misty mountain peaks...",
      author: {
        name: "Sarah Johnson",
        avatar: authorSarah,
        role: "Travel Expert"
      },
      stats: { readTime: "5 min", likes: "2.3k", comments: "48" }
    },
    {
      image: blogImage2,
      category: "Hill Station",
      date: "May 2, 2025",
      title: "Ooty: Queen of Hill Stations",
      excerpt: "Experience the colonial charm and natural beauty of Ooty's rolling hills and botanical gardens...",
      author: {
        name: "Camille Laurent",
        avatar: authorCamille,
        role: "Nature Guide"
      },
      stats: { readTime: "6 min", likes: "1.8k", comments: "36" }
    },
    {
      image: blogImage3,
      category: "Adventure",
      date: "May 1, 2025",
      title: "Kashmir: Paradise on Earth",
      excerpt: "Journey through the stunning valleys and pristine lakes of Kashmir's breathtaking landscape...",
      author: {
        name: "Mykel Ross",
        avatar: authorMykel,
        role: "Adventure Guide"
      },
      stats: { readTime: "7 min", likes: "3.1k", comments: "52" }
    },
    {
      image: natureImg1,
      category: "Wildlife",
      date: "April 30, 2025",
      title: "Hidden Trails of the Western Ghats",
      excerpt: "Explore the unexplored paths through India's magnificent Western Ghats...",
      author: {
        name: "Jaylen Carter",
        avatar: authorJaylen,
        role: "Wildlife Expert"
      },
      stats: { readTime: "8 min", likes: "2.7k", comments: "45" }
    },
    {
      image: natureImg2,
      category: "Culture",
      date: "April 29, 2025",
      title: "Living with Local Tribes",
      excerpt: "An immersive experience into the rich cultural heritage of indigenous communities...",
      author: {
        name: "Emma Wilson",
        avatar: authorEmma,
        role: "Cultural Guide"
      },
      stats: { readTime: "6 min", likes: "2.1k", comments: "39" }
    },
    {
      image: natureImg3,
      category: "Photography",
      date: "April 28, 2025",
      title: "Capturing the Perfect Sunset",
      excerpt: "Tips and techniques for photographing nature's most beautiful moment...",
      author: {
        name: "Mike Anderson",
        avatar: authorMike,
        role: "Photography Expert"
      },
      stats: { readTime: "5 min", likes: "1.9k", comments: "41" }
    },
    {
      image: natureImg4,
      category: "Adventure",
      date: "April 27, 2025",
      title: "Mountain Hiking Adventures",
      excerpt: "Experience the thrill of conquering majestic peaks and discovering hidden valleys...",
      author: {
        name: "Sarah Johnson",
        avatar: authorSarah,
        role: "Adventure Guide"
      },
      stats: { readTime: "7 min", likes: "2.5k", comments: "43" }
    },
    {
      image: natureImg5,
      category: "Nature",
      date: "April 26, 2025",
      title: "Tropical Paradise Escapes",
      excerpt: "Discover secluded beaches and pristine coastlines in exotic locations...",
      author: {
        name: "Camille Laurent",
        avatar: authorCamille,
        role: "Travel Expert"
      },
      stats: { readTime: "6 min", likes: "2.2k", comments: "38" }
    },
    {
      image: natureImg6,
      category: "Exploration",
      date: "April 25, 2025",
      title: "Hidden Waterfalls of Asia",
      excerpt: "Journey to the most spectacular and lesser-known waterfalls across Asia...",
      author: {
        name: "Mykel Ross",
        avatar: authorMykel,
        role: "Explorer"
      },
      stats: { readTime: "9 min", likes: "3.0k", comments: "55" }
    }
  ];

  const displayedPosts = showAll ? allBlogPosts : allBlogPosts.slice(0, 3);

  const handleViewMoreClick = () => {
    setShowAll(!showAll);
    // Smooth scroll to newly loaded content
    if (!showAll) {
      setTimeout(() => {
        window.scrollBy({
          top: 100,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="blog py-5">
        <div className="blog-pattern"></div>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Travel Stories</span>
            <h2 className="section-title">Latest From Our Blog</h2>
            <div className="title-underline mx-auto"></div>
            <p className="text-muted mt-3">Discover inspiring stories and expert travel tips</p>
          </div>

          <Row className="blog-grid">
            {displayedPosts.map((post, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card 
                  className="blog-card border-0 h-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="blog-img-wrapper">
                    <Card.Img variant="top" src={post.image} className="blog-img" />
                    <span className="category-badge">{post.category}</span>
                    <div className="blog-overlay">
                      <button className="read-more-btn">Read More</button>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <div className="post-meta mb-3">
                      <span className="post-date">
                        <i className="bi bi-calendar3 me-2"></i>
                        {post.date}
                      </span>
                      <span className="post-read-time ms-3">
                        <i className="bi bi-clock me-2"></i>
                        {post.stats.readTime}
                      </span>
                    </div>
                    <Card.Title className="blog-title h5 mb-3">
                      {post.title}
                    </Card.Title>
                    <Card.Text className="blog-excerpt">
                      {post.excerpt}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="author-img-wrapper">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="author-avatar"
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="author-name mb-0">{post.author.name}</h6>
                          <small className="text-muted">{post.author.role}</small>
                        </div>
                      </div>
                      <div className="post-stats">
                        <span className="me-3">
                          <i className="bi bi-heart me-1"></i>
                          {post.stats.likes}
                        </span>
                        <span>
                          <i className="bi bi-chat me-1"></i>
                          {post.stats.comments}
                        </span>
                      </div>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5" data-aos="fade-up">
            <button 
              className="view-all-btn"
              onClick={handleViewMoreClick}
            >
              {showAll ? 'Show Less' : 'View All Posts'}
              <i className={`bi bi-arrow-${showAll ? 'up' : 'down'} ms-2`}></i>
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;