import { CheckOutlined } from "@ant-design/icons";
import { PinkBlur, VioletBlur, GradientWord } from "../Home/1-Hero-Section";

const freePlan = [
  "Unlimited forms with unlimited responses",
  "Collect crypto donations on forms",
  "Paywall forms with tokens",
  "Advanced form logic",
  "Role gating forms with Guild.xyz & Discord",
  "Sybil protection on forms with Gitcoin Passport",
  "Incentivization & memorabilia with POAP & NFTs",
  "Prevent bots with captcha",
  "Custom message on form submission",
  "Lookup on chain data of form responders",
  "Collect form responses on Discord",
  "2 plugins per form",
  "10 automations",
  "Unlimited Projects with 200 rows",
  "Pre-set roles",
  "3 members in space",
];

const paidPlan = [
  "Everything in Free",
  "Unlimited form plugins",
  "Response Analytics",
  "No Spect branding at the end of form",
  "200 automations",
  "Unlimited projects with unlimited rows",
  "Unlimited workstreams",
  "5 members in space",
  "$10 per additional member",
];

const orgPlan = [
  "Everything in paid plan",
  "Custom roles and granular access management",
  "Priority support",
  "Personalized pricing",
  "Custom solutions",
  "Dedicated success manager",
];

export default function Pricing() {
  return (
    <div className="h-full relative">
      <div className="flex flex-col text-center items-center z-20">
        <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-xl md:text-xl sm:text-xl z-40 p-2">
          <i>
            <GradientWord className="my-3">
              Pricing becomes active from 1st July
            </GradientWord>
          </i>
        </h1>
      </div>
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="flex flex-col text-center items-center z-20 gap-8">
        <div className="flex flex-col text-center items-center z-20">
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl h-full p-8">
            <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 ">
              For individual & small teams
            </h1>
            <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
              <GradientWord className="my-3">Free</GradientWord>
            </h1>
            <div className="flex flex-row gap-3 mt-4">
              <div className="flex flex-col gap-3 mt-4 w-96 ">
                {freePlan.slice(0, 8).map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="flex flex-row gap-3 items-center text-start"
                    >
                      <CheckOutlined style={{ color: "#BF5AF2" }} />
                      <p className="text-zinc-400 hover:text-white duration-700">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="featureSet flex flex-col gap-3 mt-4 w-96 sm:hidden xs:hidden">
                {freePlan.slice(8, 17).map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="flex flex-row gap-3 items-center"
                    >
                      <CheckOutlined style={{ color: "#BF5AF2" }} />
                      <p className="text-zinc-400 hover:text-white duration-700">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-4 ml-8 hidden sm:flex xs:flex">
              <p className="text-zinc-400 hover:text-white duration-700">
                <a href="https://docs.spect.network/" target="_blank">
                  {" "}
                  And <GradientWord>so much more!</GradientWord>
                </a>
              </p>
            </div>
            <a href="https://circles.spect.network/">
              <button className="px-8 py-3 my-3 mt-8 rounded-xl text-md text-purple text-bold bg-purple bg-opacity-5 hover:bg-opacity-25 duration-700">
                Start Building
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row text-center justify-center items-center md:items-start z-20 gap-8 h-128">
          <div className="flex flex-col text-center items-center z-20">
            <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl h-full p-8">
              <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
                For larger teams
              </h1>
              <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
                <GradientWord className="my-3">$30 </GradientWord>
              </h1>
              <div>per month</div>

              <div className="flex flex-col gap-3 mt-4 w-96 text-start">
                {paidPlan.map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="flex flex-row gap-3 items-center"
                    >
                      <CheckOutlined style={{ color: "#BF5AF2" }} />
                      <p className="text-zinc-400 hover:text-white duration-700">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
              <a href="https://circles.spect.network/">
                <button className="px-8 py-3 my-3 mt-8 rounded-xl text-md text-purple text-bold bg-purple bg-opacity-5 hover:bg-opacity-25 duration-700">
                  Start Building
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center items-center z-20 h-128">
            <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl h-full p-8">
              <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
                For organizations
              </h1>
              <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
                <GradientWord className="my-3">Custom</GradientWord>
              </h1>
              <div>for more than 30 members</div>

              <div className="flex flex-col gap-3 mt-4 w-96 text-start mb-1">
                {orgPlan.map((feature) => {
                  return (
                    <div
                      key={feature}
                      className="flex flex-row gap-3 items-center"
                    >
                      <CheckOutlined style={{ color: "#BF5AF2" }} />
                      <p className="text-zinc-400 hover:text-white duration-700">
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
              <a href="https://circles.spect.network/r/1998bf5d-01d8-423d-820f-db83829a87b2">
                <button className="px-8 py-3 my-3 mt-28 rounded-xl text-md text-purple text-bold bg-purple bg-opacity-5 hover:bg-opacity-25 duration-700">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
