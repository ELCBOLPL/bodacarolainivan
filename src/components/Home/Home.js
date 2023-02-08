import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Social,
  Socials,
  // Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import CountdownTimer from '../Clock/CountdownTimer';

const Home = () => {
  const THREE_DAYS_IN_MS = 205 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Acompañanos a nuestra Boda</Name>
        <Title>IVAN Y CAROLAIN</Title>
        <p className="responsive">
          Te mostramos <span className="change-text"></span>{" "}
          <span className="responsive">F</span>
          <span className="responsive">o</span>
          <span className="responsive">t</span>
          <span className="responsive">o</span>
          <span className="responsive">s</span>
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Ubicaciones</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Nosotros</span>
          </StyledButton>
        </StyledButtonsContainer>
        {/* <Line /> */}
        
        <Socials>
          <Social
            href="mailto:jerichobantiquete@gmail.com"
            target="https://wa.me/15551234567"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/monciego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
        
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
