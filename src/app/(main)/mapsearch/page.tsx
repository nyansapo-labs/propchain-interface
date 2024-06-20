"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import { Box, Flex, Text, Heading, HStack, Spinner } from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import React, { ReactElement } from "react";
import MapHeader from "./header";
import Footer from "@/views/home/sections/footer";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/json/Animation - 1718743118654.json";
import axios from "axios";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ErrorComponent from "./ErrorComponent";

import {
  GoogleMap,
  useJsApiLoader,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import { MapSearchResultProps } from "./type";

const containerStyle = {
  width: "100%",
  height: "1000px",
};

const initialCenter = {
  lat: -3.745,
  lng: -38.523,
};

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <ErrorComponent />;
  return <Spinner />;
};

const Mapsearch = () => {
  const apiKey = "";
  //   if (!apiKey) {
  //     throw new Error("Google Maps API key is not defined.");
  //     return <Box>Google Maps API key is not defined.</Box>;
  //   }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(initialCenter);
  const [info, setInfo] = useState<MapSearchResultProps | null>(null);
  const [loading, setLoading] = useState(true);

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            try {
              const response = await axios.post<MapSearchResultProps>(
                "/api/getaddress",
                {
                  latitude,
                  longitude,
                }
              );
              const result = response.data;
              //   console.log(result, "this is the map search result");
              setInfo(result);
              setCenter({
                lat: result.NLat,
                lng: result.Slat,
              });
            } catch (error) {
              console.error("Error fetching address:", error);
            } finally {
              setLoading(false);
            }
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <MapHeader />
      <Box
        as="section"
        id="map"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
      >
        <ContainerWrapper>
          <Flex justifyContent="center" alignItems="center">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {info && (
                  <MarkerF position={center}>
                    <InfoWindowF position={center}>
                      <Box>
                        <Text>Area: </Text>
                        <Text>GPSNAME: </Text>
                        <Text>GPSN: </Text>
                        <Text>Address:</Text>
                      </Box>
                    </InfoWindowF>
                  </MarkerF>
                )}
              </GoogleMap>
            ) : (
              <Flex justifyContent="center" alignItems="center">
                <Lottie
                  animationData={loadingAnimation}
                  style={{ height: 400 }}
                />
              </Flex>
            )}
          </Flex>
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default Mapsearch;
