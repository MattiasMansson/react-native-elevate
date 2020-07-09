import { Platform, ShadowStyleIOS, ViewStyle } from 'react-native';

const iOSElevationShadows = [
    '0 0 0 0',
    '0 0.4 0.20 0.80',
    '0 1.0 0.20 1.41',
    '0 1.0 0.20 2.22',
    '0 2.0 0.20 2.62',
    '0 2.0 0.20 3.84',
    '0 3.0 0.20 4.65',
    '0 3.0 0.20 4.65',
    '0 4.0 0.20 4.65',
    '0 4.0 0.20 5.46',
    '0 5.0 0.20 6.27',
    '0 5.0 0.20 6.68',
    '0 6.0 0.20 7.49',
    '0 6.0 0.20 8.30',
    '0 7.0 0.20 9.11',
    '0 7.0 0.20 9.51',
    '0 8.0 0.20 10.32',
    '0 8.0 0.20 11.14',
    '0 9.0 0.20 11.95',
    '0 9.0 0.20 12.35',
    '0 10.0 0.20 13.16',
    '0 10.0 0.20 13.97',
    '0 11.0 0.20 14.78',
    '0 11.0 0.20 15.19',
    '0 12.0 0.20 16.00',
];

const getiOSElevationShadow = (index: number): ShadowStyleIOS => {
    const shadowDimensions = iOSElevationShadows[index]
        .split(' ')
        .map((shadowValue) => parseFloat(shadowValue));

    return {
        shadowColor: '#000',
        shadowOffset: {
            height: shadowDimensions[1],
            width: shadowDimensions[0],
        },
        shadowOpacity: shadowDimensions[2],
        shadowRadius: shadowDimensions[3],
    };
};

const getValidElevation = (distance?: number): number => {
    const maxDistance = 24;
    const minDistance = 0;

    if (!distance || distance < minDistance) {
        return 0;
    }

    return distance > maxDistance ? maxDistance : distance;
};

/**
 * Returns drop shadow based on desired elevation distance.
 * @param distance number ranging from 0 to 24
 */
export const elevate = (distance?: number): ViewStyle => {
    const elevation = getValidElevation(distance);
    const androidElevation = { elevation };
    const iOSShadow = getiOSElevationShadow(elevation);

    return Platform.OS === 'ios' ? iOSShadow : androidElevation;
};
