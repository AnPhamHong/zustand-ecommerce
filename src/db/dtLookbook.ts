interface ShoeItem {
  id: number;
  name: string;
  desc: string;
  link: string;
  image: string;
}
const lookbookData: ShoeItem[] = [
  {
    id: 1,
    name: "Urban Explorer",
    desc: `
  The Urban Explorer isn't just a shoe — it's a mindset. Designed for those who move through the world with purpose, confidence, and a touch of rebellious charm, this sneaker redefines what it means to travel through modern life. Whether you're crossing city blocks or finding peace on quiet park paths, the Urban Explorer offers the balance of support and softness you didn’t realize you were missing. 
  Made with a lightweight yet durable outer mesh, the shoe breathes effortlessly through long days on your feet. The adaptive sole molds subtly to your stride, absorbing the impact of concrete jungles and uneven terrain alike. An inner memory foam layer keeps you grounded without ever weighing you down.
  Every element of the Urban Explorer was chosen to evoke motion — from the streamlined shape that hugs the foot like a second skin, to the subtle color shifts that catch the light as you move. The neutral-toned palette with a hint of copper reflects urban architecture: raw, beautiful, and unpolished. 
  Wear it with tailored joggers, wide-legged trousers, or even minimalist streetwear — its versatility lies in its quiet boldness. It doesn’t scream for attention, yet it never goes unnoticed. It is the kind of shoe that becomes a signature. 
  More than fashion, more than function — the Urban Explorer represents the rhythm of the city, the freedom of independence, and the beauty of the unplanned. If your life is a map waiting to be drawn, this is the pair to walk it in.
  `.trim(),
    link: "/products/urban-explorer",
    image:
      "https://images.unsplash.com/photo-1645012656964-8632d7635191?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Classic Leather",
    desc: `
  Classic Leather is not a trend — it's a legacy. Crafted for those who understand that true style is timeless, this shoe carries the soul of old-world craftsmanship and the refinement of modern design. Inspired by decades of iconic fashion yet built for the pace of today, it’s a statement of sophistication without saying a word.
  
  Made from 100% full-grain Italian leather, each pair is hand-finished to bring out the natural texture and sheen that only improves with age. The stitching is precise, with every seam placed to support and contour the foot in all-day wear. A shock-absorbing midsole ensures comfort during movement, while the rubber outsole offers stability on everything from marble floors to cobblestone streets.
  
  Inside, a soft lambskin lining hugs your foot like a tailored glove. The leather will soften and mold over time, becoming uniquely yours — much like a favorite watch or vintage jacket. Subtle details like the gold foil branding and waxed cotton laces nod to heritage design while keeping things clean and understated.
  
  Pair the Classic Leather with chinos and an Oxford shirt for a sharp weekday look, or wear them with jeans and a tee to elevate the everyday. Wherever you go, they carry with them the elegance of tradition and the promise of enduring quality.
  
  This is not just footwear. It’s a reflection of character — strong, grounded, and quietly confident. The kind of piece that doesn’t ask for attention, because it’s already earned your respect.
  `.trim(),
    link: "/products/classic-leather",
    image: "https://images.unsplash.com/photo-1713929644028-8151770100a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Street Runner",
    desc: `
    The Street Runner is built for momentum — in movement, in mindset, in moments that pass too quickly but leave a lasting impression. This shoe was made for those who chase inspiration around every corner, who find poetry in concrete, and who move not just to get somewhere, but to feel alive.
    
    Crafted with ultra-light knit materials, the upper hugs your foot while letting it breathe, adapting to every pivot, leap, and sprint. It’s engineered not only for athletes but for artists — people whose energy demands gear that can keep up with their vision. Whether you're walking through crowded streets or dancing under neon skies, Street Runner moves with you like a second skin.
    
    Its sole features triple-layer cushioning with rebound tech, offering a springy lift that makes even daily commutes feel like a performance. A reflective stripe along the heel adds a modern, night-ready edge — a nod to those who thrive when the city lights come on. Durable, weather-resistant overlays guard against splashes and wear, making this shoe a true companion, rain or shine.
    
    Aesthetically, the design merges sport with streetwear. The contrast lacing system, bold heel tab, and asymmetric toe box create a silhouette that turns heads without demanding it. You can wear it with tapered pants, oversized hoodies, layered jackets, or your most effortless weekend fits.
    
    The Street Runner isn’t about arriving — it’s about how you get there. With every step, it encourages you to take risks, move faster, dream louder, and live bigger. It’s for those who believe that the streets are a canvas, and your path is your masterpiece.
        `.trim(),
    link: "/products/street-runner",
    image: "https://images.unsplash.com/photo-1652791074020-90f33abedc30?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Monochrome High-top",
    desc: `
    Minimalism isn’t about having less — it’s about finding more meaning in every detail. The Monochrome High-top is the embodiment of that philosophy, offering a stripped-back silhouette rich in subtle texture, smart structure, and bold presence. Designed for those who express through quiet contrast and confident stillness, it’s both fashion-forward and timeless.
    
    Made with a soft matte-finish vegan leather, the upper has a buttery texture that whispers luxury. The high-top form offers ankle support while creating a powerful shape that elongates your stance and elevates your outfit. Tonal stitching and seamless panel transitions make the Monochrome a study in thoughtful simplicity.
    
    On the inside, you’ll find a micro-fleece lining that brings unexpected comfort and warmth — ideal for cool city nights or long gallery strolls. The insole is reinforced with anti-fatigue foam, allowing you to move with ease and grace all day.
    
    A tonal rubber outsole grounds the piece with durability while maintaining the aesthetic purity of the all-color look — be it all-black, all-white, or monochrome tan. No logos scream across the surface. No excessive lines distract the eye. Everything is intentional.
    
    Pair it with oversized trousers, layered neutrals, or structured blazers. Or break the rules entirely. The Monochrome High-top doesn’t need validation — it quietly commands respect. It’s worn by people who don’t follow style — they reinterpret it.
    
    This shoe is a reflection of the strength in restraint, the creativity in limits, and the elegance of the undone. In a world of noise, this is your quiet rebellion.
        `.trim(),
    link: "/products/monochrome-high-top",
    image: "https://images.unsplash.com/photo-1669214769149-c54b4a63fa75?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Summer Canvas",
    desc: `
    There’s something unforgettable about summer — long afternoons that melt into golden evenings, the warmth of pavement underfoot, and the way time seems to slow down just enough for you to feel everything. The Summer Canvas captures that feeling and laces it into a shoe you’ll want to wear every day the sun shows its face.
    
    Constructed from premium breathable canvas and natural rubber, this shoe is lightweight, flexible, and made to move as effortlessly as you do. Its slip-on-friendly silhouette features hidden elastic at the tongue for easy access, while still holding a secure, structured form. A reinforced toe cap offers extra durability, perfect for spontaneous adventures — from bike rides to beach strolls to rooftop sunsets.
    
    The color palette takes its cue from nature: off-white dunes, faded sky blues, sun-washed corals. Each shade tells a story of open skies, warm air, and carefree afternoons. The outsole is lined with textured grip to keep you steady even when the world around you feels like it’s floating.
    
    But what truly sets the Summer Canvas apart is how it makes you feel: light, relaxed, and ready for whatever the day brings. No heavy materials, no complicated designs — just effortless simplicity that complements your life, rather than complicating it.
    
    Wear them with shorts, linen pants, or rolled-up jeans. Let them get scuffed, let them wear — the more stories they collect, the more beautiful they become. Like the best memories of summer, they weren’t made to be perfect — just perfectly lived in.
    
    The Summer Canvas isn’t just a seasonal staple. It’s a state of mind. One that reminds you to slow down, to breathe deep, and to savor the moment under a sky that never seems to end.
        `.trim(),
    link: "/products/summer-canvas",
    image: "https://images.unsplash.com/photo-1732257119847-4449c364c0fd?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default lookbookData;
