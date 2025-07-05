import Image from "next/image";
import Link from "next/link";

export default function Events() {
    return (
        <main className="bg-[#0A0F2C] text-white">
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                >
                    <source src="/events_bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Foreground content */}
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-5xl font-bold text-[#6C5CE7] mb-6">
                        Octarise Event Management
                    </h1>
                    <p className="text-xl text-gray-300">
                        Making your celebrations truly unforgettable with stunning planning & flawless execution.
                    </p>
                </div>
            </section>


            {/* What We Offer */}
            <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#00CEC9] mb-4">
                        What We Offer
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        We take pride in curating events that leave lasting impressions. From intimate gatherings to grand celebrations, we handle it all with creativity and care.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-white">
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Birthday Parties</h3>
                        <p className="text-gray-300">
                            Unique themes, engaging activities, vibrant décor, and delightful memories for all age groups.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Anniversaries & Engagements</h3>
                        <p className="text-gray-300">
                            Celebrate your milestones with elegant setups, customized entertainment, and tailored services.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Baby Showers & Naming Ceremonies</h3>
                        <p className="text-gray-300">
                            Heartwarming themes, charming decor, and joyful moments to welcome new beginnings.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Housewarmings & Homecomings</h3>
                        <p className="text-gray-300">
                            Stunning floral arrangements, lighting, and personalized hospitality to celebrate your new home.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Farewell & Graduation Parties</h3>
                        <p className="text-gray-300">
                            Bid adieu or mark new chapters with style — thematic parties, fun games, and memories captured.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Corporate Events</h3>
                        <p className="text-gray-300">
                            Product launches, team outings, annual meets, and conferences — seamless planning & execution.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Family Gatherings & Reunions</h3>
                        <p className="text-gray-300">
                            Bringing loved ones together with lively setups, curated entertainment, and warm hospitality.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Exhibitions & Cultural Events</h3>
                        <p className="text-gray-300">
                            From art displays to music shows, we handle stage setups, artist management, and audience engagement.
                        </p>
                    </div>
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">And More...</h3>
                        <p className="text-gray-300">
                            Every celebration is unique. Share your ideas, and we’ll bring them to life with our signature touch.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-20 bg-[#0A0F2C]">
                <h2 className="text-4xl font-bold text-[#00CEC9] mb-4">
                    Ready to create memories?
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Let us craft the perfect event for you. Get in touch for personalized planning.
                </p>
                <Link
                    href="/#contact"
                    className="inline-block bg-[#6C5CE7] hover:bg-[#5a4ecb] text-white px-8 py-3 rounded-lg transition"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
}
