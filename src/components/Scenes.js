const scenes = {
    scene1: {
      id: "scene1",
      image: "../src/assets/test.jpg",
      links: [
        {
          to: "scene2",
          position: [50, 0, -100],
          label: "Go Forward"
        }
      ],
      hotspots: [
        {
          position: [-30, 10, -100],
          label: "Library Entrance"
        }
      ]
    },
    scene2: {
      id: "scene2",
      image: "../src/assets/pano1.jpg",
      links: [
        {
          to: "scene1",
          position: [-50, 0, -100],
          label: "Go Back"
        },
        {
          to: "scene3",
          position: [30, 0, -100],
          label: "Right Turn"
        }
      ],
      hotspots: []
    },
    scene3: {
        id: "scene3",
        image: "../src/assets/pano2.jpg",
        links: [
          {
            to: "scene2",
            position: [-50, 0, -100],
            label: "Go Back"
          },
          {
            to: "scene1",
            position: [30, 0, -100],
            label: "Left Turn"
          }
        ],
        hotspots: []
    }
  };
  
  export default scenes;