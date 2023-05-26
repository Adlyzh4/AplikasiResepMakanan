import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

const LanguageSelector = ({ onSelectLanguage }) => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    const fetchLanguages = async () => {
      const options = {
        method: 'GET',
        url: 'https://text-translator2.p.rapidapi.com/getLanguages',
        headers: {
          'X-RapidAPI-Key': '158002cb54msh660f8bcbc43748ep1ccb16jsndea7411c84f9',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setLanguages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language.label);
    onSelectLanguage(language);
  };

  if (languages.length === 0) {
    return <Text>Loading languages...</Text>;
  }

  return (
    <View>
      <Text>Select Language:</Text>
      <ModalSelector
        data={languages.map((language) => ({
          key: language.code,
          label: language.name,
        }))}
        initValue="Select Language"
        onChange={handleLanguageSelection}
      />
    </View>
  );
};

export default LanguageSelector;
