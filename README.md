# react-native-elevate
A Material Design shadow generator which provides similar results on both Android & iOS.<br>
Note: Keyword here is <i>similar</i> as on Android the position of the element will determine the size and opacity of the drop shadow.<br>
Inspired by:
- https://material.io/design/environment/elevation.html
- https://github.com/ethercreative/react-native-shadow-generator

## Installation
Install the package using Yarn:
```
yarn add react-native-elevate
```
or npm:
```
npm install --save react-native-elevate
```
## Usage
Import the function:
```
import { elevate } from "react-native-elevation"
```
Use it in a StyleSheet:
```
const styles = StyleSheet.create({
	container: {
		...elevate(4)
	}
})
```
Use it in your component:
```
<View style={[styles.wrapper, elevate(2)]}>
	...
</View>
```

## Example
<img width="300" alt="android-elevation" src="https://user-images.githubusercontent.com/24901702/66718734-676dfb00-ede7-11e9-8b9d-389ef0d9e5bd.png"><img width="370" alt="iphone-elevation" src="https://user-images.githubusercontent.com/24901702/66718742-7eace880-ede7-11e9-8e88-80c04887a2d6.png">