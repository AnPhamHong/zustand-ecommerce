import { MISSION_VISION, OUR_STORY } from "@/db/stories";
import RecyclingSection from "@/pages/Home/RecyclingSection";
import ShoeMaterial from "@/pages/Home/ShoeMaterial";
import "@/styles/pages/Story.scss";
import ReactPlayer from "react-player";

export default function OurStory() {
  return (
    <>
      <section className="story-container">
        <div className="story-material">
          <div className="story-subtitle">
            <h1 className="story-title">Our Story</h1>
            <p className="story-description">
              Taking a stylish and sustainable footwear with a focus on creating
              a positive impact on both the world and the people
            </p>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=cqeOl6_p-4A"
            width="100%"
            height="400px"
            playing={true}
            controls={false}
            style={{
              margin: "0 auto",
            }}
          />
          <div className="story-group">
            {OUR_STORY.map((item, idx) => {
              return (
                <div key={`story-${idx}`} className="story-item">
                  {item.icon}
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mission-vision-container">
        <div className="story-mission-vision">
          {MISSION_VISION.map((item, idx) => {
            return (
              <div key={`mission-${idx}`} className="mission-item">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <ShoeMaterial />
      <RecyclingSection hiddenImg />
    </>
  );
}
