import styled from "styled-components";
import { PinkBlur, VioletBlur } from "../Home/1-Hero-Section";
import { FaEthereum } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import { GiDiamondTrophy } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

export const GradientWord = styled.h1`
  background: linear-gradient(180deg, #4200ff 0%, #ffffff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const Card = styled.div`
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 0px 1px 15px rgb(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.01);
  }
  min-height: 1rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const features = [
  {
    icon: "Gitcoin",
    title: "Sybil Resistant",
    content:
      "We’ve integrated Gitcoin Passport for you to create sybil resistant forms. And it is fully customizable!",
    link: "https://docs.spect.network/spect-docs/features/wtf-is-a-web3-enabled-form/enable-sybil-resistance",
  },
  {
    icon: "Token",
    title: "Role Gating",
    content:
      "Easily gate forms and allow specific role holders within your community to participate in feedback and surveys.",
    link: "https://docs.spect.network/spect-docs/features/wtf-is-a-web3-enabled-form/role-gating",
  },
  {
    icon: "Creds",
    title: "Credential Curation",
    content:
      "Connect with like minded people holding the same credentials as you!",
    link: "https://docs.spect.network/spect-docs/features/wtf-is-a-web3-enabled-form/credential-curation",
  },
  {
    icon: "Kudos",
    title: "Incentivization & Memorabilia",
    content:
      "Using Forms, you can automatically distribute NFTs, POAPs & even ERC-20 tokens to your community members.",
    link: "https://docs.spect.network/spect-docs/features/wtf-is-a-web3-enabled-form/soulbound-tokens-for-responders",
  },
];

export function Sorms() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-12 relative">
        <VioletBlur className="absolute top-0 left-0 blur-xl" />
        <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 p-4 my-6 lg:ml-24">
          <p className="text-2xl lg:text-left sm:text-center md:text-center text-zinc-500  sm:mt-8 md:mt-8 lg:mt-12 lg:w-4/5">
            Introducing
          </p>
          <GradientWord className="lg:text-8xl md:text-5xl sm:text-5xl sm:text-center md:text-center lg:text-left font-bold my-4">
            Forms
          </GradientWord>
          <p className="text-lg text-zinc-400 leading-normal lg:text-left sm:text-center md:text-center">
            The first sybil resistant, token gated,{" "}
            <span className="text-white">web3 form</span> built to empower you
            to run successful community surveys, onboarding, grant programs and
            so much more!
          </p>
          <div className="my-8 flex flex-row gap-4">
            <a href="https://circles.spect.network/">
              <button
                className="
              px-8
              py-3
              rounded-xl
              text-md
              text-purple
              text-bold
              bg-purple
              bg-opacity-5
              hover:bg-opacity-25
              duration-700"
              >
                Try Forms
              </button>
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-4 sm:col-span-4 z-20">
          <img
            src="/sorms-mobile.svg"
            className="lg:h-[36rem] md:h-[22rem] sm:h-[22rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 lg:mx-96 sm:mx-6 md:mx-6">
        {features.map((feat) => (
          <Card
            onClick={() => {}}
            className="lg:col-span-2 sm:col-span-4 md:col-span-4 rounded-xl hover:-translate-y-3 duration-700 text-center items-center"
          >
            <div className="text-purple p-2">
              {feat.icon == "Gitcoin" && (
                <MdSecurity
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Token" && (
                <FaEthereum
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Creds" && (
                <SiHandshake
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
              {feat.icon == "Kudos" && (
                <GiDiamondTrophy
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    margin: "0px auto",
                  }}
                />
              )}
            </div>
            <h2 className="text-2xl text-zinc-200 mt-4 leading-normal">
              {feat.title}
            </h2>
            <div className="text-sm text-zinc-400 py-2">{feat.content}</div>
          </Card>
        ))}
      </div>
    </>
  );
}
