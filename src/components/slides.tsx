import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Star } from 'lucide-react'

export function ProblemSlide() {
  
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
    <div className="h-full flex items-center">
      <div className="w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl appello-headline text-white">
            Your Current <span className="text-red-400">Reality</span>
          </h1>
          <h2 className="text-xl appello-callout text-appello-secondary">
            The Daily Struggle Every ICI Subcontractor Faces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift"
            >
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{problem.icon}</span>
                  </div>
                  <h3 className="text-sm appello-callout text-white mb-2">{problem.title}</h3>
                  <p className="appello-body text-appello-gray text-xs leading-relaxed">{problem.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Quote */}
        <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl text-appello-secondary mb-3">&ldquo;</div>
              <p className="text-base appello-body text-white italic mb-4 leading-relaxed">
                We tried Procore - too expensive and built for GCs. ServiceTitan doesn&apos;t understand commercial projects. Point solutions like ClockShark and Workyard left us with 5 different systems. Nothing was built for ICI subcontractors like us until Appello.
              </p>
              <div className="text-appello-secondary appello-callout text-sm">
                — Actual Customer Feedback
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function CostSlide() {
  return (
    <div className="h-full flex items-center">
      <div className="w-full space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl appello-headline text-white">
            What This Really <span className="text-red-400">Costs You</span>
          </h1>
          <h2 className="text-lg appello-callout text-appello-secondary">
            The Hidden Price of Inefficient Operations
          </h2>
        </div>

        {/* ROI Calculator Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl appello-headline text-red-400 mb-1">520-780</div>
              <p className="text-white appello-callout text-xs mb-1">Hours Lost</p>
              <p className="text-appello-gray appello-body text-xs">Annually</p>
            </CardContent>
          </Card>
          
          <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl appello-headline text-red-400 mb-1">$23,400</div>
              <p className="text-white appello-callout text-xs mb-1">Lost Productivity</p>
              <p className="text-appello-gray appello-body text-xs">Value</p>
            </CardContent>
          </Card>
          
          <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl appello-headline text-red-400 mb-1">5-8%</div>
              <p className="text-white appello-callout text-xs mb-1">Profit Margin</p>
              <p className="text-appello-gray appello-body text-xs">Erosion</p>
            </CardContent>
          </Card>
          
          <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl appello-headline text-red-400 mb-1">$160,000</div>
              <p className="text-white appello-callout text-xs mb-1">Lost Profits</p>
              <p className="text-appello-gray appello-body text-xs">on $2M Revenue</p>
            </CardContent>
          </Card>
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg appello-callout text-white mb-2">Time Lost</h3>
              <p className="appello-body text-appello-gray text-xs leading-relaxed">
                Daily timesheet processing, manual updates, form collection, data reconciliation
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg appello-callout text-white mb-2">Money Lost</h3>
              <p className="appello-body text-appello-gray text-xs leading-relaxed">
                Budget overruns, material waste, missed change orders, compliance issues
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="text-lg appello-callout text-white mb-2">Growth Limited</h3>
              <p className="appello-body text-appello-gray text-xs leading-relaxed">
                Can&apos;t scale, no data insights, operational complexity, missed opportunities
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Message */}
        <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-3xl mx-auto">
          <CardContent className="p-6 text-center">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="text-lg appello-headline text-white mb-3">The Million-Dollar Question:</h3>
            <p className="text-base appello-body text-appello-secondary">
              What could you do with an extra $100,000 in profit this year?
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function SolutionSlide() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  
  const features = [
    { 
      icon: <span className="text-xl">🎯</span>, 
      title: 'Target Sweet Spot: 10-500 Field Workers', 
      description: 'Exactly where you are or want to be. Not too simple, not too complex.',
      details: 'Purpose-built for mid-sized ICI subcontractors who need more than basic tools but less than enterprise complexity.'
    },
    { 
      icon: <span className="text-xl">🏗️</span>, 
      title: 'Your Industries', 
      description: 'Mechanical Insulation, HVAC, Electrical, Fire Protection, Sheet Metal',
      details: 'Deep understanding of trade-specific workflows, compliance requirements, and operational challenges.'
    },
    { 
      icon: <span className="text-xl">🏆</span>, 
      title: 'Built by Subcontractors For Subcontractors', 
      description: 'We understand your challenges because we&apos;ve lived them.',
      details: 'Founded by contractors who experienced these pain points firsthand and built the solution they wished existed.'
    },
    { 
      icon: <span className="text-xl">🚀</span>, 
      title: 'Battle-Tested Success', 
      description: '5-star G2 rating, AI-powered intelligence, Industry recognition',
      details: 'Proven track record with real customers and industry recognition from major trade associations.'
    }
  ]

  return (
    <div className="h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl appello-headline text-white">
              Purpose-Built for <span className="text-appello-secondary">Companies Like Yours</span>
            </h1>
            <h2 className="text-lg appello-callout text-appello-secondary">
              The Only Platform Designed Specifically for ICI Specialty Subcontractors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-appello-secondary bg-appello-secondary/10' : ''
                }`}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-appello-secondary/20 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm appello-callout text-white mb-1">{feature.title}</h3>
                      <p className="appello-body text-appello-gray text-xs leading-relaxed">{feature.description}</p>
                      {activeFeature === index && (
                        <div className="mt-3 p-3 bg-appello-secondary/10 rounded-lg border border-appello-secondary/30">
                          <p className="text-appello-secondary appello-body text-xs">{feature.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-3xl text-appello-secondary mb-2">&ldquo;</div>
              <p className="text-sm appello-body text-white italic mb-3">
                Moving our timesheets, project costing, and reporting into Appello cut hours of admin work every week. My team isn&apos;t going back.
              </p>
              <div className="text-appello-secondary appello-callout text-xs">
                — Andrew Martin, Thermec Insulation
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Content - Workforce Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/644aae3da7e67be488880e4b_Anzen-Workforce-02-p-2000.png" 
              alt="Field crew using Appello mobile app on construction site"
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-appello-navy/30 to-transparent rounded-xl"></div>
          </div>
        </div>
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
