import { useEffect, useState } from "react";


const Gallery = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('Gallery.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                console.log(data);
            });
    }, []);

    return (
        <div  id="gallery" className="bg-black">
            <div className="font-aldrich pb-12 flex justify-center items-center bg-black px-[5%] lg:px-[12%]">
        
         
          <h2 className="text-4xl pt-32  pb-10 md:text-6xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#5411ff] to-[#b000c3]">
          Gallery
          </h2>
       
      </div>
            <div className="grid gap-8 row-gap-5 pb-36 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto px-[5%]  lg:px-[12%]">
                {cards.map((card) => (
                    <div key={card.id}> {/* Apply key prop here */}
                        <div className="relative w-full max-w-sm mx-auto">
                            <img src={card.image} alt={card.name} className="object-cover w-full h-full rounded shadow-lg" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <h1 className="text-xl text-white font-semibold">{card.name}</h1>
                                <p className="pb-4 text-sm text-white">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
