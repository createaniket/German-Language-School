import React from "react";

const features = [
  "A live thirty minute expert led webinar",
  "Clarity on your correct starting level",
  "A structured roadmap for A1 to B2",
  "Timeline to finish each level realistically",
  "Exam strategy for Goethe and other common tests",
  "A mini mock test to identify your current level",
  "Do’s and don’ts that save months of wasted time",
  "A simple ninety day study plan",
];

export default function FeaturesGrid(){
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="r-h1">Everything You Need<br/>To Start Learning German The Right Way</h3>
          <div className="r-body-strong mt-2">For ₹99, you get:</div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((f, idx) => (
            <div key={idx} className="w-[209px] p-4 rounded-lg bg-[color:var(--blue-100)] text-center">
              <div className="mb-3 inline-block p-2 rounded-full bg-[color:var(--primary-300)]"></div>
              <div className="text-[color:var(--blue-800)] font-semibold text-sm" dangerouslySetInnerHTML={{__html:f.replace('\n','<br/>')}} />
            </div>
          ))}

          <div className="w-[209px] h-[110px] p-4 rounded-lg bg-[color:var(--blue-100)] flex flex-col justify-between items-center">
            <div className="px-2 py-1 bg-[color:var(--primary-300)] rounded-full text-white text-xs font-semibold">Bonus</div>
            <div className="text-[color:var(--blue-800)] font-semibold text-sm text-center">Access to free resources after the session</div>
          </div>
        </div>
      </div>
    </section>
  );
}