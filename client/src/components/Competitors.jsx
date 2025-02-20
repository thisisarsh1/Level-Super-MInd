import React from "react";
import { ExternalLink, TrendingUp, Target, Hash, Globe, Icon } from 'lucide-react';

const data = {
};

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

function Competitors({solution}) {
  return (
    <div className="p-8 min-h-screen overflow-hidden -z-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
          Competitor Overview
        </h1>
        <p className="text-gray-500 mb-12">Analyzing the market landscape and competitive strategies</p>
        
        <div className="space-y-8">
          {solution?.competitors?.map((competitor, index) => (
            <div key={index} className="competitor-card">
              <div className={`tier-badge ${competitor.tier_focus === 1 ? 'tier-badge-1' : 'tier-badge-2'}`}>
                {competitor.tier_focus === 1 ? '1st Tier' : '2nd Tier'}
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
                  <DetailItem 
                    icon={Target} 
                    label="Strategy" 
                    items={competitor.strategy} 
                  />
                  <DetailItem 
                    icon={TrendingUp} 
                    label="Trends" 
                    items={competitor.trends} 
                  />
                  <DetailItem 
                    icon={Hash} 
                    label="Keywords" 
                    items={competitor.keywords} 
                  />
                  <DetailItem 
                    icon={Globe} 
                    label="Platform" 
                    items={[competitor.social_platform]} 
                  />
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