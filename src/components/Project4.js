
import React, { useState } from 'react';

function Project4() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [showLightbox, setShowLightbox] = useState(false);
  
    // Open lightbox with selected image
    const handleImageClick = (imgSrc) => {
      setLightboxImage(imgSrc);
      setShowLightbox(true);
    };
  
    // Close lightbox
    const handleCloseLightbox = () => {
      setShowLightbox(false);
      setLightboxImage(null);
    };

  return (
    <div className="project-page">
      <h1>Project 4</h1>
      <hr />



      <section className="project-section">
        <div className="project-content">
          <img 
            src="https://images.pexels.com/photos/6631793/pexels-photo-6631793.jpeg" 
            alt="Project 1" 
            className="project-image"            
            onClick={() => handleImageClick("https://images.pexels.com/photos/6631793/pexels-photo-6631793.jpeg")}
          
          />
          <div className="project-description">
            <ul>
                <li>Solitude</li>
                <li>156mm to 3879mm</li>
                <li>Futa, University</li>
                <li>Dr. Prof jobadadan</li>
                <li>Completed</li>
            </ul>
            <p>This mixed media self-portrait contrast through the background with texture and shade. The smooth, colorful, person next to blank, textured, space; combined with all white hands.  </p>
          </div>
        </div>
      </section>


      
      <section className="inspiration-section">
        <h2>Inspiration</h2>
        <hr />
        <div className="inspiration-row">
          <div className="inspiration-images">
            <img src="https://images.unsplash.com/photo-1730259692163-e2cf3d547aab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"             onClick={() => handleImageClick("https://images.unsplash.com/photo-1730259692163-e2cf3d547aab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
          alt="Inspiration 1" />
            <img src="https://images.unsplash.com/photo-1730170788262-152f85b25171?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"             onClick={() => handleImageClick("https://images.unsplash.com/photo-1730170788262-152f85b25171?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
          alt="Inspiration 2" />
          </div>
          <div className="inspiration-description">
            <p>My two artist inspirations was Auguste Rodin and Thomas Gainsborough. Rodin was a sculptor that made a multitude of works based on the human body, one being "Study of a Hand". Here Rodin used plaster to do a physical study a hand. There is rough and smooth qualities about the sculpture that advances the texture. Additionally the almost pained  
            Gainsborough's painting is a rendition of another artist's interpretation of Sarah Siddons. The original painting by Sir Joshua Reynolds illustrated Siddons as a damsel in distress and as a highly tragic person.  Gainsborough, however, displays Siddons as a confidant person, who is sure of herself, not tragic or anything of the like. She has a content look oh her face and a strong posture, portraying how she is.  The high contrast of the asymmetrical painting is something I</p>
          </div>
        </div>
        <div className="inspiration-row" id='ir'>
          <img src="https://images.unsplash.com/photo-1730170788236-5b872dcea71d?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"             
          onClick={() => handleImageClick("https://images.unsplash.com/photo-1730170788236-5b872dcea71d?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
          alt="Inspiration Image" />
          
          <div className="inspiration-description"><p>My two artist inspirations was Auguste Rodin and Thomas Gainsborough. Rodin was a sculptor that made a multitude of works based on the human body, one being "Study of a Hand". Here Rodin used plaster to do a physical study a hand. There is rough and smooth qualities about the sculpture that advances the texture. Additionally the almost pained  
            Gainsborough's painting is a rendition of another artist'sI</p>
            </div>   <img src="https://images.unsplash.com/photo-1730170787479-ca21524efb7c?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"             
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1730170787479-ca21524efb7c?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
          alt="Inspiration Left" />
            </div>
        <div className="inspiration-row">
         <img src="https://images.unsplash.com/photo-1730170787497-79368609170b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"            
         onClick={() => handleImageClick("https://images.unsplash.com/photo-1730170787497-79368609170b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
           alt="Inspiration Right" />
        </div>
      </section>
      
      <section className="planning-section">
        <h2>Planning</h2>
        <hr />
        <div className="planning-row">
          <div className="planning-description">
            <p>To plan I also took a reference photo to base my painting off of. I wanted to present myself with a static and blank face as not to allude to any emotions or thoughts. After increasing the contrast of the picture I added a grid over the my main reference so I could get my proportions and features correct. I then played around with how different backgrounds and different clothes might affect the overall feel of the work. I decided to continue with the solid dark clothes with contrasting white background to match the plaster hands.</p>
            <p>To plan I also took a reference photo to base my painting off of. I wanted to present myself with a static and blank face as not to allude to any emotions or thoughts. After increasing the contrast of the picture I added a grid over the my main reference so I could get my proportions and features correct. I then played around with how different backgrounds and different clothes might affect the overall feel of the work. I decided to continue with the solid dark clothes with contrasting white background to match the plaster hands.</p>
            </div>
          <div className="planning-images-group">
            <img src="https://images.unsplash.com/photo-1728581665826-c1cf636d3652?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1728581665826-c1cf636d3652?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 1" />
            <img src="https://images.unsplash.com/photo-1721044170058-1dc0e90bcec4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1721044170058-1dc0e90bcec4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 2" />
            <img src="https://images.unsplash.com/photo-1699868943805-3a6b9e152366?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1699868943805-3a6b9e152366?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 3" />
            <img src="https://images.unsplash.com/photo-1691819987019-ea8e96901c7e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1691819987019-ea8e96901c7e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 4" />
            <img src="https://images.unsplash.com/photo-1707189855419-721b788aec6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            onClick={() => handleImageClick("https://images.unsplash.com/photo-1707189855419-721b788aec6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 5" />
            <img src="https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={() => handleImageClick("https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
            alt="Planning Image 6" />
          </div>
        </div>
        
        <div className="planning-row">
        </div>
        <div className="planning-row" id='hgr'>
          <div className="planning-description">
            <p>
            ​Combining painting and sculpture is not something I have done. One of the struggles I came across when creating this work was making sure the plaster hands would lay how I wanted them to after attaching. As the hands are heavy compared to the canvas the weighed it down significantly when attached. To counteract this I attached the hands more at their center point of gravity closer to the attachment point of the canvas.</p>
          </div>
          <div className='hgr'> <img src="https://images.unsplash.com/photo-1699868943805-3a6b9e152366?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
           onClick={() => handleImageClick("https://images.unsplash.com/photo-1699868943805-3a6b9e152366?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
           alt="Planning Image 3" />
          <img src="https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           onClick={() => handleImageClick("https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
           alt="Planning Image 6" />
          </div>
             </div>


         {/* Reflection Section */}
      <section className="reflection-section">
        <h2>Reflection</h2>
        <hr />
        <div className="reflection-content">
          <div className="reflection-description">
            <p>Overall I am very pleased with how this work turned out. While I would have liked to add one more hand and made the lips and jaw more accurate to my own features, I am proud of my own improvement since my last self-portrait. Here I show my growth in attention to detail and accuracy. Even though I did struggle with the painting aspect with making it true to real life in proportion and hue, the final work demonstrates my own advances in art making. I also think that this work is one of my most personal ones and one that I felt very connected to while making. Additionally I think my connections to artists Rodin and 
            Gainsborough are faint but still apparent. Similar to ​Gainsborough's Portrait of Sarah Siddons I wanted to paint myself in the true way I am. In my other self-portrait I was putting myself in the place of another person not painting me, while here I was..</p>
          </div>
          <img src="https://plus.unsplash.com/premium_photo-1671269942411-fa6815b5335f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          onClick={() => handleImageClick("https://plus.unsplash.com/premium_photo-1671269942411-fa6815b5335f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
          alt="Reflection Image" className="reflection-image" />
        </div>
      </section>
      
     {/* Critique Section */}
<section className="critique-section">
  <h2>Critique</h2>
  <hr />
  <div className="critique-content">
    {/* First Row: Differences on Left, Image on Right */}
    <div className="critique-row">
      <div className="critique-text">
        <h3>Differences</h3>
        <ul>
          <li>
          ​-The painting of Siddons is almost a full body painting utilizing the objects around her on canvas, but mine is a close up focusing on the face, isolated from all other objects (excluding the hands).</li>
          <li>
          -My art contains sculpture in addition to painting to represent myself, and contrasting Gainsborough's art is solely a painting to illustrate Siddons and her personality. </li>
          
          <li>-Gainsborough work has a variety of hues in the background and on Siddons, while my own has a minimal color palette.</li>
        </ul>
      </div>
      <div className="critique-image">
        <img src="https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         onClick={() => handleImageClick("https://plus.unsplash.com/premium_photo-1673014201324-2eccc35d8387?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
         alt="Critique Image 1" />
      </div>
    </div>

    {/* Second Row: Image on Left, Similarities on Right */}
    <div className="critique-row reverse">
      <div className="critique-image">
        <img src="https://plus.unsplash.com/premium_photo-1675615648106-7d7173bcda9f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
         onClick={() => handleImageClick("https://plus.unsplash.com/premium_photo-1675615648106-7d7173bcda9f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
         alt="Critique Image 2" />
      </div>
      <div className="critique-text">
        <h3>Similarities</h3>
        <ul>
 
    <li>       
-Gainsborough's and my own painting are done in realism, focusing on correctly portraying a person.</li>
          <li>-Both works are re-done paintings of someone. In my own piece I am repainting an old self-portrait and making it more true to life, and similarly Gainsborough is repainting a portrait of Sarah Siddons in her true light.</li>
          <li>-In the two art works focus is put on the subject and who that person is: Siddons, a confidant person and me.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="nav-button left-button">Go to Project 3</button>
      </div>
      </section>
        {/* Lightbox Overlay */}
        {showLightbox && (
        <div className="lightbox-overlay" onClick={handleCloseLightbox}>
          <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default Project4;
