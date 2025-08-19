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
      title: 'Manual Project Tracking', 
      description: 'Paper-based processes and spreadsheets slow down operations', 
      impact: 'High',
      cost: '$75K+ annually in lost productivity',
      icon: '📋'
    },
    { 
      title: 'Disconnected Systems', 
      description: 'Estimating, scheduling, and billing systems don\'t communicate', 
      impact: 'Critical',
      cost: '30% of project data is duplicated or lost',
      icon: '🔌'
    },
    { 
      title: 'Limited Real-Time Visibility', 
      description: 'Can\'t track job progress, costs, or team performance in real-time', 
      impact: 'High',
      cost: '25% cost overruns due to poor visibility',
      icon: '👁️'
    },
    { 
      title: 'Scaling Bottlenecks', 
      description: 'Current processes break down as you take on more projects', 
      impact: 'Critical',
      cost: 'Growth limited to 20% annually',
      icon: '🚧'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <div className="appello-callout-bubble inline-block">
          Common ICI Contractor Challenges
        </div>
        <h1 className="text-5xl appello-headline text-white">
          What&apos;s Holding Your <span className="text-appello-secondary">Construction Business</span> Back?
        </h1>
        <p className="text-xl appello-body text-appello-gray max-w-4xl mx-auto">
          Most ICI contractors face the same operational challenges that limit growth and profitability
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {problems.map((problem, index) => (
          <Card 
            key={index} 
            className="bg-appello-white/5 border-appello-gray/20 backdrop-blur-sm hover:bg-appello-white/10 transition-all cursor-pointer hover-lift"
            onMouseEnter={() => setHoveredProblem(index)}
            onMouseLeave={() => setHoveredProblem(null)}
          >
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-appello-gray/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{problem.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl appello-callout text-white mb-1">{problem.title}</h3>
                    <Badge 
                      className={problem.impact === 'Critical' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-yellow-600 text-white'
                      }
                    >
                      {problem.impact} Impact
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="appello-body text-appello-gray mb-4">{problem.description}</p>
              {hoveredProblem === index && (
                <div className="mt-4 p-4 bg-appello-secondary/10 rounded-xl border border-appello-secondary/30 animate-scale-in">
                  <p className="text-appello-secondary appello-callout text-sm mb-1">💰 Business Impact:</p>
                  <p className="text-white appello-body text-sm">{problem.cost}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-4xl appello-headline text-appello-secondary mb-3">$500K+</div>
            <p className="appello-body text-appello-gray">Average annual cost of inefficient construction operations</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-3 text-appello-gray">
          <span className="appello-body">Sound familiar?</span>
          <ArrowRight className="w-5 h-5 text-appello-secondary" />
          <span className="text-appello-secondary appello-callout">Appello has the solution</span>
        </div>
      </div>
    </div>
  )
}

export function SolutionSlide() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  
  const features = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Real-Time Project Tracking', 
      description: 'Monitor job progress, costs, and team performance instantly',
      details: 'Live dashboards show project status, budget utilization, and team productivity across all active jobs.',
      metric: 'Live Updates'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: 'Integrated Operations', 
      description: 'All your tools connected in one unified platform',
      details: 'Seamlessly connect estimating, scheduling, time tracking, and billing in one system.',
      metric: 'Unified Platform'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: 'Mobile-First Design', 
      description: 'Field teams can update progress from any device',
      details: 'Native mobile apps keep field teams connected with real-time data sync and offline capabilities.',
      metric: 'Always Connected'
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: 'Intelligent Insights', 
      description: 'Data-driven decisions with predictive analytics',
      details: 'AI-powered analytics predict project outcomes, identify risks, and optimize resource allocation.',
      metric: 'Smart Predictions'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <div className="appello-callout-bubble inline-block">
          The Appello Platform
        </div>
        <h1 className="text-5xl appello-headline text-white">
          <span className="text-appello-secondary">Comprehensive Solution</span> for ICI Contractors
        </h1>
        <p className="text-xl appello-body text-appello-gray max-w-4xl mx-auto">
          Everything you need to streamline operations, boost efficiency, and scale your construction business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={`bg-green-900/20 border-green-500/30 backdrop-blur-sm hover:bg-green-900/30 transition-all group cursor-pointer hover:scale-105 ${
              activeFeature === index ? 'ring-2 ring-green-400 bg-green-800/30' : ''
            }`}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-300">{feature.title}</h3>
                  <Badge className="bg-green-600 text-white text-xs px-2 py-1 mt-1">
                    {feature.metric}
                  </Badge>
                </div>
              </div>
              <p className="text-white/70 mb-3">{feature.description}</p>
              {activeFeature === index && (
                <div className="mt-4 p-4 bg-green-800/30 rounded-lg border border-green-500/50">
                  <p className="text-green-200 text-sm">{feature.details}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm max-w-2xl mx-auto hover:scale-105 transition-all">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">All-in-One Platform</h3>
            <p className="text-white/80 mb-6">
              Instead of juggling multiple tools, get everything you need in one integrated solution
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-blue-600 text-white px-6 py-2">30-Day Free Trial</Badge>
              <Badge className="bg-purple-600 text-white px-6 py-2">No Setup Required</Badge>
            </div>
          </CardContent>
        </Card>
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

export function CTASlide() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ready to Transform?
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Join the revolution. Start your free trial today and see results within 30 days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card 
          className={`bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-all cursor-pointer ${
            selectedPlan === 'starter' ? 'ring-2 ring-blue-400 bg-blue-900/20' : ''
          }`}
          onClick={() => setSelectedPlan(selectedPlan === 'starter' ? null : 'starter')}
        >
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Starter</h3>
            <div className="text-3xl font-bold text-blue-400 mb-2">$49</div>
            <p className="text-white/60 mb-6">per month</p>
            <ul className="space-y-2 mb-8 text-sm text-white/70">
              <li>✓ Core features</li>
              <li>✓ 5 team members</li>
              <li>✓ Email support</li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
          </CardContent>
        </Card>

        <Card 
          className={`bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500/50 backdrop-blur-sm hover:scale-105 transition-all relative cursor-pointer ${
            selectedPlan === 'professional' ? 'ring-2 ring-purple-400 bg-purple-900/20' : ''
          }`}
          onClick={() => setSelectedPlan(selectedPlan === 'professional' ? null : 'professional')}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">Most Popular</Badge>
          </div>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Professional</h3>
            <div className="text-3xl font-bold text-blue-400 mb-2">$149</div>
            <p className="text-white/60 mb-6">per month</p>
            <ul className="space-y-2 mb-8 text-sm text-white/70">
              <li>✓ All Starter features</li>
              <li>✓ Unlimited team members</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Start Free Trial</Button>
          </CardContent>
        </Card>

        <Card 
          className={`bg-white/10 border-white/20 backdrop-blur-sm hover:scale-105 transition-all cursor-pointer ${
            selectedPlan === 'enterprise' ? 'ring-2 ring-yellow-400 bg-yellow-900/20' : ''
          }`}
          onClick={() => setSelectedPlan(selectedPlan === 'enterprise' ? null : 'enterprise')}
        >
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Enterprise</h3>
            <div className="text-3xl font-bold text-blue-400 mb-2">Custom</div>
            <p className="text-white/60 mb-6">pricing</p>
            <ul className="space-y-2 mb-8 text-sm text-white/70">
              <li>✓ All Professional features</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
            </ul>
            <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">Contact Sales</Button>
          </CardContent>
        </Card>
      </div>

      {selectedPlan && (
        <Card className="bg-green-900/20 border-green-500/30 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-300 mb-2">
              Great Choice! {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan Selected
            </h3>
            <p className="text-white/70 mb-4">Ready to start your transformation journey?</p>
            <Button className="bg-green-600 hover:bg-green-700">Continue to Checkout</Button>
          </CardContent>
        </Card>
      )}

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold text-white">Ready to Get Started?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
            Start Your Free Trial<ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
            Schedule Demo
          </Button>
        </div>
        <p className="text-white/60 text-sm">No credit card required • 30-day money-back guarantee • Cancel anytime</p>
      </div>
    </div>
  )
}
