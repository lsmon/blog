---
title: "Trying a photo gallery using md"
excerpt: "To create a photo gallery using Markdown, you can use a combination of Markdown syntax and styles..."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2024-11-04T17:33:07.322Z"
author:
  name: Salomon Lee
  picture: "/assets/blog/authors/sl.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---


 ![Alcatraz on my back](/assets/media/alcatraz.jpg)
 ![Donner Downhill Ski Resort slope](/assets/media/donnerdownhill.jpg)
 ![Donner Lake](/assets/media/donnerlake.jpg)
 ![at Filoli](/assets/media/filoli.jpg)
 ![My name has hebrew roots like the Jewish museum in my back](/assets/media/jewmuseum.jpg)
 ![A prestine night view for productive night jog](/assets/media/nightview.jpg)
 ![Ohh the pacific ocean...](/assets/media/pacific.jpg)
 ![A ranch turn into a hotel](/assets/media/ranch.jpg)
 ![At RSH rooftop](/assets/media/rsh.jpg)
 ![According to Indiana Jones, the lost Arc of the Covennant is lost somewhere at the smithsonian](/assets/media/smithsonian.jpg) 
 ![Sunsets at a California Ranch](/assets/media/sunset.jpg)
 ![Yosemite National Park](/assets/media/yosemite.jpg)

<style>
p {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

img {
  width: 100%;
  height: 150px; /* adjust height to maintain aspect ratio */
  object-fit: cover;
  border-radius: 10px; /* add rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* add subtle shadow */
}
</style>
