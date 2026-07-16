import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { searchBarStyles } from "../../styles/searchBarStyle";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={searchBarStyles.container}>
      <Ionicons
        name="search"
        size={20}
        color="#888"
        style={searchBarStyles.icon}
      />
      <TextInput
        style={searchBarStyles.searchBox}
        placeholder="Search employees by name, department..."
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
}
