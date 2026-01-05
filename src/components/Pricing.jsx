
import { useState } from 'react';
import Button from './ui/Button';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricingPlans = [
        {
            name: "Free Plan",
            price: 0,
            features: [
                { text: "Access to selected free courses.", included: true },
                { text: "Limited course materials and resources.", included: true },
                { text: "Basic community support.", included: true },
                { text: "No certification upon completion.", included: true },
                { text: "Ad-supported platform.", included: true },
                { text: "Access to exclusive Pro Plan community forums.", included: false },
                { text: "Early access to new courses and updates.", included: false },
            ]
        },
        {
            name: "Pro Plan",
            price: 79,
            features: [
                { text: "Unlimited access to all courses.", included: true },
                { text: "Unlimited course materials and resources.", included: true },
                { text: "Priority support from instructors.", included: true },
                { text: "Course completion certificates.", included: true },
                { text: "Ad-free experience.", included: true },
                { text: "Access to exclusive Pro Plan community forums.", included: true },
                { text: "Early access to new courses and updates.", included: true },
            ]
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Pricing</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="bg-white p-1.5 rounded-lg border border-gray-100 flex items-center">
                    <Button
                        onClick={() => setBillingCycle('monthly')}
                        variant={billingCycle === 'monthly' ? 'primary' : 'ghost'}
                        className={billingCycle === 'monthly' ? '' : 'text-gray-600 hover:text-gray-900 hover:bg-transparent'}
                    >
                        Monthly
                    </Button>
                    <Button
                        onClick={() => setBillingCycle('yearly')}
                        variant={billingCycle === 'yearly' ? 'primary' : 'ghost'}
                        className={billingCycle === 'yearly' ? '' : 'text-gray-600 hover:text-gray-900 hover:bg-transparent'}
                    >
                        Yearly
                    </Button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 md:p-12 rounded-xl">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="bg-[#FCFCFD] border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col">
                        {/* Plan Header */}
                        <div className="bg-[#FFF9F0] py-2 px-4 rounded-md text-center border border-primary/20 mb-6">
                            <span className="font-medium text-gray-900">{plan.name}</span>
                        </div>

                        {/* Price */}
                        <div className="text-center mb-8">
                            <span className="text-5xl md:text-6xl font-bold text-gray-900">${plan.price}</span>
                            <span className="text-gray-500 font-medium">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                        </div>

                        {/* Features List */}
                        <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8 flex-grow">
                            <h4 className="text-center font-medium text-gray-900 mb-6">Available Features</h4>
                            <ul className="space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3 p-3 border border-gray-50 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className={`mt-0.5 p-1 rounded ${feature.included ? 'bg-[#FFF9F0]' : 'bg-transparent border border-gray-200'}`}>
                                            {feature.included ? (
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button */}
                        <Button className="w-full py-4 rounded-b-xl rounded-t-lg shadow-sm">
                            Get Started
                        </Button>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
