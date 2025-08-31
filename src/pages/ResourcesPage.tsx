import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  CreditCard,
  FileText,
  Star,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";

const ResourcesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const insurancePartners = [
    "Delta Dental", "Blue Cross Blue Shield", "Aetna", "Cigna", 
    "MetLife", "Humana", "United Healthcare", "Guardian"
  ];

  const paymentOptions = [
    {
      icon: CreditCard,
      title: "Flexible Payment Plans",
      description: "0% interest financing available for qualified patients"
    },
    {
      icon: Shield,
      title: "Insurance Accepted",
      description: "We work with most major dental insurance providers"
    },
    {
      icon: CheckCircle,
      title: "CareCredit",
      description: "Healthcare financing with convenient monthly payments"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The team at SmileCare made me feel comfortable and confident in my smile again! Dr. Thompson's expertise in cosmetic dentistry is outstanding.",
      treatment: "Porcelain Veneers"
    },
    {
      name: "Michael Chen", 
      rating: 5,
      text: "My family has been going to SmileCare for years. They're gentle with the kids and always professional. Highly recommend!",
      treatment: "Family Dentistry"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "I was nervous about getting implants, but Dr. Martinez explained everything clearly and the procedure was painless. Amazing results!",
      treatment: "Dental Implants"
    }
  ];

  const firstVisitSteps = [
    {
      step: "1",
      title: "Arrive 15 minutes early",
      description: "Complete paperwork and insurance verification"
    },
    {
      step: "2", 
      title: "Comprehensive exam",
      description: "Thorough evaluation of your oral health"
    },
    {
      step: "3",
      title: "X-rays if needed",
      description: "Digital imaging for accurate diagnosis"
    },
    {
      step: "4",
      title: "Treatment discussion",
      description: "Review findings and discuss treatment options"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Patient <span className="text-secondary">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Everything you need to know for a smooth and comfortable dental experience.
          </p>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Book Your Appointment
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule your visit online or call us at (555) 123-4567
            </p>
          </div>

          <Card className="shadow-strong">
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
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a service</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="implants">Implants & Restorations</option>
                      <option value="preventive">Preventive Care</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dental concerns or questions..."
                    rows={4}
                    className="border-gray-300"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make quality dental care affordable with flexible payment options and insurance partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {paymentOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-secondary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-center text-primary">Insurance Partners</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4">
              {insurancePartners.map((insurance, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                  {insurance}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* First Visit Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What to Expect on Your First Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've designed our first visit process to be comfortable, thorough, and informative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {firstVisitSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-secondary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real patients who trust SmileCare with their dental health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <Badge variant="secondary" className="mt-2 bg-dental-mint text-primary">
                      {testimonial.treatment}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;