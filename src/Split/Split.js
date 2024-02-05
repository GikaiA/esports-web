import React from "react";
import "./Split.css";

const SplitScreen = () => {
  return (
    <div className="split-screen">
      <div className="left-pane">
        <div className="paragraph">
          <h2 className="casual-title">Casual</h2>
          <p className="casual-paragraph">
            In our casual gaming haven, there's no need to fret if the cutthroat
            world of esports isn't your cup of tea. Our club recognizes and
            celebrates the diverse gaming interests of our members, catering to
            those who simply want to kick back and enjoy the lighter side of
            gaming. Whether you're a seasoned gamer or just looking to dip your
            toes into the gaming world, our doors are wide open. If you prefer
            watching the action unfold rather than taking the controller
            yourself, you're more than welcome to join our community of
            spectators. We understand that gaming is a broad spectrum of
            entertainment, and our club aims to provide a comfortable space for
            everyone. From fun game nights filled with laughter to engaging
            monthly meetings where members can share their favorite gaming
            experiences, we create an inclusive environment where camaraderie
            and enjoyment take center stage. So, come as you are, and let's make
            gaming a collective and enjoyable experience for all.
          </p>
        </div>
      </div>
      <div className="right-pane">
        <div className="paragraph">
          <h2 className="comp-title">Competitive</h2>
          <p className="comp-paragraph">
            In the vibrant world of competitive video gaming, our club stands as
            a haven for those fueled by a passion for esports. For individuals
            yearning to channel their energy into the exhilarating realm of
            digital competition, they need look no further. Our club provides a
            dynamic space where gamers can immerse themselves in the thrilling
            world of competitive video games. With a commitment to fostering
            skill, teamwork, and sportsmanship, we offer a platform for
            enthusiasts to showcase their talents. As a testament to our
            dedication, we organize tryouts every Fall and Spring semester,
            providing aspiring players with the opportunity to join a community
            that shares their fervor for esports. Whether you're a seasoned pro
            or a newcomer eager to embrace the competitive spirit, our club
            welcomes all who seek to make their mark in the exciting arena of
            video game competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
