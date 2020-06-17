# animated-folder

I just revised my knowledge and decided to recreate the animation folder from Codepen: https://codepen.io/NielsVoogt/pen/dyGpNOx
I realized it without libraries and on CSS animations
Also, I improved user experience:

* Element is fully visible without js, and only when a script is uploaded the element collapse
* It's a solid element, with many animated items. so I start all animations after just one parent CSS class. Just one enter point, which starts all magic, instead of many independent elements
