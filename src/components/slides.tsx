import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react'

export function ProblemSlide() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null)
  
  const problems = [
    { 
      title: 'Stuck with Point Solutions', 
      description: 'ClockShark for time, Workyard for GPS, FieldWire for tasks, QuickBooks for accounting. 5+ systems that don&apos;t talk to each other.',
      icon: '📋'
    },
    { 
      title: 'Wrong Software for Your Business', 
      description: 'Procore built for GCs, ServiceTitan for residential, Jonas for accounting. Nothing purpose-built for ICI subcontractors.',
      icon: '💻'
    },
    { 
      title: 'Excel Nightmare for Complex Work', 
      description: 'Union wage calculations, prevailing wage rates, certified payroll, COR compliance. Excel can&apos;t handle your complexity.',
      icon: '📊'
    },
    { 
      title: 'No ICI-Specific Features', 
      description: 'Government contract requirements, trade certifications, multi-year project tracking. Generic software doesn&apos;t understand your business.',
      icon: '🔍'
    },
    { 
      title: 'Administrative Chaos', 
      description: '15+ hours/week on data entry between systems. Missing the features you actually need for mechanical, electrical, insulation work.',
      icon: '⏰'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Your Current <span className="text-red-400">Reality</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          The Daily Struggle Every ICI Subcontractor Faces
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {problems.map((problem, index) => (
          <Card 
            key={index} 
            className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm hover:bg-appello-white/10 transition-all cursor-pointer hover-lift"
            onMouseEnter={() => setHoveredProblem(index)}
            onMouseLeave={() => setHoveredProblem(null)}
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{problem.icon}</span>
                </div>
                <h3 className="text-lg appello-callout text-white mb-3">{problem.title}</h3>
              </div>
              <p className="appello-body text-appello-gray text-sm text-center leading-relaxed">{problem.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonial Quote */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto mt-16">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="text-6xl text-appello-secondary mb-4">&ldquo;</div>
            <p className="text-lg appello-body text-white italic mb-6 leading-relaxed">
              We tried Procore - too expensive and built for GCs. ServiceTitan doesn&apos;t understand commercial projects. Point solutions like ClockShark and Workyard left us with 5 different systems. Nothing was built for ICI subcontractors like us until Appello.
            </p>
            <div className="text-appello-secondary appello-callout">
              — Actual Customer Feedback
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function CostSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          What This Really <span className="text-red-400">Costs You</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          The Hidden Price of Inefficient Operations
        </h2>
      </div>

      {/* ROI Calculator Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl appello-headline text-red-400 mb-2">520-780</div>
            <p className="text-white appello-callout text-sm mb-1">Hours Lost</p>
            <p className="text-appello-gray appello-body text-xs">Annually</p>
          </CardContent>
        </Card>
        
        <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl appello-headline text-red-400 mb-2">$23,400</div>
            <p className="text-white appello-callout text-sm mb-1">Lost Productivity</p>
            <p className="text-appello-gray appello-body text-xs">Value</p>
          </CardContent>
        </Card>
        
        <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl appello-headline text-red-400 mb-2">5-8%</div>
            <p className="text-white appello-callout text-sm mb-1">Profit Margin</p>
            <p className="text-appello-gray appello-body text-xs">Erosion</p>
          </CardContent>
        </Card>
        
        <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl appello-headline text-red-400 mb-2">$160,000</div>
            <p className="text-white appello-callout text-sm mb-1">Lost Profits</p>
            <p className="text-appello-gray appello-body text-xs">on $2M Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl appello-callout text-white mb-4">Time Lost</h3>
            <p className="appello-body text-appello-gray text-sm leading-relaxed">
              Daily timesheet processing, manual updates, form collection, data reconciliation
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl appello-callout text-white mb-4">Money Lost</h3>
            <p className="appello-body text-appello-gray text-sm leading-relaxed">
              Budget overruns, material waste, missed change orders, compliance issues
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl appello-callout text-white mb-4">Growth Limited</h3>
            <p className="appello-body text-appello-gray text-sm leading-relaxed">
              Can&apos;t scale, no data insights, operational complexity, missed opportunities
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Urgency Message */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-4xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-2xl appello-headline text-white mb-4">The Million-Dollar Question:</h3>
          <p className="text-xl appello-body text-appello-secondary">
            What could you do with an extra $100,000 in profit this year?
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export function SolutionSlide() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  
  const features = [
    { 
      icon: <span className="text-2xl">🎯</span>, 
      title: 'Target Sweet Spot: 10-500 Field Workers', 
      description: 'Exactly where you are or want to be. Not too simple, not too complex - just right for your business size and complexity.',
      details: 'Purpose-built for mid-sized ICI subcontractors who need more than basic tools but less than enterprise complexity.'
    },
    { 
      icon: <span className="text-2xl">🏗️</span>, 
      title: 'Your Industries', 
      description: 'Mechanical Insulation, Thermal Insulation, HVAC, Electrical, Mechanical Fabrication, Sheet Metal & Fire Protection',
      details: 'Deep understanding of trade-specific workflows, compliance requirements, and operational challenges.'
    },
    { 
      icon: <span className="text-2xl">🏆</span>, 
      title: 'Built by Subcontractors For Subcontractors', 
      description: 'We understand your challenges because we&apos;ve lived them. Our platform was built from the ground up by people in the trades.',
      details: 'Founded by contractors who experienced these pain points firsthand and built the solution they wished existed.'
    },
    { 
      icon: <span className="text-2xl">🚀</span>, 
      title: 'Battle-Tested Success', 
      description: '5-star rating on G2, AI-powered intelligence, Speaking at MICA & TIAC conferences, Industry recognition',
      details: 'Proven track record with real customers and industry recognition from major trade associations.'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Purpose-Built for <span className="text-appello-secondary">Companies Like Yours</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          The Only Platform Designed Specifically for ICI Specialty Subcontractors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={`bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all group cursor-pointer hover-lift ${
              activeFeature === index ? 'ring-2 ring-appello-secondary bg-appello-secondary/10' : ''
            }`}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          >
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg appello-callout text-white mb-2">{feature.title}</h3>
                </div>
              </div>
              <p className="appello-body text-appello-gray text-sm leading-relaxed mb-4">{feature.description}</p>
              {activeFeature === index && (
                <div className="mt-4 p-4 bg-appello-secondary/10 rounded-xl border border-appello-secondary/30 animate-scale-in">
                  <p className="text-appello-secondary appello-body text-sm">{feature.details}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customer Testimonial */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <div className="text-5xl text-appello-secondary mb-4">&ldquo;</div>
          <p className="text-xl appello-body text-white italic mb-6 leading-relaxed">
            Moving our timesheets, project costing, and reporting into Appello cut hours of admin work every week. My team isn&apos;t going back.
          </p>
          <div className="text-appello-secondary appello-callout">
            — Andrew Martin, Thermec Insulation
          </div>
        </CardContent>
      </Card>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <Button size="lg" className="bg-appello-secondary hover:bg-appello-primary text-white px-8 py-4 text-lg appello-callout">
          Book Your Demo Today →
        </Button>
        <Button size="lg" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white px-8 py-4 text-lg appello-callout">
          Talk to Our Customers
        </Button>
      </div>
    </div>
  )
}

export function BenefitsSlide() {
  const benefits = [
    { metric: '300%', label: 'Productivity Increase', color: 'text-green-400' },
    { metric: '85%', label: 'Cost Reduction', color: 'text-blue-400' },
    { metric: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400' },
    { metric: '24/7', label: 'Expert Support', color: 'text-yellow-400' }
  ]

  const testimonials = [
    { name: 'Sarah Johnson', company: 'TechCorp Inc.', quote: 'This platform transformed our entire operation. ROI in just 3 months!' },
    { name: 'Mike Chen', company: 'Global Solutions', quote: 'The best investment we&apos;ve made. Our team efficiency skyrocketed.' }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Proven Results
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Join thousands of companies already seeing incredible results
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-all">
            <CardContent className="p-6 text-center">
              <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
              <p className="text-white/70 text-sm">{benefit.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="bg-white/20 my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/5 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-blue-300">{testimonial.name}</p>
                <p className="text-white/60 text-sm">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-green-300">What You Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Advanced Analytics Dashboard',
              'Real-time Collaboration Tools', 
              'API Integration Support',
              'Custom Workflow Builder',
              'Mobile App Access',
              '24/7 Priority Support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={`bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all group cursor-pointer hover-lift ${
              activeFeature === index ? 'ring-2 ring-appello-secondary bg-appello-secondary/10' : ''
            }`}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          >
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg appello-callout text-white mb-2">{feature.title}</h3>
                </div>
              </div>
              <p className="appello-body text-appello-gray text-sm leading-relaxed mb-4">{feature.description}</p>
              {activeFeature === index && (
                <div className="mt-4 p-4 bg-appello-secondary/10 rounded-xl border border-appello-secondary/30 animate-scale-in">
                  <p className="text-appello-secondary appello-body text-sm">{feature.details}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Customer Testimonial */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <div className="text-5xl text-appello-secondary mb-4">&ldquo;</div>
          <p className="text-xl appello-body text-white italic mb-6 leading-relaxed">
            Moving our timesheets, project costing, and reporting into Appello cut hours of admin work every week. My team isn&apos;t going back.
          </p>
          <div className="text-appello-secondary appello-callout">
            — Andrew Martin, Thermec Insulation
          </div>
        </CardContent>
      </Card>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <Button size="lg" className="bg-appello-secondary hover:bg-appello-primary text-white px-8 py-4 text-lg appello-callout">
          Book Your Demo Today →
        </Button>
        <Button size="lg" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white px-8 py-4 text-lg appello-callout">
          Talk to Our Customers
        </Button>
      </div>
    </div>
  )
}
