import React from "react";
// import { StyledParagraph } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
// import { projectData } from "./projectsData";
// import ProjectCardComponent from "./ProjectCard";

const Productos = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle dark="true" >Directorio de Eventos</SectionTitle>
      </SectionHeading>
      <SectionHeading>
      <SectionTitle dark="true" style={{fontSize:"25px"}}>
        Visualiza la direccion de la Iglesia.
        </SectionTitle>
      </SectionHeading>
      
      <iframe style={{width: "100%",height: "500px"}} src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7185.405894075656!2d-100.25186207499333!3d25.780373534513004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8662eca99e6c7489%3A0x4feecbad93c5d240!2sSALON%20LOS%20KRISTALES%20APODACA%20NL%2C%20Hda.%20Los%20Robles%20322%2C%20Los%20Pinos%20IV%2C%2066636%20Cd%20Apodaca%2C%20N.L.!3m2!1d25.775785499999998!2d-100.25335249999999!4m5!1s0x8662eca2155f35d7%3A0x8d79e4bc6c1b63b7!2sParroquia%20Santa%20Teresita%20del%20Ni%C3%B1o%20Jes%C3%BAs%20en%20Apodaca%2C%20N.L.%2C%20Nogal%2C%20Ebanos%20IV%2C%20Ciudad%20Apodaca%2C%20Nuevo%20Leon!3m2!1d25.781243!2d-100.2389757!5e0!3m2!1sen!2smx!4v1674264884891!5m2!1sen!2smx"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
      <SectionHeading dark="true" textAlign="center">
      <SectionTitle dark="true" style={{fontSize:"25px"}}>
      
        Visualiza la direccion del Salon.
        </SectionTitle>
      </SectionHeading>

      <iframe  style={{width: "100%",height: "500px"}} src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7185.561211879615!2d-100.2505026249936!3d25.777809234517676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8662eca2155f35d7%3A0x8d79e4bc6c1b63b7!2sParroquia%20Santa%20Teresita%20del%20Ni%C3%B1o%20Jes%C3%BAs%20en%20Apodaca%2C%20N.L.%2C%20Nogal%2C%20Ebanos%20IV%2C%20Ciudad%20Apodaca%2C%20Nuevo%20Leon!3m2!1d25.781243!2d-100.2389757!4m5!1s0x8662eca99e6c7489%3A0x4feecbad93c5d240!2sSALON%20LOS%20KRISTALES%20APODACA%20NL%20SALON%20LOS%20KRISTALES%20APODACA%20NL%2C%20Hda.%20Los%20Robles%20322%2C%20Los%20Pinos%20IV%2C%2066636%20Cd%20Apodaca%2C%20N.L.!3m2!1d25.775785499999998!2d-100.25335249999999!5e0!3m2!1sen!2smx!4v1674260852380!5m2!1sen!2smx"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <ProjectsContainer>
        
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Productos;
