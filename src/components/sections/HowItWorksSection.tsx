import { BriefcaseBusiness, Building2, CalendarDays, IndianRupee, MapPin, TrendingUp } from "lucide-react";
import { SectionHeading } from "../ui/GoldButton";
import { SectionShell } from "../ui/SectionShell";

const investmentFacts = [
  { icon: IndianRupee, label: "Franchise fee", value: "₹7 Lakhs + GST" },
  { icon: MapPin, label: "Retail space", value: "700 sq. ft." },
  { icon: CalendarDays, label: "Agreement term", value: "5 years" },
  { icon: TrendingUp, label: "Payback period", value: "24–28 months" },
];

const modelFacts = [
  { icon: Building2, label: "Retail network", value: "50+ outlets" },
  { icon: BriefcaseBusiness, label: "Franchise formats", value: "Master · Unit" },
];

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof IndianRupee;
  label: string;
  value: string;
}) {
  return (
    <div className="investment-fact-row">
      <span className="investment-fact-label">
        <span className="investment-fact-icon"><Icon aria-hidden size={19} strokeWidth={1.7} /></span>
        <span>{label}</span>
      </span>
      <strong className="investment-fact-value">{value}</strong>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <SectionShell
      id="invest-process"
      ariaLabel="Odette franchise investment and returns"
      fullViewport={false}
      className="investment-page-section"
    >
      <div className="investment-section mx-auto w-full max-w-6xl">
        <SectionHeading
          compact
          centered
          pill="Investment & Returns"
          title="An investment built around fashion and retail"
          subtitle="A clear view of the investment structure and the Odette franchise model."
        />

        <div className="investment-panels">
          <article className="investment-panel">
            <p className="investment-panel-kicker">Investment snapshot</p>
            <h3 className="investment-panel-figure">₹45 Lakhs<span> onwards</span></h3>
            <div className="investment-panel-rule" />
            <div className="investment-fact-table">
              <div className="investment-table-head"><span>Component</span><span>Details</span></div>
              {investmentFacts.map((fact) => <FactRow key={fact.label} {...fact} />)}
            </div>
            <p className="investment-panel-note">
              Indicative figures for the Odette franchise opportunity. Final requirements are confirmed in the franchise agreement.
            </p>
          </article>

          <article className="investment-panel investment-panel--returns">
            <p className="investment-panel-kicker">Returns structure</p>
            <div className="investment-return-highlight">
              <strong>FICO</strong>
              <span>Franchise invested · Company operated</span>
            </div>
            <div className="investment-panel-rule" />
            <div className="investment-fact-table">
              <div className="investment-table-head"><span>Franchise model</span><span>Details</span></div>
              <div className="investment-return-row">
                <span>Monthly return structure</span>
                <strong>₹1.25 Lakhs / month or 12% revenue share, whichever is higher</strong>
              </div>
              {modelFacts.map((fact) => <FactRow key={fact.label} {...fact} />)}
            </div>
            <p className="investment-panel-note">
              Revenue share is calculated as set out in the final franchise agreement.
            </p>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
