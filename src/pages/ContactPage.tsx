import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageSquare,
  User,
  Car,
  Shield,
  CreditCard
} from "lucide-react";

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted:", contactForm);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: [
        "123 Dental Street",
        "Healthcare City, HC 12345",
        "Suite 200"
      ],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main: (555) 123-4567",
        "Emergency: (555) 123-4568",
        "Fax: (555) 123-4569"
      ],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@smilecare.com",
        "appointments@smilecare.com",
        "emergency@smilecare.com"
      ],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:00 PM",
        "Sunday: Emergency Only"
      ],
      color: "text-orange-600"
    }
  ];

  const officeFeatures = [
    {
      icon: Car,
      title: "Free Parking",
      description: "Convenient parking available for all patients"
    },
    {
      icon: Shield,
      title: "Sanitized Environment",
      description: "Strict hygiene protocols for your safety"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options and financing available"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-secondary">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Ready to start your journey to a healthier, more beautiful smile? Get in touch with us today!
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 px-8 py-6">
            <Calendar className="w-5 h-5" />
            Book Appointment Now
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 bg-gray-50 ${info.color}`}>
                    <info.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our services or want to schedule an appointment? 
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="shadow-strong bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Schedule Appointment</option>
                          <option value="emergency">Emergency Care</option>
                          <option value="insurance">Insurance Questions</option>
                          <option value="services">Service Information</option>
                          <option value="billing">Billing Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Find Our Clinic
                </h2>
                
                {/* Map Placeholder */}
                <Card className="bg-gray-100 border-2 border-dashed border-gray-300 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Dental Street, Healthcare City</p>
                  </div>
                </Card>
              </div>

              {/* Office Features */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">Why Visit Our Clinic?</h3>
                <div className="space-y-4">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-soft">
                      <div className="bg-secondary/10 p-2 rounded-lg">
                        <feature.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 mb-4">
                    Experiencing a dental emergency? Don't wait - call us immediately.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book Your Smile Transformation Today!
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Online
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;