function reviews(n){
  i+=n;
  if(i>=photos.length){
    i=0;
  }
  else if (i<0) {
    i = photos.length-1;
  }
  document.getElementById("photo").src=photos[i];
  document.querySelector(".name").innerHTML=names[i];
  document.querySelector(".job").innerHTML=jobs[i];
  document.querySelector('.discription').innerHTML=discriptions[i];
}

let i=0;

photos=["person-1_rfzshl.jpg","person-2_np9x5l.jpg","person-3_ipa0mj.jpg","person-4_t9nxjt.jpg"];
names=["Susan Smith","Anna Johnson","Peter Jones","Bill Anderson"];
jobs=["WEB DEVELOPER","WEB DESIGNER","INTERN","THE BOSS"];
discriptions=["I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry","Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.","Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.","Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."];

