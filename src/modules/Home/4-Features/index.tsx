import styled from "styled-components";
import { ApartmentOutlined } from "@ant-design/icons";

const Card = styled.div`
  box-shadow: 0px 10px 15px black;
  min-height: 18rem;
`;

const features = [
  {
    icon: "ApartmentOutlined",
    title: "Modular",
    content:
      "Create as many workstreams as needed with their own roles, permissions & integrations and scale your organization as you grow.",
  },
  {
    icon: "Credentialing",
    title: "Embeddable",
    content:
      "Spect forms are embeddable on your website & other platforms making it possible for non-developers to build with ease.",
  },
  {
    icon: "Support",
    title: "Support like No Other",
    content:
      "Helping you achieve what you set out to achieve is our top priority. Build with Spect and experience customer support like never before.",
  },
];

export default function Features() {
  return (
    <div className="h-full bg-[#1B1B1B] p-4">
      <p className="text-5xl text-center font-semibold p-4 my-20 leading-normal">
        For the buidlers, By the buidlers
      </p>
      <div className="h-full grid grid-cols-3 gap-4 m-3 px-4">
        {features.map((feature) => {
          return (
            <div
              className="lg:col-span-1 md:col-span-3 sm:col-span-3 p-8 sm:p-0 lg:mx-2"
              key={feature.title}
            >
              <Card className="w-full bg-gradientTwo rounded-2xl p-8 flex flex-col gap-4 content-center text-center">
                {feature.icon == "ApartmentOutlined" && (
                  <ApartmentOutlined
                    style={{ fontSize: "2.5rem" }}
                    className="opacity-70 hover:opacity-90 duration-700"
                  />
                )}
                {feature.icon == "Credentialing" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    height={"2.5rem"}
                    className="opacity-70 hover:opacity-90 duration-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                )}
                {feature.icon == "Support" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    height={"2.5rem"}
                    className="opacity-70 hover:opacity-90 duration-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
                <p className="text-xl text-zinc-300">{feature.title}</p>
                <p className="text-zinc-500">{feature.content}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
