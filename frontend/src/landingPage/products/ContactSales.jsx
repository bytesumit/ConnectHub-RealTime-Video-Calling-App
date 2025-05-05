import React, { useEffect } from "react";
import styled from "styled-components";
import { TextField, Button, Container, Grid, Typography, Box } from "@mui/material";

const ContactSales = () => {
  useEffect(() => {
    // Adding a fade-in effect when the component mounts
    document.body.style.animation = "fadeIn 1s ease-out";
  }, []);

  return (
    <section style={{ backgroundColor: "#f4f6f9", padding: "40px 0" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Left Column - Form */}
          <Grid item xs={12} md={6}>
            <FormBox>
              <Typography variant="h5" gutterBottom>
                Contact Our Sales Team
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Let's explore how ConnectHub can empower your organization.
              </Typography>
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      placeholder="John"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      placeholder="Doe"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company Email"
                      variant="outlined"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      placeholder="+1 123-456-7890"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      variant="outlined"
                      placeholder="ConnectHub Inc."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="How can we help?"
                      variant="outlined"
                      placeholder="Tell us more about your team's needs..."
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <Box mt={3} textAlign="right">
                  <StyledButton type="submit">
                    Submit Inquiry
                  </StyledButton>
                </Box>
              </form>
              <Typography variant="body2" color="textSecondary" textAlign="center" mt={2}>
                Our team will reach out within 1-2 business days.
              </Typography>
            </FormBox>
          </Grid>

          {/* Right Column - ConnectHub Information */}
          <Grid item xs={12} md={6}>
            <InfoBox>
              <Typography variant="h5" gutterBottom>
                About ConnectHub
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                ConnectHub is a powerful, collaborative platform designed to bring teams together for seamless communication and productivity. Whether you're looking for secure video conferencing, team collaboration tools, or an integrated solution for your company, ConnectHub offers everything you need to streamline your workflow.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Features:
              </Typography>
              <ul>
                <li>Real-time video and audio conferencing</li>
                <li>Screen sharing capabilities</li>
                <li>Integrated chat and messaging system</li>
                <li>Secure cloud storage for meetings and recordings</li>
                <li>Cross-platform support (web, mobile, desktop)</li>
              </ul>
              <Typography variant="body1" color="textSecondary">
                Learn more about how ConnectHub can help your team by reaching out to our sales team!
              </Typography>
            </InfoBox>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

// Styled components
const FormBox = styled(Box)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledButton = styled(Button)`
  background-color: #0ea5e9;
  color: white;
  border-radius: 8px;
  &:hover {
    background-color: #0284c7;
  }
  transition: all 0.3s ease;
`;

const InfoBox = styled(Box)`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export default ContactSales;
