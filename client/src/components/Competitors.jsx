"use client";
import React, { useEffect, useState } from "react";
import { ExternalLink, TrendingUp, Target, Hash, Globe } from "lucide-react";
import { useTrigger } from '../context/TriggerContext';

// Updated DetailItem component
function DetailItem({ icon: IconComponent, label, items }) {
  return (
    <div className="detail-item -z-10">
      <IconComponent className="w-4 h-4 text-gray-500 mt-0.5" />
      <div>
        <span className="detail-label">{label}</span>
        <div className="detail-content">
          {items.map((item, i) => (
            <span key={i} className="tag">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Competitors() {
  const [competitors, setCompetitors] = useState([]);
  const { trigger, setTrigger } = useTrigger();

  // Dummy competitors data
  const dummyCompetitors = [
    {
      name: "Competitor 1",
      link: "https://competitor1.com",
      tier_focus: 1,
      strategy: ["Innovative", "Customer-centric"],
      trends: ["AI", "Blockchain"],
      keywords: ["Tech", "Future", "Innovation"],
      social_platform: "LinkedIn",
    },
    {
      name: "Competitor 2",
      link: "https://competitor2.com",
      tier_focus: 2,
      strategy: ["Cost-effective", "Automation"],
      trends: ["Cloud", "5G"],
      keywords: ["Efficiency", "Scalability"],
      social_platform: "Twitter",
    },
    {
      name: "Competitor 3",
      link: "https://competitor3.com",
      tier_focus: 3,
      strategy: ["Niche market", "Agility"],
      trends: ["AR/VR", "IoT"],
      keywords: ["Smart", "Innovative"],
      social_platform: "Facebook",
    },
    {
      name: "Competitor 4",
      link: "https://competitor4.com",
      tier_focus: 1,
      strategy: ["Premium", "Sustainability"],
      trends: ["Green tech", "AI"],
      keywords: ["Eco-friendly", "Sustainable"],
      social_platform: "Instagram",
    },
    {
      name: "Competitor 5",
      link: "https://competitor5.com",
      tier_focus: 2,
      strategy: ["Global expansion", "Collaborative"],
      trends: ["Blockchain", "AI"],
      keywords: ["Growth", "Expansion"],
      social_platform: "LinkedIn",
    },
  ];

  useEffect(() => {
    // Directly set the dummy data
    setCompetitors(dummyCompetitors);
  }, [trigger]);

  return (
    <div className="p-8 min-h-screen overflow-hidden -z-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          Competitor Overview
        </h1>
        <p className="text-gray-500 mb-12">
          Analyzing the market landscape and competitive strategies
        </p>

        <div className="space-y-8">
          {competitors.map((competitor, index) => (
            <div key={index} className="competitor-card">
              <div
                className={`tier-badge ${
                  competitor.tier_focus === 1
                    ? "tier-badge-1"
                    : competitor.tier_focus === 2
                    ? "tier-badge-2"
                    : "tier-badge-3"
                }`}
              >
                {competitor.tier_focus === 1
                  ? "1st Tier"
                  : competitor.tier_focus === 2
                  ? "2nd Tier"
                  : "3rd Tier"}
              </div>

              <div className="flex-1 space-y-6">
                <a
                  href={competitor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="competitor-link"
                >
                  {competitor.name}
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="detail-section">
                  <DetailItem icon={Target} label="Strategy" items={competitor.strategy} />
                  <DetailItem icon={TrendingUp} label="Trends" items={competitor.trends} />
                  <DetailItem icon={Hash} label="Keywords" items={competitor.keywords} />
                  <DetailItem icon={Globe} label="Platform" items={[competitor.social_platform]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Competitors;
