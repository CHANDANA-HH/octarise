
import Link from "next/link";

export default function Software() {
    return (
        <main className="bg-[#0A0F2C] text-white">
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
                {/* Background video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/software1_bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Foreground content */}
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#6C5CE7] mb-6">
                        Octarise Software Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Transforming your ideas into elegant, functional, and robust digital realities.
                    </p>
                </div>
            </section>


            {/* Services Overview */}
            <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#00CEC9] mb-4">
                        What We Offer
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        From aesthetic personal portfolios to powerful commercial platforms,
                        we design & build software that resonates with your vision.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-white">
                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Web Design & Development</h3>
                        <p className="text-gray-300">
                            Beautiful, responsive websites for personal portfolios, student showcases,
                            or professional business fronts that elevate your brand.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">SEO Optimization</h3>
                        <p className="text-gray-300">
                            Improve your search engine rankings with smart strategies that drive
                            traffic and grow your audience organically.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Social Media Management</h3>
                        <p className="text-gray-300">
                            From account creation to consistent posting & engagement, we handle
                            your online presence across Instagram, Facebook, and more.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">E-Commerce Solutions</h3>
                        <p className="text-gray-300">
                            Build sleek online stores with seamless payment gateways, product management,
                            and order tracking to boost your sales.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Analytics & Performance</h3>
                        <p className="text-gray-300">
                            Integrate Google Analytics and real-time dashboards to monitor your site’s
                            performance and user engagement effectively.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Payment Integration</h3>
                        <p className="text-gray-300">
                            Integrate secure payment gateways like Razorpay, PayPal, or Stripe
                            to handle transactions effortlessly and safely.
                        </p>
                    </div>

                    <div className="bg-[#1B2140]/70 p-6 rounded-lg hover:bg-[#6C5CE7]/30 transition">
                        <h3 className="text-2xl font-semibold mb-3 text-[#00CEC9]">Custom Integrations</h3>
                        <p className="text-gray-300">
                            APIs, CRM tools, booking systems, or automation — tailor your digital
                            ecosystem to your exact needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-20 bg-[#0A0F2C]">
                <h2 className="text-4xl font-bold text-[#00CEC9] mb-4">
                    Ready to start your project?
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Let’s build something extraordinary together. Reach out for a free consultation.
                </p>
                <Link
                    href="/#contact"
                    className="inline-block bg-[#6C5CE7] hover:bg-[#5a4ecb] text-white px-8 py-3 rounded-lg transition"
                >
                    Get in Touch
                </Link>
            </section>
        </main>
    );
}
