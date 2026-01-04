import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative gradient-bg text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-sm border border-amber-400/30 rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
              <span className="text-sm font-semibold text-amber-100">14+ Years of Excellence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Panel Beating
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">You Can Trust</span>
            </h1>
            
            <p className="text-lg text-blue-100/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              MeNdlovu Panelbeating specializes in restoring vehicles to their optimal condition. 
              Our skilled team delivers exceptional service and top-tier quality every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">14+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-blue-200 text-sm">Years Combined Expertise</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-blue-200 text-sm">Vehicles Restored</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-blue-200 text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Quality Guaranteed</div>
              <div className="text-sm text-blue-200/80">Premium workmanship</div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Fast Turnaround</div>
              <div className="text-sm text-blue-200/80">Quick & efficient service</div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Certified Experts</div>
              <div className="text-sm text-blue-200/80">Skilled professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
