import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Shield, Clock, Star } from "lucide-react";
import dentistProfile1 from "@/assets/dentist-profile-1.jpg";
import dentistProfile2 from "@/assets/dentist-profile-2.jpg";
import dentalOffice from "@/assets/dental-office-interior.jpg";

const AboutPage = () => {
  const dentists = [
    {
      name: "Dr. Michael Thompson",
      title: "Lead Dentist & Clinic Director",
      image: dentistProfile1,
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Procedures", "Dental Implants"],
      education: "DDS, University of Dental Medicine",
      description: "Dr. Thompson brings over 15 years of experience in comprehensive dental care, specializing in cosmetic dentistry and complex restorative procedures."
    },
    {
      name: "Dr. Sarah Martinez",
      title: "Pediatric & Family Dentist",
      image: dentistProfile2,
      experience: "12+ years",
      specialties: ["Pediatric Dentistry", "Orthodontics", "Preventive Care"],
      education: "DDS, Pediatric Specialty Certification",
      description: "Dr. Martinez is passionate about creating positive dental experiences for children and families, with expertise in gentle, anxiety-free treatments."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding, and genuine concern for their comfort and well-being."
    },
    {
      icon: Shield,
      title: "Clinical Excellence",
      description: "Our commitment to the highest standards of dental care ensures optimal outcomes for every treatment."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We provide comprehensive dental care for patients of all ages, from children to seniors."
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      description: "We stay current with the latest dental technologies and techniques to provide the best care possible."
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Patients" },
    { number: "20+", label: "Years Experience" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-secondary">SmileCare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Providing quality dental care for families with a focus on comfort, safety, and long-term oral health.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded over two decades ago, SmileCare Dental Clinic began with a simple mission: 
                  to provide exceptional dental care in a warm, welcoming environment where patients 
                  feel comfortable and confident.
                </p>
                <p>
                  What started as a small practice has grown into a comprehensive dental clinic, 
                  but our core values remain unchanged. We believe that every patient deserves 
                  personalized attention, gentle care, and access to the latest dental technologies.
                </p>
                <p>
                  Today, we're proud to serve thousands of families in our community, helping them 
                  achieve and maintain healthy, beautiful smiles for life.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={dentalOffice}
                alt="SmileCare dental office interior"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the exceptional care we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-soft">
                    <value.icon className="w-8 h-8 text-secondary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced dentists are committed to providing the highest quality care with a gentle, personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {dentists.map((dentist, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-strong transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={dentist.image}
                      alt={dentist.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{dentist.name}</h3>
                        <p className="text-secondary font-medium">{dentist.title}</p>
                      </div>
                      <Badge variant="secondary" className="bg-dental-mint text-primary">
                        {dentist.experience}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{dentist.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">{dentist.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {dentist.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-200">
              Trusted by thousands of patients for over two decades
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;