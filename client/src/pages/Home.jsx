import {
  Flex,
  Box,
  Text,
  Center,
  Heading,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";

import React from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomePageFund from "./HomePageFund";
import ReviewCard from "./ReviewCard";
import Footer from "./../components/Footer";

import "./home.css";
// import { useRef } from 'react'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
      textAlign={"left"}
      ml={{ base: 0, md: "2%", lg: "2%" }}
      mt={"0px"}
    >  
      </Box>  
      <div>      
        <Box
          h={"480"}
          maxH={"500px"}
          w={"200"}
          bgImage="url('pavan.png')"
          bgPos={"right"}
          bgRepeat={"no-repeat"}
          // bgAttachment={"fixed"}
          bgSize={"contain"}
          // bgRadius={"30%"}
          boxShadow={"5px solid gray"}
        >
          <Center>
            <Flex
              minH={"45px"}
              w={"fit-content"}
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              mt={"10px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              lineHeight={2}
              p="8px 10px"
              borderRadius={"5px"}
            >
              <Text fontSize={"18px"}>
               It includes latest Assistance we supported...
              </Text>

              <AiFillRightCircle
                color="#9c3353"
                style={{ height: "28px", width: "35px" }}
              />
            </Flex>
          </Center>
          <Box
            textAlign={"left"}
            ml={{ base: 0, md: "3%", lg: "8%" }}
            mt={"6%"}
          >
            <Heading>HopeHouse</Heading>
            <Text mt={"1%"} mb={"2%"} ml={"10%"} fontSize={"20px"} color={"brown"}>
                            - A Light for Life
            </Text>
            <Text fontSize={"20px"} noOfLines={4}>
              Raise funds online for medical emergencies
              <br /> and social causes
            </Text>
           
            <Flex
              w={"40%"}
              justifyContent={"space-around"}
              mt={"3%"}
              fontSize={"20px"}
            >
              <Box>
                <Text as={"b"} color={"#9c3353"}>
                  100+
                </Text>
                <br />
                <Text>Cases Solved</Text>
              </Box>
              <hr
                style={{
                  height: "50px",
                  marginTop: "2px",
                  border: "1px solid #9c3353",
                }}
              />
              <Box>
                <Text as={"b"} color={"#9c3353"}>
                  Around 50K+
                </Text>
                <br />
                <Text>Maximum Raised Fund</Text>
              </Box>
              <hr
                style={{
                  height: "50px",
                  marginTop: "2px",
                  border: "1px solid #9c3353",
                }}
              />
              <Box>
                <Text as={"b"} color={"#9c3353"}>
                  Upto $3 lakhs 
                </Text>
                <br />
                <Text>Max Support</Text>
              </Box>
            </Flex>
          </Box>
          <Center mt={"5%"}>
            <Box
              shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              minH={"70px"}
              w={"70%"}
              borderRadius="10px"
            >
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <hr
                  style={{
                    minHeight: "70px",
                    width: "4px",
                    border: "1px solid #9c3353",
                    backgroundColor: "#9c3353",
                  }}
                />
                <Box>
                  <Flex>
                    <Text fontSize={"2xl"}>
                      This platform helps in assisting needy for Financial Assistance
                    </Text>
                  </Flex>
                </Box>
                <Text mr={"2%"} as={"b"} fontSize={"5xl"} color={"#9c3353"}>
                </Text>
              </Flex>
            </Box>
          </Center>
        </Box>
        <HomePageFund />
        <Center>
          <Link to="/donate">
            <Text as={"u"} fontSize={"20px"} color={"#9c3353"}>
              See more fundraisers
            </Text>
          </Link>
        </Center>
        <Center>
          <Box
            w={"80%"}
            minH={"350px"}
            mt={"4%"}
            shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justifyContent={"space-around"} wrap={"wrap"} mt={"3%"}>
              <Box w={"30%"}>
                <Image src="./img1.png" height={"350px"} />
              </Box>
              <Box w={"68%"}>
                <Text as={"b"} fontSize={"20px"}>
                  HopeHouse app - fundraise and donate
                  <br /> seamlessly!
                </Text>
                <Text mt={"2%"} mb={"2%"}>
                  Set up and manage your fundraiser or donate to different
                  <br /> causes from your mobile at anytime and from anywhere
                </Text>
                <Center>
                  <Image src="./img2.png" />
                </Center>
                <Center>
                  <Text mt={"2%"}>Scan the QR Code to share money.</Text>
                </Center>
                
              </Box>
            </Flex>
          </Box>
        </Center>
        <Flex
          w={"100%"}
          minH={"120px"}
          alignItems="center"
          justify={"center"}
          bgcolor={"#9c3353"}
          mt={"4%"}
        >
          <Flex
            minH={"80px"}
            w={"85%"}
            borderRadius={"12px"}
            shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            bgcolor={"whitesmoke"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Text fontSize={"25px"}>
              Need help to setup your free fundraiser?
            </Text>
            <Button
              fontSize={"18px"}
              color={"white"}
              fontWeight="400"
              bg={"#9c3353"}
              borderRadius={"18px"}
              p="25px"
              onClick={onOpen}
            >
              <Flex gap={"4%"} justify="center" alignItems={"center"}>
                <BsTelephone style={{ height: "28px", width: "20%" }} />
                <Text>Request a call</Text>
              </Flex>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Center>
                    <Flex gap={"4%"}>
                      <Image
                        src="https://assets.milaap.org/assets/logo-b116caabc9aa15dcaab7a338d390d3c8d630933474a3be5822d22bb6d617706b.png"
                        h={"40px"}
                      />
                      <Text mt={"12%"} fontSize={"sm"}>
                        HopeHouse
                      </Text>
                    </Flex>
                  </Center>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Text>Raise funds online with HopeHouse</Text>
                  </Center>
                  <Text mt={"5%"} mb={"5%"}>
                    Fill your details & we will connect with you shortly
                  </Text>
                  <form style={{ width: "100%" }}>
                    <input
                      style={{
                        width: "100%",
                        height: "40px",
                        border: "1px solid black",
                        marginBottom: "3%",
                      }}
                      type="text"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      style={{
                        width: "100%",
                        height: "40px",
                        border: "1px solid black",
                        marginTop: "2%",
                        marginBottom: "2%",
                      }}
                      type="number"
                      placeholder="Phone Number"
                    />
                    <br />
                    <Text fontSize={"sm"}>
                      We will contact you on this number
                    </Text>
                    <Select
                      style={{ marginTop: "2%" }}
                      placeholder="Why are you fundraising"
                    >
                      <option>Education</option>
                      <option>Cancer treatment</option>
                      <option>Kidney transplant</option>
                      <option>Cardiac surgery</option>
                      <option>Accident / trauma treatment</option>
                      <option>ICU(Adult)</option>
                      <option>ICU(Child)</option>
                      <option>Memorial</option>
                      <option>Others</option>
                    </Select>
                    <Select
                      style={{ marginTop: "2%" }}
                      placeholder="Preffered language"
                    >
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Bengali</option>
                      <option>Marathi</option>
                      <option>Telugu</option>
                      <option>Gujarati</option>
                      <option>Urdu</option>
                      <option>Bhojpuri</option>
                      <option>Odia</option>
                    </Select>
                    <Center>
                      <Button
                        mt={"4%"}
                        type="submit"
                        color="white"
                        bgColor={"#9c3353"}
                      >
                        Submit
                      </Button>
                    </Center>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
        <ReviewCard />
        <Center>
          <Link to={"/review"}>
            <Text color={"#9c3353"} fontSize={"sm"} as={"u"}>
              See all reviews
            </Text>
          </Link>
        </Center>
      </div>
      <Footer />
    </>
  );
};

export default Home;


