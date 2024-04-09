import React from "react";
import { View } from "react-native";

import { ExternalLink } from "./external-link";
import { Text } from "./ui/text";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>
          Open up the code for this screen:
        </Text>

        <View className={styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>

        <Text className={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className={styles.helpContainer}>
        <ExternalLink
          className={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = {
  getStartedContainer: `items-center mx-8`,
  homeScreenFilename: `px-4 my-6`,
  codeHighlightContainer: `rounded-lg px-4`,
  getStartedText: `text-lg lreading-4 text-center`,
  helpContainer: `mt-2 mx-4 items-center`,
  helpLink: `py-4 underline`,
  helpLinkText: `text-center`,
};
