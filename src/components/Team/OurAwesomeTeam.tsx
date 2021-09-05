import React from 'react';

import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

import { TeamMemberData } from '../../../types';

type OurAwesomeTeamProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  members: TeamMemberData[];
};

function OurAwesomeTeam(props: OurAwesomeTeamProps) {
  const { title, subtitle, description, members } = props;
  return (
    <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
      <div className="container">
        {title && (
          <div className="section-title">
            {subtitle && <span className="sub-title">{subtitle}</span>}
            <h2>{title}</h2>
            <div className="bar"></div>
            {description && <p>{description}</p>}
          </div>
        )}

        <div className="row justify-content-center">
          {members.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src="/images/team-image/team1.jpg" alt="image" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <Link to="#">
                        <Icon.Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon.Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon.Linkedin />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Icon.Gitlab />
                      </Link>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAwesomeTeam;
