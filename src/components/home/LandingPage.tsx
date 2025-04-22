import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Rocket, Target, Zap, ArrowRight, BarChart2, BookOpen, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms analyze your skills and experience to provide personalized career guidance.',
  },
  {
    icon: Target,
    title: 'Smart Job Matching',
    description: 'Find opportunities that perfectly align with your skills and career aspirations.',
  },
  {
    icon: BarChart2,
    title: 'Skill Analytics',
    description: 'Detailed insights into your skill progression and areas for improvement.',
  },
  {
    icon: BookOpen,
    title: 'Learning Paths',
    description: 'Customized learning recommendations to help you reach your career goals.',
  },
];

const benefits = [
  {
    title: '85%',
    description: 'Higher job match accuracy',
  },
  {
    title: '3x',
    description: 'Faster skill development',
  },
  {
    title: '90%',
    description: 'User satisfaction rate',
  },
];

export function LandingPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-purple/20 to-accent-green/20 backdrop-blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Optimize Your Career Path with
              <span className="block gradient-text mt-2">AI-Powered Precision</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              OSOM analyzes your skills, experience, and goals to create a personalized career development strategy that maximizes your potential.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Powerful Features for Your Career Growth</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to accelerate your career development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500 dark:bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((stat) => (
              <div key={stat.title} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.title}</div>
                <div className="text-primary-100">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-500 to-accent-purple rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
              <p className="text-primary-100 text-lg">
                Join thousands of professionals who are already optimizing their career paths with OSOM.
              </p>
            </div>
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-primary-500 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Success stories from professionals like you
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  alt="User avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "OSOM helped me identify the skills I needed to advance my career. Within 6 months, I landed my dream job!"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}