import { View, Text, Image } from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Features = () => {
    return (
        <View style={{ height: hp(60) }} className="space-y-4">
            <Text style={{ fontSize: wp(6.5) }} className="font-semibold text-gray-700">
                Features
            </Text>
            <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        className="rounded-lg "
                        source={require('../../assets/images/chatgbticon.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-600">
                        ChatGBT
                    </Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium">
                    I'm ChatGPT, an AI by OpenAI that helps with answering questions,
                    offering insights, and assisting in conversations.{' '}
                </Text>
            </View>
            <View className="bg-purple-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        className="rounded-lg "
                        source={require('../../assets/images/dall-e.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-600">
                        DALL-E
                    </Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium">
                    DALL-E is an AI model developed by OpenAI that generates images from text descriptions.
                </Text>
            </View>
            <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
                <View className="flex-row items-center space-x-1">
                    <Image
                        className="rounded-lg "
                        source={require('../../assets/images/smart-ia.png')}
                        style={{ height: hp(4), width: hp(4) }}
                    />
                    <Text
                        style={{ fontSize: wp(4.8) }}
                        className="font-semibold text-gray-600">
                        Smart AI
                    </Text>
                </View>
                <Text style={{ fontSize: wp(3.8) }} className="text-gray-600 font-medium">
                    Smart AI is advanced technology that learns, adapts, and makes decisions to perform tasks efficiently.
                </Text>
            </View>
        </View>
    );
};

export default Features;
