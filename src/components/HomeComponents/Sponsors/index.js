import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Title from "../../common/Text/Title";
import SponsCard from "../../common/SponsCard";
import {
  associateSponsors,
  coTitleSponsors,
  goldSponsors,
  silverSponsors,
  titleSponsor,
  blockChain,
  radioPartner,
  groomingPartner,
  studentCredit,
} from '../../../utils/SponsData';

function Index({ sponsData }) {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      offset={window.innerHeight / 2}
    >
      <div className="grid grid-cols-10 gap-4 container">
        <div className="block lg:hidden col-span-10">
          <Title title="Sponsors" />
        </div>
        <div className="col-span-10 lg:col-span-5">
          <h1 className="font-bold text-3xl p-4 text-white">Title Sponsor</h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {titleSponsor.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
          <h1 className="font-bold text-3xl p-4 text-white">
            Co-title Sponsors
          </h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {coTitleSponsors.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>

          <h1 className="font-bold text-3xl p-4 text-white">
            Associate Sponsors
          </h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {associateSponsors.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>

          <h1 className="font-bold text-2xl p-4 text-white">
            Blockchain Sponsor
          </h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {blockChain.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>

          <h1 className="font-bold text-3xl  p-4 text-white">Gold Sponsors</h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {goldSponsors.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>

          <h1 className="font-bold text-3xl p-4 text-white">Silver Sponsors</h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {silverSponsors.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
          <h1 className="font-bold text-2xl p-4 text-white">Radio Partner</h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {radioPartner.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
          <h1 className="font-bold text-2xl p-4 text-white">
            Grooming Partner
          </h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {groomingPartner.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
          <h1 className="font-bold text-2xl p-4 text-white">Student Credit Partner</h1>
          <div
            className="grid grid-cols-2 pr-14"
            style={{
              width: '100%',
              overflow: 'scroll',
            }}
          >
            {studentCredit.map((item, index) => (
              <div key={index} className="col-span-1">
                <SponsCard index={index} item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block col-span-5">
          <div
            style={{
              position: 'sticky',
              top: '50%',
              marginTop: '200px',
              paddingBottom: '100px',
            }}
          >
            <Title title="Sponsors" />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Index;
