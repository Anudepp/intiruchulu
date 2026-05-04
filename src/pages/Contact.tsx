import { Phone, Mail, MapPin, } from 'lucide-react';

export default function Contact() {


  return (
    <div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Reach out to the below number to make an order!
                </p>
              </div>

              <div className="space-y-5">
                <a href="tel:" className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                    <Phone size={22} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900"></p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <MapPin size={22} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900"> Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
