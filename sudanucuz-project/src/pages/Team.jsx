

export default function Team(){
    return(
        <>
            <div className="flex flex-col ">

                <div className="flex flex-col items-center text-center">
                    <p className="text-gray-500 text-sm font-bold tracking-wide pt-12">WHAT WE DO</p>
                    <p className="text-[#252B42] text-4xl font-bold tracking-wide px-24 py-6">Innovation tailored for you</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-2">
                        
                        {/* Big image */}
                        <div className="w-full h-auto sm:row-span-2">
                            <img 
                                src="https://images.pexels.com/photos/8661807/pexels-photo-8661807.jpeg"
                                className="w-full h-auto aspect-[3/4] sm:aspect-[4/4] object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-2 col-span-2 sm:col-span-1 gap-1 sm:gap-2">
                            {/* Right top-left */}
                            <div className="w-full aspect-square">
                                <img 
                                src="https://images.pexels.com/photos/19539374/pexels-photo-19539374.jpeg"
                                className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right top-right */}
                            <div className="w-full aspect-square">
                                <img 
                                src="https://images.pexels.com/photos/11535782/pexels-photo-11535782.jpeg"
                                className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right bottom-left */}
                            <div className="w-full aspect-square">
                                <img 
                                src="https://images.pexels.com/photos/27453411/pexels-photo-27453411.jpeg"
                                className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Right bottom-right */}
                            <div className="w-full aspect-square">
                                <img 
                                src="https://images.pexels.com/photos/15227856/pexels-photo-15227856.jpeg"
                                className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div>
                    <p className="text-[#252B42] text-4xl font-bold tracking-wide px-36 py-12 text-center">Meet Our Team</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm: justify-center sm:gap-12 text-center">
                    <div className="flex flex-col pb-12">
                        <img className="w-64 h-72 object-cover"
                        src="https://images.pexels.com/photos/20157092/pexels-photo-20157092.jpeg"></img>
                        <p className="font-bold text-[#252B42]">Yalçın Kaya</p>
                        <p className="font-semibold text-[#737373]">Project Manager</p>
                    </div>
                    <div className="flex flex-col pb-12">
                        <img className="w-64 h-72 object-cover"
                        src="https://media.licdn.com/dms/image/v2/D4D03AQHpMo5HOhyTpw/profile-displayphoto-shrink_200_200/B4DZeNh70ZGYAg-/0/1750426173642?e=1758758400&v=beta&t=rmhGlcJQ0GatRA-EUGelHzGwDPDCcv-nKaykpCcMwT4"></img>
                        <p className="font-bold text-[#252B42]">Hatice Varlık Koç</p>
                        <p className="font-semibold text-[#737373]">Developer</p>
                    </div>
                </div>

                <div className="flex flex-col items-center py-24">
                    <p className="text-[#252B42] text-4xl font-bold tracking-wide px-16 pt-2 text-center">Start your 14 days free trial</p>
                    <p className="font-semibold text-[#737373] tracking-wide py-6 px-12 sm:px-24 lg:px-64 text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                    <button className="bg-sky-500 text-white rounded text-center px-8 py-2 font-semibold">Try it free now</button>
                </div>

            </div>
        </>
    );
}