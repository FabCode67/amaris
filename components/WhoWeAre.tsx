import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';

const Parteners = () => {
    return (
        <section className="text-medBlue   p-8 mx-auto text-gray-500 max-w-7xl bg-white">
            <div className=" mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">PARTNERS</h2>
                <p className="text-lg md:text-xl">
                    We work with the best companies in the country to provide you with the best care.
                </p>
                <p className="max-w-2xl mx-auto">
                    We have partnered with the best companies in the country to provide you with the best care. Our
                    partners are committed to providing you with the best care and service.
                </p>
                <div className="w-full overflow-hidden mt-5">
                    <div className="moving-logos w-full flex items-center space-x-12 animate-scroll">
                        {[
                            'eden.png',
                            'xana.webp',
                            'old.png',
                            'sante.png',
                            'moh.png',
                            'karisimbi.png',
                            'eden.png',
                            'xana.webp',
                            'old.png',
                            'sante.png',
                            'moh.png',
                            'karisimbi.png',
                        ].map((logo, index) => (
                            <img
                                key={index}
                                src={`/${logo}`}
                                alt={`Partner Logo ${index + 1}`}
                                className="h-24 md:h-32"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parteners;
