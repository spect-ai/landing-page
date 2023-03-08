import { CheckOutlined } from "@ant-design/icons";
import { PinkBlur, VioletBlur, GradientWord } from "../Home/1-Hero-Section";

const featuresArray = [
  "Unlimited Spaces",
  "Unlimited Form Responses",
  "Unlimited Project Cards",
  "Unlimited Automations",
  "Infintely Deep Workstreams",
  "Unlimited Form Plugins",
  "Granular Roles & Permissions",
  "Unlimited Web3 Integrations",
  "Payment with Custom Tokens",
  "Access to Spect Community",
  "Priority Support",
];

export default function Pricing() {
  return (
    <div className="h-full relative">
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="flex flex-col text-center items-center z-20">
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 bg-gradientTwo rounded-xl h-full p-8">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
            For teams of all sizes
          </h1>
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-4xl md:text-3xl sm:text-3xl font-bold z-40 p-2">
            <GradientWord className="my-3">Free</GradientWord>
          </h1>

          <div className="flex flex-col gap-3 mt-4">
            {featuresArray.map((feature) => {
              return (
                <div key={feature} className="flex flex-row gap-3 items-center">
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
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
