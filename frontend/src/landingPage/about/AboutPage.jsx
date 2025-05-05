import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { FaUsers, FaRocket, FaRegHandshake, FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    // Adding an animation for the page load
    document.body.style.animation = "fadeIn 2s ease-out";
  }, []);

  return (
    <div style={{ backgroundColor: "#f4f6f9" }}>
      <Container>
        <Box pt={5}>
          <Typography variant="h3" align="center" gutterBottom color="#1e293b">
            Welcome to ConnectHub
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            ConnectHub is a platform built to connect teams, enhance productivity, and streamline communication. Our mission is to provide businesses with the tools they need to succeed in the digital world.
          </Typography>
        </Box>

        {/* Section 1: Our Mission */}
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="primary" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                At ConnectHub, we believe that collaboration is the key to success. Our mission is to create a seamless and efficient platform for remote teams to work together, share ideas, and achieve their goals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <IconBox>
                <FaRocket size={80} color="#0ea5e9" />
                <Typography variant="h5" mt={2} color="#0ea5e9">
                  Boost Your Productivity
                </Typography>
              </IconBox>
            </Grid>
          </Grid>
        </Section>

        {/* Section 2: Features */}
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="primary" gutterBottom>
                Core Features
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                ConnectHub offers a variety of features designed to facilitate communication and collaboration among teams:
              </Typography>
              <ul>
                <li>Real-time video conferencing 🎥</li>
                <li>Screen sharing for easy collaboration 🖥️</li>
                <li>Integrated chat for quick messaging 💬</li>
                <li>Secure file sharing and storage 📂</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureIcons>
                <FaUsers size={60} color="#fbbf24" />
                <FaRegHandshake size={60} color="#ef4444" />
                <FaRegLightbulb size={60} color="#34d399" />
              </FeatureIcons>
            </Grid>
          </Grid>
        </Section>

        {/* Section 3: Vision */}
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="primary" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" color="textSecondary">
                We envision a world where remote teams can collaborate as if they were in the same room. ConnectHub aims to bridge the gap between distributed teams, allowing them to communicate effectively and drive innovation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <IconBox>
                <FaRocket size={80} color="#10b981" />
                <Typography variant="h5" mt={2} color="#10b981">
                  Empowering Teams Worldwide
                </Typography>
              </IconBox>
            </Grid>
          </Grid>
        </Section>

        {/* Contact Section */}
        <Box mt={5} textAlign="center">
            <Link to="/">
          <Button variant="contained" color="primary" size="large">
            Get Started with ConnectHub 🚀
          </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

// Styled Components
const Section = styled(Box)`
  background-color: #ffffff;
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const IconBox = styled(Box)`
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  background-color: #f9fafb;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const FeatureIcons = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
`;

export default AboutPage;
