import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";
import customImg from "../../../assets/pepe.jpg";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const logoSource = checkImageURL(companyLogo)
    ? { uri: companyLogo }
    : customImg;

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={logoSource} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="cover"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
