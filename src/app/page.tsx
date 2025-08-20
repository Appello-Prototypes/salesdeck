'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { Separator } from '@/components/ui/separator'
import { ChevronLeft, ChevronRight, Play, HelpCircle, Pause } from 'lucide-react'
import { ProblemSlide, CostSlide, SolutionSlide } from '@/components/slides'
import { ImplementationSlide, ModulesSlide, CompetitiveSlide, GapSlide, AISlide, ROISlide, CustomersSlide } from '@/components/all-slides'
import { RivalSlide, ThermecSlide, ThomasSlide, VanossSlide, PricingSlide, NextStepsSlide, FinalCTASlide } from '@/components/case-studies'

const slides = [
  { id: 1, title: 'Stop Managing Your Business with Excel and Paper', subtitle: 'The Only Platform Purpose-Built for ICI Subcontractors', type: 'intro' },
  { id: 2, title: 'Your Current Reality', subtitle: 'The Daily Struggle Every ICI Subcontractor Faces', type: 'problem' },
  { id: 3, title: 'What This Really Costs You', subtitle: 'The Hidden Price of Inefficient Operations', type: 'cost' },
  { id: 4, title: 'Introducing Appello', subtitle: 'Purpose-Built for Companies Like Yours', type: 'solution' },
  { id: 5, title: 'Start with Timesheets, Expand at Your Pace', subtitle: 'Our Proven Onboarding Process', type: 'implementation' },
  { id: 6, title: 'Pay Only for What You Use, Access Everything', subtitle: '10 Integrated Modules Under One Roof', type: 'modules' },
  { id: 7, title: 'Why Appello vs. Everyone Else', subtitle: 'Clear Competitive Differentiation', type: 'competitive' },
  { id: 8, title: 'The Only Platform Built for YOUR Business', subtitle: 'Why Every Other Solution Falls Short', type: 'gap' },
  { id: 9, title: 'The Future is Already Here', subtitle: 'Advanced AI Capabilities Setting Industry Standards', type: 'ai' },
  { id: 10, title: 'Real Numbers from Real Customers', subtitle: 'Quantified Return on Investment', type: 'roi' },
  { id: 11, title: 'Proven Results Across Customer Types', subtitle: 'Success Stories from Real Customers', type: 'customers' },
  { id: 12, title: 'Case Study: Rival Insulation', subtitle: 'Complex Union Operations Made Simple', type: 'rival' },
  { id: 13, title: 'Case Study: Thermec Insulation', subtitle: 'Operational Efficiency Transformation', type: 'thermec' },
  { id: 14, title: 'Case Study: Thomas Group', subtitle: 'Enterprise Scalability Proven', type: 'thomas' },
  { id: 15, title: 'Case Study: Vanoss Insulation', subtitle: 'From Chaos to Control', type: 'vanoss' },
  { id: 16, title: 'Transparent, Scalable Investment', subtitle: 'Pricing That Pays for Itself', type: 'pricing' },
  { id: 17, title: 'Ready to Transform Your Operations?', subtitle: 'Take the Next Step Toward Operational Excellence', type: 'nextsteps' },
  { id: 18, title: 'Join 25 Companies Who Chose 5-Star Support', subtitle: 'Ready to stop managing your business with Excel and paper?', type: 'finalcta' }
]

export default function SalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        setIsAutoPlay(false)
      } else if (e.key >= '1' && e.key <= '9') {
        const slideIndex = parseInt(e.key) - 1
        if (slideIndex < slides.length) {
          goToSlide(slideIndex)
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  const renderSlideContent = () => {
    switch (slides[currentSlide].type) {
      case 'intro': return <IntroSlide />
      case 'problem': return <ProblemSlide />
      case 'cost': return <CostSlide />
      case 'solution': return <SolutionSlide />
      case 'implementation': return <ImplementationSlide />
      case 'modules': return <ModulesSlide />
      case 'competitive': return <CompetitiveSlide />
      case 'gap': return <GapSlide />
      case 'ai': return <AISlide />
      case 'roi': return <ROISlide />
      case 'customers': return <CustomersSlide />
      case 'rival': return <RivalSlide />
      case 'thermec': return <ThermecSlide />
      case 'thomas': return <ThomasSlide />
      case 'vanoss': return <VanossSlide />
      case 'pricing': return <PricingSlide />
      case 'nextsteps': return <NextStepsSlide />
      case 'finalcta': return <FinalCTASlide />
      default: return <IntroSlide />
    }
  }

  return (
    <div className="min-h-screen bg-appello-navy text-appello-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-appello-primary/90 backdrop-blur-md border-b border-appello-secondary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/Appello-Logo-White.svg" 
              alt="Appello" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-appello-secondary scale-125' 
                    : 'bg-white/30 hover:bg-appello-secondary/50'
                }`} />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setShowHelp(!showHelp)} className="text-white hover:bg-appello-secondary/20">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAutoPlay(!isAutoPlay)} className="text-white hover:bg-appello-secondary/20">
              {isAutoPlay ? <Pause className="w-4 h-4 text-appello-secondary" /> : <Play className="w-4 h-4" />}
            </Button>
            <span className="text-sm text-white/70">{currentSlide + 1} / {slides.length}</span>
          </div>
        </div>
      </nav>

      {showHelp && (
        <div className="fixed inset-0 z-50 bg-appello-navy/80 backdrop-blur-sm flex items-center justify-center p-6">
          <Card className="bg-appello-white border-appello-secondary/20 max-w-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl appello-headline">Navigation Help</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowHelp(false)} className="text-appello-navy hover:bg-appello-secondary/10">✕</Button>
              </div>
              <div className="space-y-4 text-appello-navy">
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">←→</Badge><span className="appello-body">Arrow keys to navigate</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">Space</Badge><span className="appello-body">Next slide</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">1-9</Badge><span className="appello-body">Jump to slides 1-9</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">ESC</Badge><span className="appello-body">Stop auto-play</span></div>
                <Separator className="bg-appello-gray/20 my-4" />
                <p className="text-sm text-appello-gray">Click on cards and elements to interact with them</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <main className="pt-20 h-screen flex flex-col p-6">
        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col">
          {/* Slide Content - Fixed Height */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center overflow-y-auto">
              {renderSlideContent()}
            </div>
          </div>
          
          {/* Navigation Controls - Fixed at Bottom */}
          <div className="flex justify-between items-center py-6">
            <Button 
              onClick={prevSlide} 
              disabled={currentSlide === 0} 
              variant="outline" 
              className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            
            <Button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1} 
              className="bg-appello-secondary hover:bg-appello-primary text-white disabled:opacity-50"
            >
              Next<ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function IntroSlide() {
  return (
    <div className="h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl appello-headline text-white mb-4">
              Stop Managing Your Business with <span className="text-red-400">Excel and Paper</span>
            </h1>
            <h2 className="text-2xl appello-callout text-appello-secondary mb-6">
              The Only Platform Purpose-Built for ICI Subcontractors
            </h2>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-sm appello-callout text-white mb-1">Real Human Support</h3>
                <p className="text-appello-gray appello-body text-xs">&ldquo;Call us, we answer&rdquo;</p>
              </CardContent>
            </Card>
            
            <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🇨🇦🇺🇸</div>
                <h3 className="text-sm appello-callout text-white mb-1">Canadian & American</h3>
                <p className="text-appello-gray appello-body text-xs">Local support</p>
              </CardContent>
            </Card>
            
            <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="text-sm appello-callout text-white mb-1">25+ Contractors</h3>
                <p className="text-appello-gray appello-body text-xs">5-star G2 rating</p>
              </CardContent>
            </Card>
            
            <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">👷</div>
                <h3 className="text-sm appello-callout text-white mb-1">1,100+ Workers</h3>
                <p className="text-appello-gray appello-body text-xs">Enterprise validated</p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-appello-secondary hover:bg-appello-primary text-white px-6 py-3 appello-callout">
              Book Your Demo Today →
            </Button>
            <Button size="lg" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white px-6 py-3 appello-callout">
              Talk to Our Customers
            </Button>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/644ac2f4d9cf36fa0e97b650_Anzen-Timesheets-p-2000.png" 
              alt="Appello mobile timesheet interface showing modern digital solution vs paper chaos"
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-appello-navy/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
