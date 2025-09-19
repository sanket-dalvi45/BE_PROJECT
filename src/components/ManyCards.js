import React from "react";
import Card from "./Card";

function ManyCards() {
  const courses = [
    { 
      image: "https://th.bing.com/th/id/OIP.qvhcmd-GbCm7CDbfUmF9LAHaE8?w=248&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      title: "Aptitude Test", 
      description: "Check it out" 
    },
    { 
      image: "https://th.bing.com/th/id/OIP.ovL7vlsR8xQd-0HZBAA-cwHaGr?w=197&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      title: "Progress", 
      description: "Track Your Progress" 
    },
    { 
      image: "https://th.bing.com/th/id/OIP._Ts9gtjYSyixB7HiAoC_PwHaE8?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      title: "Courses", 
      description: "Visit the Courses"
    }
  ];

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center"
    }}>
      {courses.map((item, index) => (
        <Card 
          key={index} 
          image={item.image} 
          title={item.title} 
          description={item.description} 
        />
      ))}
    </div>
  );
}

export default ManyCards;
